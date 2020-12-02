import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { mount } from "enzyme";
import ShowAll from "../Components/ShowAll";
configure({ adapter: new Adapter() });
describe("ShowAll tests", () => {
  
  it("test for component showAll ()", () => {
    let currentPosts = [{ image: { medium: "1" }, rating: { average: 7 } }];
    let location = {
      state: {
        currentPosts: [{ image: { medium: "1" }, rating: { average: 7 } }],
      },
    };
    let history = [];
    let wrapper = mount(
      <ShowAll
        currentPosts={currentPosts}
        location={location}
        history={history}
        showAll={jest.fn()}
      />
    );
    expect(wrapper).toBeDefined();
  });
});
