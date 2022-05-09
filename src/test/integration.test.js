import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen } from "./test-utils";
import App from "../App";
import { waitFor } from "@testing-library/react";

export const handlers = [
  rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
    console.log("chamou o dog online");
    return ctx.json(
      {
        message:
          "https://images.dog.ceo/breeds/hound-walker/n02089867_1787.jpg",
        status: "success",
      },
      ctx.delay()
    );
  }),
];

const server = setupServer(...handlers);
server.events.on("request:start", (req) => {
  console.log("new request:", req.method, req.url.href);
});
server.printHandlers();

describe("Dog Saga", () => {
  // enable API mocking before tests
  beforeAll(() =>
    server.listen({
      onUnhandledRequest: "warn",
    })
  );

  // reset any runtime request handlers we may add during the tests
  afterEach(() => server.resetHandlers());

  // disable API mocking after the tests are done
  afterAll(() => server.close());

  test("it renders the initial page", () => {
    render(<App />);

    // should show no dogs initially, and not be fetching one
    const titleElement = screen.getByText(/Welcome to the Dog Saga/i);
    expect(titleElement).toBeDefined();
    const paraElement = screen.getByText(/Replace the React icon with a dog/i);
    expect(paraElement).toBeDefined();

    expect(
      screen.getByRole("button", { name: /Request a dog/i })
    ).toBeDefined();

    expect(screen.getByAltText("React logo")).toBeDefined();
  });

  test("it fetches and receives a doggie after clicking the Get Dog button", async () => {
    render(<App />);

    // after clicking the Request a dog button, it should show that it is fetching a dog
    fireEvent.click(screen.getByRole("button", { name: /request a dog/i }));
    expect(
      screen.getByText(/Replace the React icon with a dog!/i)
    ).toBeDefined();
    expect(screen.getByRole("button", { name: /fetching/i })).toBeDefined();
    /*
    // TODO: fix the async/msw issue with the tests!
    // Wait until the API returns
    await waitFor(
      () => {
        expect(screen.getByText(/Keep clicking/i)).toBeDefined();
      },
      { timeout: 3000 }
    );
    expect(
      screen.queryByText(/Replace the React icon with a dog/i)
    ).not.toBeDefined();
    expect(screen.getByAltText("Doggie!")).toBeDefined();
     */
  });
});
