import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import configureStore from "./store";

// Read the state sent with markup
const state = window.__SPA_NAV_STATE__;

// delete the state from global window object
delete window.__SPA_NAV_STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);

// App Component
const App = (props) => {
  return (
    <Provider store={store}>
      <Root {...props} />
    </Provider>
  );
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;