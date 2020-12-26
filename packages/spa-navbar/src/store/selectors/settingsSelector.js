import { createSelector } from "reselect";

export const getSettingsAppName = createSelector(
  (state) => state.settings,
  (settings) => settings.name
);
