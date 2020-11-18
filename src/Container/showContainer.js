import React, { Component, Fragment } from "react";
import Shows from "../Components/displayShows";
import { FETCHALLSHOWS, SEARCHRESULTS, SHOWSELECT } from "../Api/url";
import SearchComponent from "../Components/SearchComponent";
import { getData } from "../Api/Api";
import DisplayShowDetailsContainer from "./displayShowDetailsContainer";
class showContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPosts: [],
      showsObj: {},
      showdetails: false,
      shows: [],
      showData: [],
      showTab: "",
      tabsData: [],
      searchFlag: false,
      GenreTypes: [],
      popularshows: [],
    };
  }

  componentDidMount = () => {
    this.fetchShows();
  };

  fetchShows = () => {
    getData(FETCHALLSHOWS)
      .then((res) => {
        this.setState(
          {
            shows: res.data,
            searchFlag: false,
            showdetails: false,
          },
          this.setGenreType
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  setGenreType = () => {
    let {shows,GenreTypes}=this.state
    shows &&
     shows.map((show) => {
        show.genres.map((genre) => {
          if (!GenreTypes.includes(genre))
          GenreTypes.push(genre);
          return "";
        });
        return "";
      });

    this.filterGenres();
  };
  filterGenres = () => {
    let newState = Object.assign({}, this.state);
    let {shows,GenreTypes}=this.state
 GenreTypes.map((genre) => {
      newState.showsObj[genre] = [];
      newState.popularshows = [];
      return "";
    });
   shows &&
      shows.map((show) => {
        show.genres &&
          show.genres.map((genre) => {
            if (GenreTypes.includes(genre)) {
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
    getData(SHOWSELECT + id)
      .then((res) => {
        this.setState({
          showdetails: true,
          showData: res.data,
          showTab: "Main",
        });
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
        this.setState({ searchFlag: true });
        getData(SEARCHRESULTS + value).then((res) => {
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
    const { shows, showData,showsObj, showdetails,searchPosts, showTab, searchFlag,popularshows} = this.state;
    return (
      <Fragment>
        <SearchComponent
          ongenreSelect={this.filterRatingAndgenre}
          onRatingSelect={this.filterRatingAndgenre}
          onShowSearch={this.onShowSearch}
        />
        {showdetails ? (
          <div>
            <DisplayShowDetailsContainer
              showData={showData}
              showTab={showTab}
              fetchShows={this.fetchShows}
            />
          </div>
        ) : (
          <Fragment>
            <div className="background" key="popular">
              {!searchFlag ? (
                <Shows
                  currentPosts={popularshows}
                  shows={shows}
                  genre="Popular"
                  onShowSelect={this.onShowSelect}
                  searchFlag={searchFlag}
                  fetchShows={this.fetchShows}
                />
              ) : (
                ""
              )}
            </div>
            <div className="background">
              {!searchFlag ? (
                Object.keys(showsObj).map((genre) => (
                  <Shows
                    key={genre}
                    currentPosts={
                      showsObj[genre].length > 0 &&
                      showsObj[genre]
                    }
                    shows={shows}
                    onShowSelect={this.onShowSelect}
                    searchFlag={searchFlag}
                    genre={genre}
                    fetchShows={this.fetchShows}
                  />
                ))
              ) : (
                <Shows
                  currentPosts={searchPosts}
                  shows={shows}
                  onShowSelect={this.onShowSelect}
                  searchFlag={searchFlag}
                  genre="Popular"
                  fetchShows={this.fetchShows}
                />
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default showContainer;
