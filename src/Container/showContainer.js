import React, { Component } from "react";
import Shows from "../Components/displayShows";
import Pagination from "../Components/Pagination";
import DisplayShowDetails from "../Components/displayShowDetails";
import { FETCHALLSHOWS, SEARCHRESULTS, SHOWSELECT } from "../Api/url";
import SearchComponent from "../Components/SearchComponent";
import { getData } from "../Api/Api";
import Sidenav from "../Components/sidenav";

class showContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      currentPage: 1,
      postsPerPage: 8,
      shows: [],
      showData: [],
      showEpisode: "",
      tabsData: [],
      filteredData: [],
      filterShow: false,
    };
    this.indexOfLastPost = "";
    this.indexOfFirstPost = "";
    this.currentPosts = [];
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
    this.setState({ showDetails: false });
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
          showDetails: true,
          showData: res.data,
          showEpisode: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getShowDetails = async (e, id, tabName = "") => {
    const url = tabName ? SHOWSELECT + id + "/" + tabName : SHOWSELECT + id;
    getData(url).then((res) => {
      this.setState({
        showEpisode: e,
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
    this.fetchShows();
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
        filteredData: filteredShows,
        currentPage: 1,
        showDetails: false,
        filterShow: true,
      });
  };

  Pagination = () => {
    const {
      shows,
      tabsData,
      currentPage,
      postsPerPage,
      filterShow,
      filteredData,
    } = this.state;
    this.indexOfLastPost = currentPage * postsPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - postsPerPage;
    this.currentPosts = !filterShow
      ? shows.slice(this.indexOfFirstPost, this.indexOfLastPost)
      : filteredData.slice(this.indexOfFirstPost, this.indexOfLastPost);
    this.tabData =
      Array.isArray(tabsData) &&
      tabsData.slice(this.indexOfFirstPost, this.indexOfLastPost);
  };
  routeback = () => {
    this.setState({ showDetails: false });
    this.fetchShows();
    if (document.getElementById("searchbox"))
      document.getElementById("searchbox").value = "";
  };

  render() {
    const {
      postsPerPage,
      shows,
      searchFlag,
      tabsData,
      showData,
      showDetails,
      showEpisode,
    } = this.state;

    this.Pagination();
    return (
      <div >
        <SearchComponent
          ongenreSelect={this.filterRatingAndgenre}
          onRatingSelect={this.filterRatingAndgenre}
          onShowSearch={this.onShowSearch}
        />
        {showDetails ? (
        
            <div>
              <DisplayShowDetails
                mealInfo={showData}
                onShowSearch={this.onShowSearch}
                onShowSelect={this.onShowSelect}
                showDetails={showDetails}
                searchFlag={searchFlag}
                getShowDetails={this.getShowDetails}
                showEpisode={showEpisode}
                tabsData={this.tabData}
                episodeLength={tabsData}
                paginate={this.paginate}
                postsPerPage={postsPerPage}
                routeback={this.routeback}
              />
            </div>
         
        ) : (
          <div class="row">
            <div class="col-lg-2">
              <Sidenav
                filterRatingAndgenre={this.filterRatingAndgenre}
                onShowSearch={this.onShowSearch}
              />
            </div>
            <div class="col-lg-10">
              <Shows
                shows={searchFlag ? shows : this.currentPosts}
                onShowSelect={this.onShowSelect}
                searchFlag={searchFlag}
              />
              <div class="container">
                {" "}
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={
                    this.state.filterShow
                      ? this.state.filteredData.length
                      : shows.length
                  }
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
