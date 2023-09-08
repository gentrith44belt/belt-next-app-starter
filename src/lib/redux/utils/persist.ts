import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { StateReconciler, persistReducer } from "redux-persist";
import storage from "@src/lib/redux/utils/storage";

interface PersistParams<T> {
  key: string;
  reducer: Reducer<T, AnyAction>;
  whitelist?: (keyof T & string)[];
  stateReconciler?: StateReconciler<T>;
}

const persist = <State>({
  key,
  reducer,
  whitelist,
  stateReconciler,
}: PersistParams<State>) => {
  return persistReducer(
    {
      key,
      storage,
      whitelist,
      stateReconciler,
    },
    reducer,
  );
};

export default persist;
