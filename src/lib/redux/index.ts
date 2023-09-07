import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@src/lib/redux/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { baseApi } from "@src/lib/api/baseApi";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
