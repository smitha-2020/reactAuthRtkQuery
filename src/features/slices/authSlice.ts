import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export enum AuthorizationRole {
  "customer",
  "manager",
  "employee",
}

export type UserDetails = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: AuthorizationRole;
  avatar: string;
};

export type AuthType = {
  data: UserDetails;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  expiresIn: string;
};

const initialState: AuthType = {
  data: {
    id: "",
    email: "",
    password: "",
    name: "",
    role: AuthorizationRole.customer,
    avatar: "",
  },
  accessToken: "",
  refreshToken: "",
  isAuthenticated: false,
  expiresIn: "",
};

{
  /**export const authThunk = createAsyncThunk(
  "auth",
  async (credential: Credentials) => {
    const response = await axios.post<TokensResponse, any>(
      AppConfig.API_BASE_URL + "login",
      credential,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
); */
}

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthType>) => {
      return action.payload;
    },
    updateAuth: (state, action: PayloadAction<Partial<AuthType>>) => {
      //console.log({ ...state, ...action.payload });
      state.accessToken = action.payload?.accessToken ?? "";
      state.refreshToken = action.payload?.refreshToken ?? "";
      state.expiresIn = action.payload?.expiresIn ?? "";
      state.isAuthenticated = action.payload.isAuthenticated ?? false;
    },
    clearAuth: () => {
      return { ...initialState };
    },
  },
});
export const { setAuth, updateAuth, clearAuth } = authSlice.actions;

export default authSlice;
