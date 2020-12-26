import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import MainNavigation from "./components/MainNavigation";

// Read the state sent with markup
const state = window.__SPA_NAV_STATE__;

// delete the state from global window object
delete window.__SPA_NAV_STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);

export default function Root(props) {
  return (
    <Provider store={store}>
      <section>{props.name} is mounted!</section>
      <MainNavigation />
    </Provider>
  );
}
