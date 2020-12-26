import { createReducer } from "@reduxjs/toolkit";
import { updateAppName, resetAppName } from "../actions/settingsActions";
/** Constants */
const APP_NAME = "SPA NAVBAR";
/** Create Reducer */
export default createReducer(
  {
    name: APP_NAME,
  },
  (builder) => {
    builder
      .addCase(updateAppName, (state, action) => {
        state.name = `${APP_NAME} - ${action.payload}`;
      })
      .addCase(resetAppName, (state, action) => {
        state.name = APP_NAME;
      })
      .addDefaultCase((state, action) => {});
  }
);
