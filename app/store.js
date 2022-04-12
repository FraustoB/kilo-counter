import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import plateReducer from "../features/plates/plateSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    plates: plateReducer,
  },
});
