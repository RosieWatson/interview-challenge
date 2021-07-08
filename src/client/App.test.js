import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(async () => {
    render(<App />);
  });

  it("renders a message", async () => {
    expect(await screen.getByText("6 items")).toBeInTheDocument();
  });
});
