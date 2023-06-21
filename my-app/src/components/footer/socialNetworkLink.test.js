import React from "react";
import { render, screen } from "@testing-library/react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";

describe("componente TwitterLink renderiza correctamente", () => {
  it("renders the Twitter logo and text", () => {
    const { getByAltText } = render(<TwitterLink />);
    const twitterLogo = getByAltText("Logo de la red social Twitter en color blanco a la derecha del pie de pagina de la web");
    const twitterText = screen.getByText('Twitter')
    
    expect(twitterText).toBeInTheDocument();
    expect(twitterLogo).toBeInTheDocument();
    expect(twitterLogo.src).toContain("twitter.svg");
  });
});

describe("componente FacebookLink renderiza correctamente", () => {
    it("renders the Facebook logo", () => {
      const { getByAltText } = render(<FacebookLink />);
      const fbLogo = getByAltText("Logo de la red social Facebook en color blanco a la derecha del pie de pagina de la web");
      const fbText = screen.getByText('Facebook')
    
      expect(fbText).toBeInTheDocument();
      expect(fbLogo).toBeInTheDocument();
      expect(fbLogo.src).toContain("facebook.svg");
    });
  });
