import { createAsyncThunk } from '@reduxjs/toolkit';
import PubSub from 'pubsub-js';
import { log } from '../actions/counterActions';

export const logCounter = createAsyncThunk(log, ({ counter, delay }) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.info(`Counter value from thunk: ${counter}`);
            PubSub.publish('app-scaffold/logCounter', counter);
            res(counter);
        }, delay);
    });
});
