import { createSlice } from "@reduxjs/toolkit";

export const kilocounterSlice = createSlice({
  name: "kilocounter",
  initialState: {
    value: 20,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    resetValue: (state) => {
      state.value = 20;
    },
  },
});

export const { incrementByAmount, decrementByAmount, resetValue } =
  kilocounterSlice.actions;

export default kilocounterSlice.reducer;
