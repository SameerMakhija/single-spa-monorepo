import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import configureStore from "./store";

describe("App component", () => {
  it("should be in the document", () => {
    const store = configureStore({});
    const { getByText } = render(<App store={store} name="SPA_NAVBAR" />);
    expect(getByText(/SPA_NAVBAR/i)).toBeInTheDocument();
  });
});
