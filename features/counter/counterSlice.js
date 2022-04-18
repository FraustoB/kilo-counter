import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 44.09,
    kiloValue: 20,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    resetValue: (state) => {
      state.value = 44.09;
    },

    incrementKiloByAmount: (state, action) => {
      state.kiloValue += action.payload;
    },
    decrementKiloByAmount: (state, action) => {
      state.kiloValue -= action.payload;
    },
    resetKiloValue: (state) => {
      state.kiloValue = 20;
    },
  },
});

export const {
  incrementByAmount,
  decrementByAmount,
  resetValue,
  incrementKiloByAmount,
  resetKiloValue,
  decrementKiloByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
