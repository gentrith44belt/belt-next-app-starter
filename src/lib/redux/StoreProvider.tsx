'use client';

import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import {store} from "@src/lib/redux/index";

type Props = PropsWithChildren;

const StoreProvider = (props: Props) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default StoreProvider;
