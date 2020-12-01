import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import SearchComponent from "../Components/SearchComponent";
configure({ adapter: new Adapter() });

jest.mock("axios", () => {
  const exampleArticles = [{ title: "test article", url: "test url" }];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles)),
  };
});

describe("SearchComponent tests", () => {
  let history = [];
  let wrapper = shallow(<SearchComponent.WrappedComponent history={history} />);

  it("test for component render", () => {
    wrapper.find("#searchbox").simulate("keyUp");
    expect(wrapper).toBeDefined();
  });

  it("test for fetchShows()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "fetchShows");
    wrapper.instance().fetchShows();
    expect(addMock).toHaveBeenCalledWith();
  });
  it("test for onShowSearch ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "onShowSearch");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onShowSearch(e);
    expect(addMock).toHaveBeenCalledWith(e);
  });
});
