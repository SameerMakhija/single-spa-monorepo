import { createAction } from '@reduxjs/toolkit';

/** Create Actions */
export const increment = createAction('app-scaffold/counter-increment');
export const decrement = createAction('app-scaffold/counter-decrement');
export const log = createAction('app-scaffold/counter-log');
