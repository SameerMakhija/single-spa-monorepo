import { createSelector } from 'reselect';

export const getCounter = createSelector(
    (state) => state.counter,
    (counter) => counter.value,
);

export const getLogValue = createSelector(
    (state) => state.counter,
    (counter) => counter.logValue,
);
