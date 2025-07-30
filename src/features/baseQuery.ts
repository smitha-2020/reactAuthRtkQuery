import axios, { AxiosError, type AxiosRequestConfig } from "axios";

import { clearAuth, updateAuth } from "./slices/authSlice";
import type { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../app/store";
import { Mutex } from "async-mutex";

export const TOKEN_ROUTE: string = "refresh-token";

export type TokensResponse = {
  access_token: string;
  refresh_token: string;
};

interface AxiosBaseQueryParams extends AxiosRequestConfig {
  params?: { [key: string]: any };
}
const getError = (err: AxiosError) => {
  return {
    error: { status: err.response?.status, data: err.response?.data },
  };
};
//  create a new mutex
const mutex = new Mutex();
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = {
      baseUrl: "",
    }
  ): BaseQueryFn<AxiosBaseQueryParams> =>
  async ({ url, method, data, params, headers }, api) => {
    const { accessToken, refreshToken, isAuthenticated } = (
      api.getState() as RootState
    ).authSlice;

    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();

    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: isAuthenticated
          ? { ...headers, Authorization: `Bearer ${accessToken}` }
          : { ...headers },
      });
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;

      const unauthorized =
        error.response?.status && error.response.status === 401;

      if (!unauthorized) {
        return getError(error);
      }

      // UNAUTHORIZED, assume expired access token and try to refresh it
      let newAccessToken = accessToken;
      // checking whether the mutex is locked
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        // REFRESH ACCESS TOKEN
        try {
          const refreshResponse = await axios({
            url: baseUrl + TOKEN_ROUTE,
            method: "POST",
            data: {
              //grant_type: "refresh_token",
              //client_id: appConfig.CLIENT_ID,
              refresh_token: refreshToken,
            },
            headers: {
              ...{ "Content-Type": "application/json" },
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const sessionData: TokensResponse = refreshResponse.data;
          newAccessToken = sessionData.access_token;

          api.dispatch(
            updateAuth({
              isAuthenticated: true,
              accessToken: sessionData.access_token,
              refreshToken: sessionData.refresh_token,
            })
          );
        } catch (_axiosError) {
          // any error which occurs on the refresh request clears the auth state
          api.dispatch(clearAuth());
          let _err = _axiosError as AxiosError;
          return getError(_err);
        } finally {
          // release must be called once the mutex should be released again.
          release();
        }
        // RETRY THE ORIGINAL REQUEST WITH THE NEW ACCESS TOKEN
        try {
          const result = await axios({
            url: baseUrl + url,
            method,
            data,
            params,
            headers: { ...headers, Authorization: `Bearer ${newAccessToken}` },
          });
          return { data: result.data };
        } catch (e) {
          const _error = e as AxiosError;
          return getError(_error);
        }
      } else {
        // wait until the mutex is available without locking it
        await mutex.waitForUnlock();
        try {
          const _result = await axios({
            url: baseUrl + url,
            method,
            data,
            params,
            headers: { ...headers, Authorization: `Bearer ${accessToken}` },
          });
          return { data: _result.data };
        } catch (e) {
          const _error = e as AxiosError;
          return getError(_error);
        }
      }
    }
  };

export default axiosBaseQuery;
