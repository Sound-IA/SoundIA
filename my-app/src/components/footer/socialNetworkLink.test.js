import React from "react";
import { render } from "@testing-library/react";
import TwitterLink from "./twitterLink";
import FacebookLink from "./facebookLink";

describe("TwitterLink", () => {
  it("renders the Twitter logo", () => {
    const { getByAltText } = render(<TwitterLink />);
    const twitterLogo = getByAltText("Logo de la red social Twitter en color blanco a la derecha del pie de pagina de la web");

    expect(twitterLogo).toBeInTheDocument();
    expect(twitterLogo.src).toContain("twitter.svg");
  });
});

describe("FacebookLink", () => {
    it("renders the Facebook logo", () => {
      const { getByAltText } = render(<FacebookLink />);
      const fbLogo = getByAltText("Logo de la red social Facebook en color blanco a la derecha del pie de pagina de la web");
  
      expect(fbLogo).toBeInTheDocument();
      expect(fbLogo.src).toContain("facebook.svg");
    });
  });
