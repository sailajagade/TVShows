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

const axios = require("axios");

describe("ShowConatiner tests", () => {
  let wrapper = mount(<ShowContainer />);
  wrapper.setState({
    shows: [
      { show: { image: { medium: "http://abc" }, rating: { average: 6.5 } } },
    ],
    arrowNumber: 3,
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

 
  it("test for onShowSelect()", () => {
    wrapper.setState({
      searchFlag: true,
    });

    jest.spyOn(wrapper.instance(), "onShowSelect");
    const e = { keyCode: 13, target: { value: "dfdf" } };
    wrapper.instance().onShowSelect(e);
    expect(wrapper).toBeDefined();
  });

  it("test for fetchShows()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "fetchShows");
    wrapper.instance().fetchShows();
    expect(addMock).toHaveBeenCalledWith();
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
    wrapper1.setState({
      shows: [{ genres: ["Drama"], rating: { average: 8 } }],
    });
    const addMock = jest.spyOn(wrapper1.instance(), "setGenreType");
    wrapper1.instance().setGenreType();
    expect(addMock).toHaveBeenCalledWith();
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
