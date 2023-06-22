import { NavBar } from "./NavBar";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


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
  
    test("check Logo should be in the Navbar and has image and text", () => {
      const Logo = screen.getByAltText("Logo");
      expect(Logo).toBeInTheDocument();
  
      const logoText = screen.getByText("Soundwave");
      expect(logoText).toBeInTheDocument();
    });
  
    test("text should be in Navbar", () => {
      const discoverLink = screen.getByText("Discover");
      expect(discoverLink).toBeInTheDocument();
  
      const joinLink = screen.getByText("Join");
      expect(joinLink).toBeInTheDocument();
    });
  
    test("check events", () => {
      fireEvent.click(joinLink);
      expect(window.location.pathname).toBe("/Join");
  
      fireEvent.click(discoverLink);
      expect(window.location.pathname).toBe("/Discover");
    });
  });