import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders Login page initially and not Home page", () => {
    render(<App />);

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByText("Home")).toBeNull();
  });

  test("changes view after login and triggers logout successfully", () => {
    render(<App />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(usernameInput, {
      target: { value: "name" },
    });

    fireEvent.change(passwordInput, {
      target: { value: "pass" },
    });

    fireEvent.submit(screen.getByTestId("form"));

    expect(screen.queryByText("Login")).toBeNull();
    expect(screen.getByText("Home")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Logout"));
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.queryByText("Home")).toBeNull();
  });

  test("does not allow login without username or password", () => {
    render(<App />);

    fireEvent.submit(screen.getByTestId("form"));

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.queryByText("Home")).toBeNull();
  });

  test("allows admin permissions when logging as admin", () => {
    render(<App />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(usernameInput, {
      target: { value: "admin" },
    });

    fireEvent.change(passwordInput, {
      target: { value: "pass" },
    });

    fireEvent.submit(screen.getByTestId("form"));

    expect(screen.queryByText("Login")).toBeNull();
    expect(screen.getByText("Admin")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Logout"));
  });

  test("does not allow admin permissions when not logging as admin", () => {
    render(<App />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(usernameInput, {
      target: { value: "adm" },
    });

    fireEvent.change(passwordInput, {
      target: { value: "pass" },
    });

    fireEvent.submit(screen.getByTestId("form"));

    expect(screen.queryByText("Login")).toBeNull();
    expect(screen.queryByText("Admin")).toBeNull();
    expect(screen.getByText("Home")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Logout"));
  });

  test("clicking on Subjects page will display table with content and clicking on Subject table header will sort columns alpabetically", () => {
    render(<App />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(usernameInput, {
      target: { value: "adm" },
    });

    fireEvent.change(passwordInput, {
      target: { value: "pass" },
    });

    fireEvent.submit(screen.getByTestId("form"));

    fireEvent.click(screen.getByText("Subjects"));

    expect(screen.getByText("Literature")).toBeInTheDocument();
    expect(screen.getByText("Enrolled students")).toBeInTheDocument();
    expect(screen.queryByText("Arts")).toBeNull();

    fireEvent.click(screen.getByText("Subject"));
    expect(screen.getByText("Arts")).toBeInTheDocument();

    // screen.debug();
  });
});
