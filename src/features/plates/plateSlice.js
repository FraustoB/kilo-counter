import { createSlice } from "@reduxjs/toolkit";

export const plateSlice = createSlice({
  name: "plateSlice",
  initialState: {
    value: ["black"],
  },
  reducers: {
    addPlate: (state, action) => {
      console.log("added Plate");
      state.value.push(" " + action.payload);
    },
    removePlate: (state) => {
      if (state.value.length > 1) {
        state.value.pop();
      } else {
      }
    },
  },
});

export const { addPlate, removePlate } = plateSlice.actions;

export default plateSlice.reducer;
