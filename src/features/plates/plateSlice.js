import { createSlice } from "@reduxjs/toolkit";

const initStoreValue = { plate: "", weight: 0 };
export const plateSlice = createSlice({
  name: "plateSlice",
  initialState: {
    value: [initStoreValue],
  },
  reducers: {
    addPlate: (state, action) => {
      state.value.push(action.payload);
    },
    removePlate: (state) => {
      if (state.value.length >= 0) {
        state.value.pop();
      } else {
      }
    },
    resetPlate: (state) => {
      state.value = [initStoreValue];
    },
  },
});

export const { addPlate, removePlate, resetPlate } = plateSlice.actions;

export default plateSlice.reducer;
