import React, { Component, Fragment } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { isMobileOnly } from "react-device-detect";
import "../Css/Shows.css";
import "../Css/Media.css";

const MenuItem = ({ text, onShowSelect }) => {
  return (
    <Fragment>
      {" "}
      <div className="image-margin">
        <img
          className="display-image"
          src={text.image && text.image.medium}
          alt={text.name}
          onClick={() => onShowSelect(text)}
        />

        {/* <div className="text-color mediaQ"> {text.name}</div> */}
        <div className="text-color">
          {" "}
          <span>Rating:</span>
          {text.rating.average ? text.rating.average : ""}
        </div>
      </div>
    </Fragment>
  );
};

export const Menu = (list, onShowSelect, searchFlag) =>
  list &&
  list.map((el) => {
    return (
      <MenuItem
        text={searchFlag ? el.show : el}
        key={searchFlag ? el.show.id : el.id}
        onShowSelect={onShowSelect}
      />
    );
  });

class displayShows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      arrowNumber: 1,
    };
    this.arrowLeft = "";
    this.arrowRight = "";
  }
  Arrow = ({ text, className }) => {
    return text ? (
      <div className={className}>
        <i
          className={text}
          onClick={() => {
            this.onArrowClick(className);
          }}
        ></i>
      </div>
    ) : (
      <div className="prev"> </div>
    );
  };
  onArrowClick = (text) => {
    let { arrowNumber } = this.state;
    let arrCopy = arrowNumber;
    let setarrowNumber =
      text === "arrow-next"
        ? isMobileOnly
          ? arrCopy + 1
          : arrCopy + 6
        : isMobileOnly
        ? arrCopy - 1
        : arrCopy - 6;
    this.setState({ arrowNumber: setarrowNumber });
    this.hideArrow();
  };
  hideArrow = () => {
    let { arrowNumber } = this.state;
    let { currentPosts } = this.props;
    this.arrowLeft = this.Arrow({
      text: arrowNumber !== 1 ? "fa fa-chevron-circle-left fa-lg" : "",
      className: "arrow-prev",
    });
    this.arrowRight = this.Arrow({
      text:
        currentPosts.length >= arrowNumber
          ? arrowNumber < currentPosts.length ||
            arrowNumber - currentPosts.length < 1
            ? "fa fa-chevron-circle-right fa-lg"
            : ""
          : arrowNumber < Math.ceil(currentPosts.length / 6) ||
            arrowNumber - Math.ceil(currentPosts.length / 6) < 1
          ? "fa fa-chevron-circle-right fa-lg"
          : "",
      className: "arrow-next",
    });
  };
  render() {
    this.hideArrow();
    const { selected } = this.state;
    const {
      searchFlag,
      currentPosts,
      onShowSelect,
      fetchShows,
      genre,
    } = this.props;
    const menu = Menu(currentPosts, onShowSelect, searchFlag);
    return (
      <div className="margin">
        <div className="mb-5 pt-3">
          {" "}
          {searchFlag ? (
            <button className="btn home-btn">
              <i className="fa fa-home" onClick={fetchShows}></i>
            </button>
          ) : (
            <h1
              className="margin bg-color padding-btm
 mb-5"
            >
              {" "}
              {genre} Shows
            </h1>
          )}
          <ScrollMenu
            data={menu}
            arrowLeft={this.arrowLeft}
            arrowRight={this.arrowRight}
            selected={selected}
            onSelect={this.onSelect}
            alignCenter={false}
            scrollBy={isMobileOnly ? 1 : 6}
          />
        </div>
      </div>
    );
  }
}
export default displayShows;
