import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

describe("navbar component", () => {
  let discoverLink;
  let joinLink;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    discoverLink = screen.getByText('Discover');
    joinLink = screen.getByText('Join');
  });

  test("renders logo", () => {
    const Logo = screen.getByAltText("Logo");
    expect(Logo).toBeInTheDocument();

    const logoText = screen.getByText("Soundwave");
    expect(logoText).toBeInTheDocument();
  });

  test("renders text", () => {
    const discoverLink = screen.getByText("Discover");
    expect(discoverLink).toBeInTheDocument();

    const joinLink = screen.getByText("Join");
    expect(joinLink).toBeInTheDocument();
  });

  test("renders events", () => {
    fireEvent.click(joinLink);
    expect(window.location.pathname).toBe("/Join");

    fireEvent.click(discoverLink);
    expect(window.location.pathname).toBe("/Discover");
  });
});
