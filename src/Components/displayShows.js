import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { isMobileOnly } from "react-device-detect";
import noimgfound from "../images/noimg.png";
import { onShowSearchData } from "../Containers/CommonMethods";

import "../Css/Shows.css";
import "../App.css";
import NotFound from "./NotFound";

const MenuItem = ({ text, selected, onShowSelect }) => {
  return (
    <div
      className={`menu-item ${selected ? "active" : ""}`}
      onClick={() => onShowSelect(text.id)}
    >
      <div className="p-3">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-cover h-48">
            {text.image ? (
              <img
                className="img"
                src={text.image && text.image.medium}
                width="200px"
                height="200px"
                alt="no data"
              />
            ) : (
              <img
                className="img"
                src={noimgfound}
                width="200px"
                height="200px"
                alt="no data"
              />
            )}
          </div>
          <div className="p-4" style={{ fontSize: "larger" }}>
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
          selected={index}
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
    selected: "",
    arrowNumber: 1,
    searchPosts: [],
    shows: [],
    showData: [],
    showName: "",
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    wheel: true,
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
   this.mounted&& this.setState({
      searchFlag: false,
    });
    this.props.history.push({ pathname: "/" });
  };
  componentWillUnmount = () => {
    this.mounted = false;
  };
 
  render() {
    const { hideArrows, hideSingleArrow } = this.state;
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
            <div className="col-lg-10 col-8 col-md-10">
              <h3
                className="genre-style"
                style={{
                  marginLeft: "60px",
                  marginTop: "10px",
                  marginBottom: "0px",
                }}
              >
                {" "}
                <b> {genre} Shows </b>
              </h3>
            </div>
            <div className="col-lg-2 col-4 more col-md-2">
              <button
                className="btn btn-link"
                id="more"
                onClick={() => {
                  this.showAll(currentPosts);
                }}
              >
                More
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
          scrollBy={isMobileOnly ? 1 : 6}
        />
      </div>
    );
  }
}
export default displayShows;
