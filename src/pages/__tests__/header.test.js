import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";

const username = "test";

test("accepts username props", () => {
  render(<Header username={username} />);

  const header = screen.getByRole("heading");
  expect(header).toContainHTML("Welcome, test");
});
