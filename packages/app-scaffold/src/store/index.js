import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counter from './reducers/counterReducer';

const reducer = combineReducers({
    counter,
});

export default function createStore(preloadedState) {
    return configureStore({
        reducer,
        preloadedState,
        devTools: {
            name: 'app-scaffold',
        },
    });
}
