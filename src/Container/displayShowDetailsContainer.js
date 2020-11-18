import React, { Component } from "react";
import { SHOWSELECT } from "../Api/url";
import { getData } from "../Api/Api";
import DisplayShowDetails from "../Components/displayShowDetails";

class displayShowDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabsData: [],
      searchFlag: false,
      showTab: this.props.showTab,
    };
  }

  getShowDetails = async (e, id, tabName = "") => {
    const url = tabName ? SHOWSELECT + id + "/" + tabName : SHOWSELECT + id;
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
    const { fetchShows } = this.props;
    this.setState({
      showdetails: false,
      searchFlag: false,
    });
    fetchShows();
    if (document.getElementById("searchbox"))
      document.getElementById("searchbox").value = "";
  };

  render() {
    const { showData } = this.props;
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
