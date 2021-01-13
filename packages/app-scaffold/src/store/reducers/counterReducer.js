/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from '../actions/counterActions';
import { logCounter } from '../thunks/counterThunks';

const initialState = { value: 0, logValue: 0 };

/** Create Reducer */
export default createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.value += action.payload;
        })
        .addCase(decrement, (state, action) => {
            state.value -= action.payload;
        })
        .addCase(logCounter.pending, (state) => {
            state.logValue = 'pending...';
        })
        .addCase(logCounter.fulfilled, (state, action) => {
            state.logValue = action.payload;
        })
        .addDefaultCase(() => {});
});
