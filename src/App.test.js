import { render, screen } from "@testing-library/react";
import App from "./App";

describe("main page layout", () => {
  test("renders the title and main paragraph", () => {
    render(<App />);
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
