import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { mount } from "enzyme";
import DisplayShows from "../Components/DisplayShows";
configure({ adapter: new Adapter() });
jest.mock("axios", () => {
  const exampleArticles = [{ title: "test article", url: "test url" }];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles)),
  };
});

describe("DisplayShows tests", () => {
  let currentPosts = [{ id: "1", rating: { average: 7 } }];
  let location = {
    state: {
      currentPosts: [{ show: { id: "1", rating: { average: 7 } } }],
    },
  };
  let history = [];
  let wrapper = mount(
    <DisplayShows
      currentPosts={currentPosts}
      location={location}
      history={history}
      showAll={jest.fn()}
    />
  );
  
  it("test for component mount()", () => {
    expect(wrapper).toBeDefined();
  });
  it("test for showAll ()", () => {
    wrapper.instance().showAll();
    expect(wrapper).toBeDefined();
  });
  it("test for onShowSelect ()", () => {
    let e = "232";
    wrapper.instance().onShowSelect(e);
    expect(wrapper).toBeDefined();
  });
});
