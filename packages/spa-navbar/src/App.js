import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";

const App = ({ store, ...rest }) => {
  return (
    <Provider store={store}>
      <Counter {...rest} />
    </Provider>
  );
};

export default App;
