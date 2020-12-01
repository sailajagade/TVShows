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

  it("test for DisplayShows ()", () => {
    let  currentPosts=[{id:'1',rating:{average:7}}]
    let location={
      state:
      {
        currentPosts:[{show:{id:'1',rating:{average:7}}}]
      }
    }
  let wrapper = mount(<DisplayShows currentPosts={currentPosts} 
  location={location}/>);
  expect(wrapper).toBeDefined();
  });
})