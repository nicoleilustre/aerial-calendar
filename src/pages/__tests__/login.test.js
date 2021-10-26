import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Login } from "../login";

test("render login form", () => {
  render(<Login />);

expect(screen.getByLabelText("username")).toBeInTheDocument();
expect(screen.getByLabelText("password")).toBeInTheDocument();
expect(screen.getByText("Log in")).toBeInTheDocument();

})

test("Username required error renders when field is touched and left empty", async () => {
  render(<Login />);
  const usernameInput = screen.getByLabelText("username");

  fireEvent.focus(usernameInput);
  await waitFor(() => fireEvent.blur(usernameInput));

  expect(screen.getByText("Username required")).toBeInTheDocument();

})

test("password required error renders when field is touched and left empty", async () => {
  render(<Login />);
  const passwordInput = screen.getByLabelText("password");

  fireEvent.focus(passwordInput);
  await waitFor(() => fireEvent.blur(passwordInput));

  expect(screen.getByText("Password required")).toBeInTheDocument();

})
