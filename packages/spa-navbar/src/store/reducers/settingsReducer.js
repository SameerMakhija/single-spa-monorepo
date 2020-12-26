import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "../actions/settingsActions";

/** Create Reducer */
export default createReducer(
  {
    counter: 0,
  },
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.counter += action.payload;
      })
      .addCase(decrement, (state, action) => {
        state.counter -= action.payload;
      })
      .addDefaultCase((state, action) => {});
  }
);
