import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "@src/lib/redux/counter-slice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { baseApi } from "@src/lib/api/base-api";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "@src/lib/redux/utils/storage";

const persistConfig = {
  key: "primary",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  [counterSlice.name]: counterReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
