import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

import { mount } from "enzyme";
import DisplayShows from "../Components/DisplayShows";
configure({ adapter: new Adapter() });

describe("Showdetailscontainer tests", () => {
    let  currentPosts=[{id:'1',rating:{average:7}}]
    let onShowSelect=jest.fn();
  let wrapper = mount(<DisplayShows currentPosts={currentPosts} onShowSelect={onShowSelect}/>);
   wrapper.setState({arrnumber:3})

  it("test for getShowDetails ()", () => {
    wrapper.instance().onArrowClick('arrow-next');
    wrapper.instance().Arrow('fa fa-chevron-circle-right fa-lg','arrow-next');
    wrapper.find('.display-image').simulate('click')
  });
})