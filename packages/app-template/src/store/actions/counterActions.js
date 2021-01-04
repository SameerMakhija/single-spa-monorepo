import { createAction } from '@reduxjs/toolkit';

/** Create Actions */
export const increment = createAction('app-template/counter-increment');
export const decrement = createAction('app-template/counter-decrement');
export const log = createAction('app-template/counter-log');
