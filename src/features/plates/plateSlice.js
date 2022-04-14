import { createSlice } from "@reduxjs/toolkit";

export const plateSlice = createSlice({
  name: "plateSlice",
  initialState: {
    value: [""],
  },
  reducers: {
    addPlate: (state, action) => {
      state.value.push(" " + action.payload);
    },
    removePlate: (state) => {
      if (state.value.length >= 0) {
        state.value.pop();
      } else {
      }
    },
    resetPlate: (state) => {
      state.value = [];
    },
  },
});

export const { addPlate, removePlate, resetPlate } = plateSlice.actions;

export default plateSlice.reducer;
