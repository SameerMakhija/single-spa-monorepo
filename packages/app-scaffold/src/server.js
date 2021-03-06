import React from 'react';
import { renderToString } from 'react-dom/server';
import createStore from './store';
import App from './App';

export default function render(initialState, props) {
    // Configure the store with the initial state provided
    const store = createStore(initialState);

    // render the App store static markup ins content variable
    const content = renderToString(<App store={store} {...props} />);

    // Get a copy of store data to create the same store on client side
    const preloadedState = store.getState();

    return {
        assets: `<script>window.APP_SCAFFOLD_STATE = window.APP_SCAFFOLD_STATE || ${JSON.stringify(
            preloadedState,
        )};</script>`,
        content,
    };
}
