import React, { Component, Fragment } from "react";
import Shows from "../Components/DisplayShows";
import {fetchShow,onSelect} from "./CommonMethods";
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
    let allShows=fetchShow()
    allShows.then((res) => {
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
   let selectedData=onSelect(event);
   selectedData.then((res) => {
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
        showTab: "Main",
        fetchShows: this.fetchShows,
      },
    });
  };
   render() {
    const {
      shows,
      showsObj,
      searchPosts,
      searchFlag,
      popularshows,
    } = this.state;
    return (
      <Fragment>
        <Fragment>
          <div className="background" key="popular">
            <Shows
              currentPosts={!searchFlag ? popularshows : searchPosts}
              shows={shows}
              genre="Popular"
              onShowSelect={this.onShowSelect}
              searchFlag={false}
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
                  searchFlag={false}
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
