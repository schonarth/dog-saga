import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

test("um mais um é dois", () => {
  expect(1 + 1).toBe(2);
});

describe("main page layout", () => {
  test("renders the title and main paragraph", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const titleElement = screen.getByText(/Welcome to the Dog Saga/i);
    expect(titleElement).toBeInTheDocument();
    const paraElement = screen.getByText(/Keep clicking/i);
    expect(paraElement).toBeInTheDocument();
  });

  test("renders the 'Request a Dog' button", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
