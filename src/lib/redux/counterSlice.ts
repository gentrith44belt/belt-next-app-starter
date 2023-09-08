import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import persist from "@src/lib/redux/utils/persist";

export interface CounterState {
  value: number;
  title: string;
}

const initialState: CounterState = {
  value: 0,
  title: "Lorem ipsum counter",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setTitle } =
  counterSlice.actions;

export default persist({
  key: counterSlice.name,
  reducer: counterSlice.reducer,
  whitelist: ["value"],
});
