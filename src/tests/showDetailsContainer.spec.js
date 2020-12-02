import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { mount } from "enzyme";
import ShowDetailsConatiner from "../Containers/DisplayShowDetailsContainer";
configure({ adapter: new Adapter() });
jest.mock("axios", () => {
  const exampleArticles = [{ title: "test article", url: "test url" }];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles)),
  };
});

describe("Showdetailscontainer tests", () => {
  let history = [];
  let wrapper = mount(<ShowDetailsConatiner history={history} />);
  wrapper.setState({
    shows: [
      { show: { image: { medium: "http://abc" }, rating: { average: 6.5 } } },
    ],
  });
  wrapper.setState({
    showData: {
      image: { medium: "dgsdh" },
      summary: "summary",
      network: { name: "name", country: { code: "US" } },
      schedule: { days: ["1"], time: "wyeuywe" },
      genres: ["drama"],
    },
  });

  wrapper.setState({
    episodeData: [
      {
        character: { image: { medium: "" } },
        image: { medium: "dgsdh" },
        summary: "summary",
        network: { name: "name", country: { code: "US" } },
        schedule: { days: ["1"], time: "wyeuywe" },
        genres: ["drama"],
      },
    ],
  });

  wrapper.setState({
    castData: [
      {
        character: { image: { medium: "" } },
      },
    ],
  });
  wrapper.setState({
    crewData: [
      {
        person: { image: { medium: "" } },
      },
    ],
  });
  wrapper.setState({
    galleryData: [
      {
        resolutions: { image: { medium: "" } },
      },
    ],
  });
  
  it("test for component render()", () => {
    expect(wrapper).toBeDefined();
  });
  
  it("test for  routeBack ()", () => {
    wrapper.setProps({ fetchShows: jest.fn() });
    const addMock = jest.spyOn(wrapper.instance(), "routeback");
    wrapper.instance().routeback();
    expect(addMock).toHaveBeenCalledWith();
  });
 
  it("test for  routeToDetails ()", () => {
    wrapper.setProps({ fetchShows: jest.fn() });
    const addMock = jest.spyOn(wrapper.instance(), "routeToDetails");
    wrapper.instance().routeToDetails();
    expect(addMock).toHaveBeenCalledWith();
  });
});
