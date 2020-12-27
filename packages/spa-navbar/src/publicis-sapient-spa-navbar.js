import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";
import configureStore from "./store";

// Read the state sent with markup
const state = window.__SPA_NAVBAR_STATE__;

// delete the state from global window object
delete window.__SPA_NAVBAR_STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);

// Root Component
const Root = (props) => {
  return <App store={store} {...props} />;
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  renderType: "hydrate",
});

export const { bootstrap, mount, unmount } = lifecycles;
