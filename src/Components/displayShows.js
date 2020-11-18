import React, { Component, Fragment } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

import "../Css/Shows.css";

const MenuItem = ({ text, onShowSelect }) => {
  return (
    <Fragment>
      {" "}
      {text.image ? (
        <div className="imageMargin">
          <img
            className="displayImage"
            src={text.image && text.image.medium}
            alt={text.name}
            onClick={() => onShowSelect(text)}
          />

          {/* <div className="textcolor mediaQ"> {text.name}</div> */}
          <div className="textcolor mediaQ">
            {" "}
            <span>Rating:</span>
            {text.rating.average}
          </div>
        </div>
      ) : (
        ""
      )}
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
      arrnumber: 6,
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
    let { arrnumber } = this.state;
    let setArrNumber = text === "arrow-next" ? arrnumber + 6 : arrnumber - 6;

    this.setState({ arrnumber: setArrNumber });
    this.hideArrow();
  };
  hideArrow = () => {
    let { arrnumber } = this.state;
    let { currentPosts } = this.props;
    this.arrowLeft = this.Arrow({
      text: arrnumber !== 6 ? "fa fa-chevron-circle-left fa-lg" : "",
      className: "arrow-prev",
    });
    this.arrowRight = this.Arrow({
      text:
        arrnumber < currentPosts.length || arrnumber - currentPosts.length < 6
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
        <div className="mb-5 pt-5">
          {" "}
          {searchFlag ? (
            <button className="btn heading" onClick={fetchShows}>
              <h1>
                {" "}
                <i className="fa fa-home"></i>{" "}
              </h1>{" "}
            </button>
          ) : (
            <h1 className="margin bg-color paddingbtm"> {genre} Shows</h1>
          )}
          <ScrollMenu
            data={menu}
            arrowLeft={this.arrowLeft}
            arrowRight={this.arrowRight}
            selected={selected}
            onSelect={this.onSelect}
            alignCenter={false}
          />
        </div>
      </div>
    );
  }
}
export default displayShows;
