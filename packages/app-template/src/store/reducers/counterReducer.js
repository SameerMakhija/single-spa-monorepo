/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from '../actions/counterActions';

const initialState = { value: 0 };

/** Create Reducer */
export default createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.value += action.payload;
        })
        .addCase(decrement, (state, action) => {
            state.value -= action.payload;
        })
        .addDefaultCase(() => {});
});
