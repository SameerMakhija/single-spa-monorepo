import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import counter from './reducers/counterReducer';

const rootReducer = combineReducers({
    counter,
});

export default function configureStore(initialState) {
    const composeEnhancers = compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware)),
    );
}
