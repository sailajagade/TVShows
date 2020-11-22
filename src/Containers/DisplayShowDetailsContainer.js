import React, { Component } from "react";
import { SHOW_SELECT } from "../Api/Url";
import { getData } from "../Api/Api";
import DisplayShowDetails from "../Components/DisplayShowDetails";

class displayShowDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsData: [],
      searchFlag: false,
      showTab: this.props.location.state.showTab,
    };
  }

  getShowDetails = async (e, id, tabName = "") => {
    const url = tabName ? SHOW_SELECT + id + "/" + tabName : SHOW_SELECT + id;
    getData(url).then((res) => {
      this.setState({
        showTab: e,
        currentPage: 1,
        tabsData: res.data,
      });
    });
  };
  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  routeback = () => {
    // const { fetchShows } = this.props.location.state;
    this.setState({
      showdetails: false,
      searchFlag: false,
    });

    // fetchShows();
    this.props.history.push({ pathname: "/" });
  };

  render() {
    const { showData } = this.props.location.state;
    const { currentPage, postsPerPage, tabsData, showTab } = this.state;

    return (
      <div>
        <DisplayShowDetails
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          showData={showData}
          getShowDetails={this.getShowDetails}
          showTab={showTab}
          tabsData={tabsData}
          paginate={this.paginate}
          routeback={this.routeback}
        />
      </div>
    );
  }
}

export default displayShowDetailsContainer;
