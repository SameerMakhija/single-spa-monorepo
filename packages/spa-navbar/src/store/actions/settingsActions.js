import { createAction } from "@reduxjs/toolkit";

/** Create Actions */
export const updateAppName = createAction("settings/updateAppName");
export const resetAppName = createAction("settings/resetAppName");
