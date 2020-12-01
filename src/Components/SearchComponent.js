import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { fetchShow } from "../Containers/CommonMethods";
import "../Css/Shows.css";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchPosts: [],
      showDetails: false,
      shows: [],
      showData: [],
      showTab: "",
      searchFlag: false,
    };
  }

  fetchShows = () => {
    let showsAll = fetchShow();
    showsAll
      .then((res) => {
        this.setState(
          {
            shows: res.data,
            searchFlag: false,
            showDetails: false,
          },
          this.setGenreType
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onShowSearch = async (event) => {
    const { value } = event.target;
    this.setState({ showDetails: false, searchValue: value });
    event.keyCode === 13 &&
      this.props.history.push({
        pathname: `/displayShows/${value}`,
        state: {
          searchFlag: true,
        },
      });
  };

  render() {
    return (
      <div className="nav">
        <div className="col-lg-3 col-md-3 mt-3 Tvshows">
          <b>
            <h1 className=" color">TV Shows</h1>
          </b>
        </div>
        <div className="col-lg-5 col-md-7 mt-2">
          <div className="search-box">
            <input
              id="searchbox"
              placeholder=""
              onKeyUp={(event) => this.onShowSearch(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchComponent);
