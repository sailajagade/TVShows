import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { mount } from "enzyme";
import NotFound from "../Components/NotFound";
configure({ adapter: new Adapter() });

describe("NotFound tests", () => {
    it("test for NotFound()", () => {
  let wrapper = mount(<NotFound/>);
    })

})