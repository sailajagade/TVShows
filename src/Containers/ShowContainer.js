import React, { Component, Fragment } from "react";
import Shows from "../Components/DisplayShows";
import { FETCHALL_SHOWS, SEARCH_RESULTS, SHOW_SELECT } from "../Api/Url";
import SearchComponent from "../Components/SearchComponent";
import { getData } from "../Api/Api";
import DisplayShowDetailsContainer from "./DisplayShowDetailsContainer";
class showContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPosts: [],
      showsObj: {},
      showDetails: false,
      shows: [],
      showData: [],
      showTab: "",
      tabsData: [],
      searchFlag: false,
      genreTypes: [],
      popularshows: [],
    };
  }

  componentDidMount = () => {
    this.fetchShows();
  };
  fetchShows = () => {
    if (document.getElementById("searchbox"))
      document.getElementById("searchbox").value = "";
    getData(FETCHALL_SHOWS)
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
  setGenreType = () => {
    let { shows, genreTypes } = this.state;
    shows &&
      shows.map((show) => {
        show.genres.map((genre) => {
          !genreTypes.includes(genre) && genreTypes.push(genre);
          return "";
        });
        return "";
      });

    this.filterGenres();
  };
  filterGenres = () => {
    let newState = Object.assign({}, this.state);
    let { shows, genreTypes } = this.state;
    genreTypes.map((genre) => {
      newState.showsObj[genre] = [];
      newState.popularshows = [];
      return "";
    });
    shows &&
      shows.map((show) => {
        show.genres &&
          show.genres.map((genre) => {
            if (genreTypes.includes(genre)) {
              newState.showsObj[genre].push(show);

              this.setState(newState);
            }
            return "";
          });
        if (show.rating.average > 7) newState.popularshows.push(show);
        return "";
      });
  };
  onShowSelect = async (event) => {
    const { id } = event;
    getData(SHOW_SELECT + id)
      .then((res) => {
        this.setState(
          {
            showDetails: true,
            showData: res.data,
            showTab: "Main",
          },
          this.routeToDetails
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  routeToDetails = () => {
    this.props.history.push({
      pathname: "/showdetails",
      state: {
        showData: this.state.showData,
        showTab: this.state.showTab,
        fetchShows: this.fetchShows,
      },
    });
  };
  onShowSearch = async (event) => {
    this.setState({ showDetails: false });
    const { value } = event.target;
    try {
      if (event.keyCode === 13) {
        this.setState({ searchFlag: true });
        getData(SEARCH_RESULTS + value).then((res) => {
          this.setState({
            shows: res.data,
            searchPosts: res.data,
          });
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const {
      shows,
      showData,
      showsObj,
      showDetails,
      searchPosts,
      showTab,
      searchFlag,
      popularshows,
    } = this.state;
    return (
      <Fragment>
        <SearchComponent onShowSearch={this.onShowSearch} />

        <Fragment>
          <div className="background" key="popular">
            <Shows
              currentPosts={!searchFlag ? popularshows : searchPosts}
              shows={shows}
              genre="Popular"
              onShowSelect={this.onShowSelect}
              searchFlag={searchFlag}
              fetchShows={this.fetchShows}
            />
          </div>
          <div className="background">
            {!searchFlag &&
              Object.keys(showsObj).map((genre) => (
                <Shows
                  key={genre}
                  currentPosts={showsObj[genre].length > 0 && showsObj[genre]}
                  shows={shows}
                  onShowSelect={this.onShowSelect}
                  searchFlag={searchFlag}
                  genre={genre}
                  fetchShows={this.fetchShows}
                />
              ))}
          </div>
        </Fragment>
      </Fragment>
    );
  }
}

export default showContainer;
