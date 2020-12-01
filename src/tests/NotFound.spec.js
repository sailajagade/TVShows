import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { mount } from "enzyme";
import NotFound from "../Components/NotFound";
configure({ adapter: new Adapter() });

describe("NotFound tests", () => {
  let wrapper = mount(<NotFound history={[]} />);
  it("test for component mount()", () => {
    expect(wrapper).toBeDefined();
  });
  it("test for routeToMain()", () => {
    wrapper.instance().routeToMain();
    expect(wrapper).toBeDefined();
  });
});
