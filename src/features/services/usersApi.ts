import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery, { TOKEN_ROUTE, type TokensResponse } from "../baseQuery";
import AppConfig from "../../AppConfig";

export type UserDetails = {
  iat: number;
  exp: number;
  clientId: string;
  email: string;
  preferredUsername: string;
  name: string;
  isEmailVerified: boolean;
  phoneNumber: string;
  sub: string;
};

export type Credentials = { email: string; password: string };

export const LOGIN_TOKEN = "login";

export type RefreshTokenResponse = {};

//const REGISTER_USER_ROUTE = "/api/Accounts/register";
//const FORGOT_PASSWORD_ROUTE = "/api/accounts/forgotPassword";
//const CHANGE_PASSWORD_ROUTE = "/api/accounts/changePassword";
//const UPDATE_USER_INFO_ROUTE = "/api/accounts/updateUserInfo";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: axiosBaseQuery({
    baseUrl: AppConfig.API_BASE_URL,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    registerUser: builder.mutation(
      //<
      //  UserRegistrationResponse,
      //  UserRegistrationRequest

      //>
      {
        query: (data) => ({
          //url: REGISTER_USER_ROUTE,
          method: "POST",
          data,
        }),
      }
    ),
    login: builder.mutation<TokensResponse, Credentials>({
      query: ({ email, password }) => ({
        url: LOGIN_TOKEN,
        method: "POST",
        data: {
          //grant_type: "password",
          //client_id: appConfig.CLIENT_ID,
          email: email,
          password: password,
          //scope: "openid profile fullaccess offline_access",
        },
        headers: { "Content-Type": "application/json" },
      }),
    }),
    refreshToken: builder.mutation<
      RefreshTokenResponse,
      { refreshToken: string }
    >({
      query: ({ refreshToken }) => ({
        url: TOKEN_ROUTE,
        method: "POST",
        data: {
          //grant_type: "refresh_token",
          //client_id: appConfig.CLIENT_ID,
          refresh_token: refreshToken,
        },
        headers: { "Content-Type": "application/json" },
      }),
    }),
    updateUserProfile: builder.mutation<void, void>({
      query: (data) => ({
        //url: UPDATE_USER_INFO_ROUTE,
        method: "POST",
        data,
      }),
    }),
    //
    changePassword: builder.mutation<void, void>({
      query: (data) => ({
        //url: CHANGE_PASSWORD_ROUTE,
        method: "POST",
        data,
      }),
    }),
    // send code then reset
    sendForgotPasswordEmail: builder.mutation<void, void>({
      //{ email: string }
      query: (_email) => ({
        // url: FORGOT_PASSWORD_ROUTE + `/${email}`,
        method: "POST",
      }),
    }),
    // first step is send code then reset
    resetPasswordWithCode: builder.mutation<void, void>({
      query: (data) => ({
        //url: CHANGE_PASSWORD_ROUTE,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRefreshTokenMutation } = usersApi;
