import { useEffect } from "react";
import { clearStorage, getItemToStorage } from "../utils/secureStorage";
import { useAppDispatch } from "../app/hook";
import { clearAuth, updateAuth } from "../features/slices/authSlice";

export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const tokenWithExpiry = getItemToStorage("TOKEN");

    const tokenWithExpiredEntry = JSON.parse(tokenWithExpiry!)!;

    if (tokenWithExpiredEntry) {
      dispatch(
        updateAuth({
          accessToken: tokenWithExpiredEntry.accessToken,
          refreshToken: tokenWithExpiredEntry.refreshToken,
          expiresIn: tokenWithExpiredEntry.expiresIn,
          isAuthenticated: true,
        })
      );

      if (
        tokenWithExpiry &&
        Number(tokenWithExpiredEntry.expiresIn) <= Date.now()
      ) {
        // Now it clears the storage and forces to login
        //TODO: Need to change the logic to accomadate using the refresh token to generate a new pair of tokens
        dispatch(clearAuth());
        clearStorage();
      }
    }
  }, []);
};
