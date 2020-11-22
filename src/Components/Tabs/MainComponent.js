import React from "react";
import "../../Css/Shows.css";
import "../../Css/Tabs.css";
import "../../Css/Media.css";

const MainComponent = (props) => {
  const { showData } = props;
  return (
    <div className="cards cards-margin">
      <div className="row">
        <div
          className="cards col-lg-2 col-md-5"
          id="maindiv"
          key={showData && showData.id}
        >
          <img
            alt="img"
            id="main-image"
            src={showData && showData.image && showData.image.medium}
          />
        </div>
        <div className="col-lg-4 col-md-6 font-Style">
          {showData &&
            showData.summary &&
            showData.summary.replace(/<[^>]+>/g, "")}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
