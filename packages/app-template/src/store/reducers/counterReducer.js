/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement, logCounter } from '../actions/counterActions';

const initialState = { value: 0, logValue: 'Value: 0' };

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
            state.logValue = 'Value: pending';
        })
        .addCase(logCounter.fulfilled, (state, action) => {
            state.logValue = `Value: ${action.payload}`;
        })
        .addDefaultCase(() => {});
});
