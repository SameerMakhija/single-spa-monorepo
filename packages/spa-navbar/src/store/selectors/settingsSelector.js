import { createSelector } from "reselect";

export const getSettingsCounter = createSelector(
  (state) => state.settings,
  (settings) => settings.counter
);
