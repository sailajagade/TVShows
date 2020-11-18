import React from "react";
import "../../Css/Shows.css";

const MainComponent = (props) => {
  const { showData } = props;
  return (
    <div className="cards cards-margin">
      <div className="row">
        <div className="cards col-lg-3 col-md-5" key={showData && showData.id}>
          <img
            alt="img"
            id="mainImage"
            src={showData && showData.image && showData.image.medium}
          />
        </div>
        <div className="col-lg-4 col-md-6 fontStyle">
          {showData &&
            showData.summary &&
            showData.summary.replace(/<[^>]+>/g, "")}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
