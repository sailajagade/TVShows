import React, { Component } from "react";
import Shows from "../components/displayShows";
import Pagination from "../components/Pagination";
import DisplayShowDetails from "../components/displayShowDetails";
import { FETCHALLSHOWS, SEARCHRESULTS, SHOWSELECT } from "../Api/url";
import SearchComponent from "../components/SearchComponent";
import { getData } from "../Api/Api";

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
    const url = tabName ? SHOWSELECT + id + '/'+tabName : SHOWSELECT + id;
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

  filterRatingAndGerne = () => {
    let filteredShows = [];
    let gernevalue = document.getElementById("inputbox2")&&document.getElementById("inputbox2").value;
    let ratingvalue = document.getElementById("inputbox3")&&document.getElementById("inputbox3").value;
    this.state.shows.map((post) =>
      ratingvalue && gernevalue
        ? Math.floor(post.rating.average) >= ratingvalue &&
          post.genres.includes(gernevalue)
          ? filteredShows.push(post)
          : ""
        : ratingvalue || gernevalue
        ? Math.floor(post.rating.average) >= ratingvalue ||
          post.genres.includes(gernevalue)
          ? filteredShows.push(post)
          : ""
        : ""
    );
    if (filteredShows.length > 0)
      this.setState({
        shows: filteredShows,
        currentPage: 1,
        showDetails: false,
      });
  };

  Pagination = () => {
    const { shows, tabsData,currentPage,postsPerPage } = this.state;
    this.indexOfLastPost =currentPage *postsPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - postsPerPage;
    this.currentPosts = shows.slice(
      this.indexOfFirstPost,
      this.indexOfLastPost
    );
    this.tabData =
      Array.isArray(tabsData) &&
      tabsData.slice(this.indexOfFirstPost, this.indexOfLastPost);
  };
  routeback = () => {
    this.setState({ showDetails: false });
    this.fetchShows();
  };

  render() {
    const { postsPerPage, shows, searchFlag ,tabsData,showData,showDetails,showEpisode} = this.state;

    this.Pagination();
    return (
      <div className="container mt-5">
        <SearchComponent
          onGerneSelect={this.filterRatingAndGerne}
          onRatingSelect={this.filterRatingAndGerne}
          onShowSearch={this.onShowSearch}
        />
        {showDetails ? (
          <div>
            <div class="row">
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
          </div>
        ) : (
          <div>
            <Shows
              shows={searchFlag ? shows : this.currentPosts}
              onShowSelect={this.onShowSelect}
              searchFlag={searchFlag}
            />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={shows.length}
              paginate={this.paginate}
            />
          </div>
        )}
      </div>
    );
  }
}

export default showContainer;
