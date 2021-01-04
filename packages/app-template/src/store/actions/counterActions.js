import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

/** Create Actions */
export const increment = createAction('app-template/increment');
export const decrement = createAction('app-template/decrement');
export const logCounter = createAsyncThunk(
    'app-template/log-counter',
    (counter, delay) => {
        return new Promise((res) => {
            setTimeout(() => {
                console.info(counter);
                res(counter);
            }, delay);
        });
    },
);
