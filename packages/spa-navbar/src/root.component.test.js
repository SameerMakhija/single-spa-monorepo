import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Root from "./root.component";
import configureStore from "./store";

describe("Root component", () => {
  it("should be in the document", () => {
    const store = configureStore({});
    const { getByText } = render(
      <Provider store={store}>
        <Root name="Testapp" />
      </Provider>
    );
    expect(getByText(/Testapp/i)).toBeInTheDocument();
  });
});
