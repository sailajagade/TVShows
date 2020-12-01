import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import noimgfound from "../../images/noimg.png";

import "../../Css/Shows.css";

import "../../App.css";
import { isMobileOnly } from "react-device-detect";

const MenuItem = ({ text }) => {
  return (
    <div className="container">
      <div className="card-group">
        <div className="card cast">
          {text.character.image ? (
            <img
              className="card-img-top"
              width="200px"
              height="160px"
              src={text.character.image.medium}
              alt="Card  cap"
            />
          ) : (
            <img
              className="card-img-top"
              width="200px"
              height="160px"
              src={noimgfound}
              alt={text.name}
            />
          )}

          <div className="card-block">
            <div className="fontStyle ">{text.person && text.person.name}</div>
            <div>as</div>
            <div className="fontStyle ">
              {text.character && text.character.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Menu = (list) =>
  list.map((el, index) => {
    return (
      <div key={index}>
        <MenuItem text={el} key={index} />
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
const CastComponent = (props) => {
  const { tabsData } = props;
  let state = {
    selected: "",
    alignCenter: true,
    hideArrows: true,
    hideSingleArrow: true,
  };
  let menuItems = tabsData && Menu(tabsData.slice(0, tabsData.length));
  const menu = menuItems;
  return (
    <ScrollMenu
      scrollBy={isMobileOnly ? 1 : 6}
      alignCenter={false}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      data={menu}
      hideArrows={state.hideArrows}
      hideSingleArrow={state.hideSingleArrow}
    />
  );
};
export default CastComponent;
