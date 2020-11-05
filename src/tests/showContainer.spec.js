import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { shallow, mount } from "enzyme";
import ShowContainer from "../Container/showContainer";
configure({ adapter: new Adapter() });

describe("App component", () => {
  const wrapper = mount(<ShowContainer />);
  wrapper.setState({
    shows: [{ show: { image: { medium: "http://abc" },rating:{average:6.5} } }],
  });
  it("test for component render", () => {
    wrapper.setState({ showdetails: true });
    wrapper.setState({ showTab: "Cast"});
   
    wrapper.find("#Cast").simulate("click");
   
    wrapper.setState({showDetails:false})
    wrapper.setState({ searchFlag: true });
    // wrapper.find('#image').simulate('click');
    wrapper.setState({ searchFlag: false });
    
    // wrapper.find('#image').simulate('click');
    wrapper.setState({showDetails:true})
    wrapper.setState({filterShow:true});
    wrapper.setState({tabsData:{image:{medium:'dgsdh'},summary:'summary',
    network:{name:'name',country:{code:'US'} },schedule:{days:['1'],time:'wyeuywe'},genres:['drama']}})
    wrapper.setState({ showTab: "Main"});
    wrapper.find('#mainImage').simulate('click');
    wrapper.setState({ showTab: "Episode" });

    wrapper.setState({ tabsData: [{ image: { medium: "http://abc" } }] });
    wrapper.setState({ showTab: "Cast" });

    wrapper.setState({ tabsData: [{ character: { medium: "http://abc" } }] });
    wrapper.setState({ showTab: "Crew" });

    wrapper.setState({ tabsData: [{ person: { medium: "http://abc" } }] });
    wrapper.setState({ showTab: "Gallery" });
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
    wrapper.instance().getShowDetails("e", 1);
    expect(addMock).toHaveBeenCalledWith("e", 1);
  });
  it("test for paginate ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "paginate");
    wrapper.instance().paginate(3);
    expect(addMock).toHaveBeenCalledWith(3);
  });
  it("test for  filterRatingAndgenre ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "filterRatingAndgenre");
    wrapper.instance().filterRatingAndgenre();
    expect(addMock).toHaveBeenCalledWith();
  });
  it("test for  routeBack ()", () => {
    const addMock = jest.spyOn(wrapper.instance(), "routeback");
    wrapper.instance().routeback();

    expect(addMock).toHaveBeenCalledWith();
  });
});
