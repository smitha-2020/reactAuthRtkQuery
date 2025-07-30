import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/slices/authSlice";
import { usersApi } from "../features/services/usersApi";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,

    // API
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
