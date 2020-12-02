import React, { Component, Fragment } from "react";
import Shows from "../Components/DisplayShows";
import { fetchShow } from "./CommonMethods";
import { withRouter } from "react-router-dom";
class showContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showsObj: {},
      shows: [],
      showData: [],
      searchFlag: false,
      genreTypes: [],
      popularshows: [],
    };
    this.mounted = true;
  }

  componentDidMount = () => {
    this.mounted && this.fetchShows();
  };
  fetchShows = () => {
    let allShows = fetchShow();
    allShows
      .then((res) => {
        this.setState(
          {
            shows: res.data,
            searchFlag: false,
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
  componentWillUnmount = () => {
    this.mounted = false;
  };
  render() {
    const { shows, showsObj, searchFlag, popularshows } = this.state;
    return (
      <Fragment>
        <div key="popular">
          <Shows
            currentPosts={popularshows}
            shows={shows}
            genre="Popular"
            searchFlag={false}
            fetchShows={this.fetchShows}
            history={this.props.history}
          />
        </div>
        {!searchFlag &&
          Object.keys(showsObj).map((genre) => (
            <Shows
              key={genre}
              currentPosts={showsObj[genre].length > 0 && showsObj[genre]}
              shows={shows}
              searchFlag={false}
              genre={genre}
              history={this.props.history}
              fetchShows={this.fetchShows}
            />
          ))}
      </Fragment>
    );
  }
}

export default withRouter(showContainer);
