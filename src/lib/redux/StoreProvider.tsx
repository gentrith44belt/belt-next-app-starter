"use client";

import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@src/lib/redux";

type Props = PropsWithChildren;

const StoreProvider = (props: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
