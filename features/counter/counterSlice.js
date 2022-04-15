import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 44.0925,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    resetValue: (state) => {
      state.value = 44.0925;
    },
  },
});

export const { incrementByAmount, decrementByAmount, resetValue } =
  counterSlice.actions;

export default counterSlice.reducer;
