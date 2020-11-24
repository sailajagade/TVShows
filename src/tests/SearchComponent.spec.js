import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

import { mount } from "enzyme";
import ShowContainer from "../Containers/ShowContainer";
import SearchComponent from "../Components/SearchComponent";
configure({ adapter: new Adapter() });

jest.mock("axios", () => {
  const exampleArticles = [{ title: "test article", url: "test url" }];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles)),
  };
});

const axios = require("axios");

describe("SearchComponent tests", () => {
  let history=[];
  let wrapper = shallow(<SearchComponent.WrappedComponent history={history}/>);
  
  it("test for component render", () => {
    wrapper.find("#searchbox").simulate("keyUp");
    expect(wrapper).toBeDefined();
  });
  it("test for onShowSelect()", () => {
    wrapper.setState({
      searchFlag: true,
    });

    jest.spyOn(wrapper.instance(), "onShowSelect");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onShowSelect(e);
    wrapper.instance().routeToShows();
    expect(wrapper).toBeDefined();
  });
  it("test for routeToShows()", () => {
       jest.spyOn(wrapper.instance(), "routeToShows");
    wrapper.instance().routeToShows();
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
  
})