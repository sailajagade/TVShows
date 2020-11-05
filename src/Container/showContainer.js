import React, { Component } from "react";
import Shows from "../Components/displayShows";
import Pagination from "../Components/Pagination";
import Displayshowdetails from "../Components/displayShowDetails";
import { FETCHALLSHOWS, SEARCHRESULTS, SHOWSELECT } from "../Api/url";
import SearchComponent from "../Components/SearchComponent";
import { getData } from "../Api/Api";
import Sidenav from "../Components/sidenav";

class showContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showdetails: false,
      currentPage: 1,
      postsPerPage: 8,
      shows: [],
      showData: [],
      showTab: "",
      tabsData: [],
    };
  }

  componentDidMount = async () => {
    this.fetchShows();
  };

  fetchShows = () => {
    getData(FETCHALLSHOWS)
      .then((res) => {
        this.setState({ shows: res.data, searchFlag: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onShowSearch = async (event) => {
    this.setState({ showdetails: false });
    const { value } = event.target;
    try {
      if (event.keyCode === 13) {
        getData(SEARCHRESULTS + value).then((res) => {
          this.setState({ shows: res.data, searchFlag: true });
        });
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  onShowSelect = async (event) => {
    const { id } = event;
    getData(SHOWSELECT + id)
      .then((res) => {
        this.setState({
          showdetails: true,
          showData: res.data,
          showTab: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.showData);
  };

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

  filterRatingAndgenre = () => {
    let filteredShows = [];
    let genrevalue =
      document.getElementById("genre") &&
      document.getElementById("genre").value;
    let ratingvalue =
      document.getElementById("rating") &&
      document.getElementById("rating").value;

    this.state.shows.map((post) =>
      ratingvalue && genrevalue
        ? Math.floor(post && post.rating && post.rating.average) >=
            ratingvalue && post.genres.includes(genrevalue)
          ? filteredShows.push(post)
          : ""
        : ratingvalue || genrevalue
        ? Math.floor(post && post.rating && post.rating.average) >=
            ratingvalue || post.genres.includes(genrevalue)
          ? filteredShows.push(post)
          : ""
        : ""
    );
    if (filteredShows.length > 0)
      this.setState({
        shows: filteredShows,
        currentPage: 1,
        showdetails: false,
      });
  };

  routeback = () => {
    this.setState({ showdetails: false, currentPage: 1 });
    this.fetchShows();
    if (document.getElementById("searchbox"))
      document.getElementById("searchbox").value = "";
  };

  render() {
    const {
      postsPerPage,
      shows,
      showData,
      tabsData,
      showdetails,
      showTab,
      searchFlag,
      currentPage,
    } = this.state;
    return (
      <div>
        <SearchComponent
          ongenreSelect={this.filterRatingAndgenre}
          onRatingSelect={this.filterRatingAndgenre}
          onShowSearch={this.onShowSearch}
        />
        {showdetails ? (
          <div>
            <Displayshowdetails
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
        ) : (
          <div class="row">
            <div class="col-lg-2">
              <Sidenav filterRatingAndgenre={this.filterRatingAndgenre} />
            </div>
            <div class="col-lg-10">
              <Shows
                currentPage={this.state.currentPage}
                postsPerPage={this.state.postsPerPage}
                shows={shows}
                onShowSelect={this.onShowSelect}
                searchFlag={searchFlag}
              />
              <div class="container">
                {" "}
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={shows.length}
                  paginate={this.paginate}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default showContainer;
