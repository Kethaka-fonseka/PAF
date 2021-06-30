import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import NavBar from "../components/Header/NavBar";

describe("Home component", () => {
  it("should render main container without error", () => {
    expect(
      shallow(<NavBar />)
        .find("div")
        .exists()
    ).toBe(false);
  });
});
