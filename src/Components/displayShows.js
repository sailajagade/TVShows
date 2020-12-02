import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { isMobileOnly } from "react-device-detect";
import noimgfound from "../images/noimg.png";
import { onShowSearchData } from "../Containers/CommonMethods";
import NotFound from "./NotFound";

import "../Css/Shows.css";
import "../App.css";


const MenuItem = ({ text, onShowSelect }) => {
  return (
    <div
      className={`menu-item`}
      onClick={() => onShowSelect(text.id)}>
      <div className="p-3">
        <div className="bg-white rounded-lg shadow-lg ">
          <div className="bg-cover">
            {text.image ? (
              <img
                className="img"
                src={text.image && text.image.medium}
                width="200px"
                height="200px"
                alt="No Data"
              />
            ) : (
              <img
                className="img"
                src={noimgfound}
                width="200px"
                height="200px"
                alt="No Data"
              />
            )}
          </div>
          <div className="p-4">
            Rating: {text.rating && text.rating.average}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Menu = (list, onShowSelect, searchFlag) =>
  list &&
  list.map((el, index) => {
    return (
      <div key={index}>
        {" "}
        <MenuItem
          text={searchFlag ? el.show : el}
          key={index}
          onShowSelect={onShowSelect}
        />
      </div>
    );
  });

const Arrow = ({ text, className }) => {
  return (
    <div className={className}>
      {" "}
      <i className={text}></i>
    </div>
  );
};

export const ArrowLeft = Arrow({
  text: "fa fa-chevron-circle-left fa-lg",
  className: "arrow-prev",
});
export const ArrowRight = Arrow({
  text: "fa fa-chevron-circle-right fa-lg",
  className: "arrow-next",
});
class displayShows extends Component {
  constructor(props) {
    super(props);
    this.menu = null;
    this.mounted = true;
  }
  state = {
    mounted: true,
    searchPosts: [],
    shows: [],
    showData: [],
    showName: "",
    alignCenter: true,
    hideArrows: true,
    hideSingleArrow: true,
    clickWhenDrag: true,
  };

  componentDidMount = () => {
    this.getShows();
  };
  componentDidUpdate = () => {
    this.getShows();
  };
  getShows = () => {
    const Url = window.location.hash.split("/");
    let searchData = onShowSearchData(Url[Url.length - 1]);
    searchData.then((res) => {
      this.mounted &&
        this.setState({
          shows: res.data,
          searchPosts: res.data,
        });
    });
  };

  showAll = (currentPosts = {}) => {
    this.props.history.push({
      pathname: `/showAll`,
      state: {
        currentPosts: currentPosts,
        onShowSelect: this.onShowSelect,
        routeback: this.routeback,
      },
    });
  };
  onShowSelect = async (event) => {
    this.props.history.push({
      pathname: `/showdetails/${event}`,
    });
  };
  routeback = () => {
    this.mounted &&
      this.setState({
        searchFlag: false,
      });
    this.props.history.push({ pathname: "/" });
  };
  componentWillUnmount = () => {
    this.mounted = false;
  };

  render() {
    const { hideArrows, hideSingleArrow, clickWhenDrag } = this.state;
    const { searchFlag = true, currentPosts, genre } = this.props.location
      ? this.props.location.state !== undefined
        ? this.props.location.state
        : ""
      : this.props;
    !searchFlag
      ? (this.menuItems = Menu(
          currentPosts && currentPosts.slice(0, currentPosts.length),
          this.onShowSelect,
          searchFlag
        ))
      : (this.menuItems = Menu(
          this.state.shows.slice(0, this.state.shows.length),
          this.onShowSelect,
          true
        ));
    const menu = this.menuItems;
    return (
      <div>
        {" "}
        {searchFlag ? (
          <nav className="navbar navbar-inverse navbar-expand-md nav">
            <li className="nav-link home-btn" onClick={this.routeback}>
              <i className="fa fa-home"></i>
            </li>
          </nav>
        ) : (
          <div className="row">
            <div className="col-lg-11 col-8 col-md-10">
              <h3 className="genre-style">
                {" "}
                <b> {genre} Shows </b>
              </h3>
            </div>
            <div className="col-lg-1 col-4 more col-md-2">
              <button
                className="btn btn-link"
                id="more"
                onClick={() => {
                  this.showAll(currentPosts);
                }}
              >
                See All
              </button>
            </div>
          </div>
        )}
        {searchFlag && this.state.shows.length === 0 && (
          <div>
            <NotFound searchFlag={true} />
          </div>
        )}
        <ScrollMenu
          alignCenter={false}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          data={menu}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          clickWhenDrag={clickWhenDrag}
          scrollBy={isMobileOnly ? 1 : 6}
        />
      </div>
    );
  }
}
export default displayShows;
