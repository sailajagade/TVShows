import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { mount } from "enzyme";
import ShowContainer from "../Containers/ShowContainer";
configure({ adapter: new Adapter() });

jest.mock("axios", () => {
  const exampleArticles = [{ title: "test article", url: "test url" }];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles)),
  };
});

describe("ShowConatiner tests", () => {
  let wrapper = mount(<ShowContainer.WrappedComponent />);

  beforeEach(() => {
    wrapper.setState({
      shows: [
        {
          genres: ["Drama", "Action"],
          rating: { average: 8 },
          image: { medium: "http://abc" },
          show: { image: { medium: "http://abc" }, rating: { average: 6.5 } },
        },
      ],
    });
  });
  
  it("test for component mount()", () => {
    expect(wrapper).toBeDefined();
  });
  
  it("test for fetchShows()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "fetchShows");
    wrapper.instance().fetchShows();
    expect(addMock).toHaveBeenCalledWith();
  });
  
  it("test for filterGenres ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "filterGenres");
    wrapper.instance().filterGenres();
    expect(addMock).toHaveBeenCalledWith();
  });
  
  it("test for setGenre ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "setGenreType");
    wrapper.instance().setGenreType();
    expect(addMock).toHaveBeenCalledWith();
  });
});
