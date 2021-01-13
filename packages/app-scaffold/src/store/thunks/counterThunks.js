import { createAsyncThunk } from '@reduxjs/toolkit';
import { log } from '../actions/counterActions';

export const logCounter = createAsyncThunk(log, ({counter, delay}) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.info(`Counter value from thunk: ${counter}`);
            res(counter);
        }, delay);
    });
});
