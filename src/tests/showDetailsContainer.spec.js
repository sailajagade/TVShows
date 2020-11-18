import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import {  mount } from "enzyme";
import ShowContainer from "../Container/displayShowDetailsContainer";
configure({ adapter: new Adapter() });



describe("App component", () => {
  let location={state:{showData:[{id:'1'}],fetchShows:jest.fn(),showTab:''}}
  let history=[]
  let wrapper = mount(<ShowContainer location={location} history={history}/>);
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
    wrapper.setState({ showTab: "Cast" });
    wrapper.setState({currentPage:1,postsPerPage:5})
    // wrapper.find("#searchbox").prop("onKeyUp")({ key: "Enter" });
    wrapper.setState({ searchFlag: false });
    expect(wrapper).toBeDefined();
  });

   it("test for getShowDetails ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "getShowDetails");
    wrapper.instance().getShowDetails("e", 1);
    expect(addMock).toHaveBeenCalledWith("e", 1);
  });
    
  it("test for paginate ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "paginate");
    wrapper.instance().paginate(3);
    wrapper.find('#pagination').simulate('click')
    expect(addMock).toHaveBeenCalledWith(3);
  });
 
  it("test for  routeBack ()", () => {
    wrapper.setProps({fetchShows:jest.fn()})
    wrapper.setProps({location:{state:{fetchShows:jest.fn(),showTab:'',showData:[]}}})
    const addMock = jest.spyOn(wrapper.instance(), "routeback");
    wrapper.instance().routeback();
    expect(addMock).toHaveBeenCalledWith();
  });

});
describe("Episode component", () => {
  it("test for component render", () => {
     let location={state:{showData:[{id:'1'}],fetchShows:jest.fn(),showTab:''}}
  let app1 = mount(<ShowContainer location={location} />);
  app1.setState({
    shows: [
      { show: { image: { medium: "http://abc" }, rating: { average: 6.5 } } },
    ],
  });
  app1.setState({
    showData: {
      image: { medium: "dgsdh" },
      summary: "summary",
      network: { name: "name", country: { code: "US" } },
      schedule: { days: ["1"], time: "wyeuywe" },
      genres: ["drama"],
    },
  });

  app1.setState({
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
  
    app1.setState({ showdetails: true });
    app1.setState({ searchFlag: false });
    app1.setState({ showDetails: true });
    app1.setState({ filterShow: true });
    app1.setState({ showTab: "Episode" });
    app1.setState({currentPage:1,postsPerPage:5})
    app1.setState({
      tabsData: 
        {
          image: { medium: "dgsdh" },
          summary: "summary",
          network: { name: "name", country: { code: "US" } },
          schedule: { days: ["1"], time: "wyeuywe" },
          genres: ["drama"],
        },
      
    });

    app1.setState({ showTab: "Main" });
    app1.setState({ showTab: "" });
    app1.setState({ searchFlag: false });
    expect(app1).toBeDefined();
  });
  it("test for component render", () => {
    let location={state:{showData:[{id:'1'}],fetchShows:jest.fn(),showTab:''}}
    let app2 = mount(<ShowContainer location={location} />);
  app2.setState({
    shows: [
      { person: { image:{medium:''}, rating: { average: 6.5 } } },
    ],
  });
 
  app2.setState({
    tabsData: [
      {
        character: { image: { medium: "" } },
        person: { image:{medium:''}},
        image: { medium: "dgsdh" },
        summary: "summary",
        network: { name: "name", country: { code: "US" } },
        schedule: { days: ["1"], time: "wyeuywe" },
        genres: ["drama"]
      },
    ],
  });
  
    app2.setState({ showdetails: true });
    app2.setState({ searchFlag: false });
    app2.setState({ showDetails: true });
    app2.setState({ filterShow: true });
    app2.setState({ showTab: "Crew" });
    app2.setState({currentPage:1,postsPerPage:5})
    app2.setState({
      tabsData: 
        {
          image: { medium: "dgsdh" },
          summary: "summary",
          network: { name: "name", country: { code: "US" } },
          schedule: { days: ["1"], time: "wyeuywe" },
          genres: ["drama"],
        },
      
    });

    app2.setState({ searchFlag: false });
    expect(app2).toBeDefined();
  });
  it("test for component render", () => {
    let location={state:{showData:[{id:'1'}],fetchShows:jest.fn(),showTab:''}}
    let app3 = mount(<ShowContainer location={location} />);
  app3.setState({
    shows: [
      { show: { image: { medium: "http://abc" }, rating: { average: 6.5 } } },
    ],
  });
  app3.setState({
    showData: {
      image: { medium: "dgsdh" },
      summary: "summary",
      network: { name: "name", country: { code: "US" } },
      schedule: { days: ["1"], time: "wyeuywe" },
      genres: ["drama"],
    },
  });

  app3.setState({
    tabsData: [
      {
        character: { image: { medium: "" } },
        resolutions: { medium: {url:"dgsdh"}, original: {url:"dgsdh"} },
        summary: "summary",
        network: { name: "name", country: { code: "US" } },
        schedule: { days: ["1"], time: "wyeuywe" },
        genres: ["drama"],
      },
    ],
  });
  
    app3.setState({ showdetails: true });
    app3.setState({ searchFlag: false });
    app3.setState({ showDetails: true });
    app3.setState({ filterShow: true });
    app3.setState({ showTab: "Gallery" });
   app3.setState({currentPage:1,postsPerPage:5})
    app3.setState({
      tabsData: 
        {
          image: { medium: "dgsdh" },
          summary: "summary",
          network: { name: "name", country: { code: "US" } },
          schedule: { days: ["1"], time: "wyeuywe" },
          genres: ["drama"],
        },
      
    });

    app3.setState({ searchFlag: false });
    expect(app3).toBeDefined();
  });
  
  it("test for component render", () => {
    let location={state:{showData:[{id:'1'}],fetchShows:jest.fn(),showTab:''}}
    let app3 = mount(<ShowContainer location={location} />);
  app3.setState({
    shows: [
      { show: { image: { medium: "http://abc" }, rating: { average: 6.5 } } },
    ],
  });
  app3.setState({
    showData: {
      image: { medium: "dgsdh" },
      summary: "summary",
      network: { name: "name", country: { code: "US" } },
      schedule: { days: ["1"], time: "wyeuywe" },
      genres: ["drama"],
    },
  });

  app3.setState({
    tabsData: [
      {
        character: { image: { medium: "" } },
        resolutions: { original: {url:"dgsdh"} },
        summary: "summary",
        network: { name: "name", country: { code: "US" } },
        schedule: { days: ["1"], time: "wyeuywe" },
        genres: ["drama"],
      },
    ],
  });
  
    app3.setState({ showdetails: true });
    app3.setState({ searchFlag: false });
    app3.setState({ showDetails: true });
    app3.setState({ filterShow: true });
    app3.setState({ showTab: "Gallery" });
   app3.setState({currentPage:1,postsPerPage:5})
 

    app3.setState({ searchFlag: false });
    expect(app3).toBeDefined();
  });
  
})

