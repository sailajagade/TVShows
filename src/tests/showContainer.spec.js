import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { shallow, mount } from "enzyme";
import ShowContainer from "../Container/showContainer";
configure({ adapter: new Adapter() });

describe("App component", () => {
  const wrapper = mount(<ShowContainer />);
  it("test for component render", () => {
    wrapper.setState({ showDetails: true });
    wrapper.find("#Cast").simulate("click");
    // wrapper.find('#img').simulate('click');
    wrapper.setState({
      shows: [{ show: { image: { medium: "http://abc" } } }],
    });
    wrapper.setState({ searchFlag: true });
    wrapper.setState({ searchFlag: false });
    wrapper.setState({ showEpisode: "Episode" });

    wrapper.setState({ tabsData: [{ image: { medium: "http://abc" } }] });
    wrapper.setState({ showEpisode: "Cast" });

    wrapper.setState({ tabsData: [{ character: { medium: "http://abc" } }] });
    wrapper.setState({ showEpisode: "Crew" });

    wrapper.setState({ tabsData: [{ person: { medium: "http://abc" } }] });
    wrapper.setState({ showEpisode: "Gallery" });
    wrapper.setState({
      tabsData: [{ resolutions: { medium: { url: "http://abc" } } }],
    });
    wrapper.find("#searchbox").prop("onKeyUp")({ key: "Enter" });

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
  it("test for onShowSelect ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "onShowSelect");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onShowSelect(e);
    expect(addMock).toHaveBeenCalledWith(e);
  });
  it("test for getShowDetails ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "getShowDetails");
    // const e =  "dfdf";
    wrapper.instance().getShowDetails("e", 1, "");
    expect(addMock).toHaveBeenCalledWith("e", 1, "");
  });
  it("test for paginate ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "paginate");
    wrapper.instance().paginate(3);
    expect(addMock).toHaveBeenCalledWith(3);
  });
  it("test for  filterRatingAndGerne ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "filterRatingAndGerne");
    wrapper.instance().filterRatingAndGerne();
    expect(addMock).toHaveBeenCalledWith();
  });
  it("test for  routeBack ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "routeback");
    wrapper.instance().routeback();

    expect(addMock).toHaveBeenCalledWith();
  });
});
