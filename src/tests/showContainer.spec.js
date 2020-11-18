import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import {  mount } from "enzyme";
import ShowContainer from "../Container/showContainer";
configure({ adapter: new Adapter() });


jest.mock("axios", () => {
  const exampleArticles = [{ title: "test article", url: "test url" }];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles)),
  };
});

const axios = require("axios");

describe("App component", () => {
  let wrapper = mount(<ShowContainer />);
  wrapper.setState({
    shows: [
      { show: { image: { medium: "http://abc" }, rating: { average: 6.5 } } },
    ],
  });

  wrapper.setState({
    tabsData: [
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
  it("test for component render", () => {
    wrapper.setState({ showdetails: true });
    wrapper.setState({ searchFlag: false });
    wrapper.setState({ showDetails: true });
    wrapper.setState({ filterShow: true });
    wrapper.setState({
      showData: {
        image: { medium: "dgsdh" },
        summary: "summary",
        network: { name: "name", country: { code: "US" } },
        schedule: { days: ["1"], time: "wyeuywe" },
        genres: ["drama"],
      },
    });
    wrapper.setState({ showTab: "Main" });
    wrapper.setState({ showTab: "Cast" });
    wrapper.setState({currentPage:1,postsPerPage:5})
    wrapper.setState({
      tabsData: 
        {
          image: { medium: "dgsdh" },
          summary: "summary",
          network: { name: "name", country: { code: "US" } },
          schedule: { days: ["1"], time: "wyeuywe" },
          genres: ["drama"],
        },
      
    });
    wrapper.setState({ showTab: "Crew" });
 wrapper.setState({currentPage:1,postsPerPage:5})
    wrapper.setState({
      tabsData: 
        {
          image: { medium: "dgsdh" },
          summary: "summary",
          network: { name: "name", country: { code: "US" } },
          schedule: { days: ["1"], time: "wyeuywe" },
          genres: ["drama"],
        },
      
    });
    wrapper.setState({ showTab: "Gallery" });
    wrapper.find("#searchbox").prop("onKeyUp")({ key: "Enter" });
    wrapper.setState({ searchFlag: false });
    expect(wrapper).toBeDefined();
  });

  it("test for component render", () => {
    let wrapper2 = mount(<ShowContainer />);
    wrapper2.setState({
      searchFlag: true,
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
    wrapper2.update();
   jest.spyOn(wrapper2.instance(), "onShowSelect");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper2.instance().onShowSelect(e);
    expect(wrapper2).toBeDefined();
  });
it("test for component episode", () => {
    let wrapper4 = mount(<ShowContainer />);
    wrapper4.setState({ showdetails: true });
    wrapper4.setState({ showDetails: true });
    wrapper4.setState({ filterShow: true });
    wrapper4.setState({
      tabsData: [
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
    wrapper4.setState({ showTab: "Episode" });
    wrapper4.update();
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
    wrapper.setState({
      showData: {
        image: { medium: "dgsdh" },
        summary: "summary",
        network: { name: "name", country: { code: "US" } },
        schedule: { days: ["1"], time: "wyeuywe" },
        genres: ["drama"],
      },
    });
    const addMock = jest.spyOn(wrapper.instance(), "onShowSelect");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onShowSelect(e);
    expect(addMock).toHaveBeenCalledWith(e);
  });
  
 
  it("test for filterGenres ()", () => {
    let wrapper1 = mount(<ShowContainer />);
    wrapper1.setState({
      shows: [
        {
          genres: ["Drama", "Action"],
          rating: { average: 8 },
          image: { medium: "http://abc" },
          show: { image: { medium: "http://abc" }, rating: { average: 6.5 } },
        },
      ],
    });
    wrapper1.update();
    const addMock = jest.spyOn(wrapper1.instance(), "filterGenres");
    wrapper1.instance().filterGenres();
    expect(addMock).toHaveBeenCalledWith();
  });
  it("test for setGenre ()", () => {
    let wrapper1 = mount(<ShowContainer />);
    wrapper1.setState({shows:[{genres:["Drama"],rating:{average:8}}]})
        const addMock = jest.spyOn(wrapper1.instance(), "setGenreType");
    wrapper1.instance().setGenreType();
    expect(addMock).toHaveBeenCalledWith();
  });

  it("test for component render", () => {
    wrapper.setState({ showdetails: false });
    wrapper.setState({popularshows:[{show:{id:'1',rating:{average:8}}}]});
    // wrapper.find('#showImage').simulate('click')
   expect(wrapper).toBeDefined();
  });



});

it("fetch articles on #componentDidMount", () => {
  const app = mount(<ShowContainer />);
  app.setState({
    showData: {
      image: { medium: "dgsdh" },
      summary: "summary",
      network: { name: "name", country: { code: "US" } },
      schedule: { days: ["1"], time: "wyeuywe" },
      genres: ["drama"],
    },
  });
  app
    .instance()
    .onShowSelect()
    .then(() => {
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith("articles_url");
      expect(app.state()).toHaveProperty("articles", [
        { title: "test article", url: "test url" },
      ]);
    });
});
