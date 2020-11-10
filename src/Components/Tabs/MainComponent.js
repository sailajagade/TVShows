import React from "react";
import "../../Css/Shows.css";

const MainComponent = (props) => {
  const { showData } = props;
  return (
    <div className="cards cards-margin">
      <div className="row">
        <div className="cards col-lg-2 " >
          <div className="card">
            <img
              id="mainImage"
              src={showData && showData.image && showData.image.medium}
            />
          </div>
        </div>
        <div className="col-lg-4 fontStyle"  >
          {showData &&
            showData.summary &&
            showData.summary.replace(/<[^>]+>/g, "")}
        </div>

        <div className="col-lg-4 detailsCard">
          <div>
            <h1 className="mt-3 mb-5 font-family">Show Info</h1>
          </div>

          <div className="mb-4">
            <h3>
              <b>Network:</b>
              {showData.network && showData.network.name},
              {showData.network && showData.network.country.code}
            </h3>{" "}
          </div>
          <div className="mb-4">
            {" "}
            <h3>
              <b>Schedule:</b>
              {showData &&
                showData.schedule &&
                showData.schedule.days.map((day) => day)}{" "}
              at {showData.schedule && showData.schedule.time}
            </h3>{" "}
          </div>
          <div className="mb-4">
            {" "}
            <h3>
              <b>Status:</b>
              {showData.status}
            </h3>{" "}
          </div>
          <div className="mb-4">
            <h3>
              <b>Language:</b>
              {showData && showData.language}
            </h3>{" "}
          </div>
          <div className="mb-4">
            {" "}
            <h3>
              <b>Show Type:</b>
              {showData.type}
            </h3>{" "}
          </div>
          <div className="mb-4">
            <h3>
              <b>genres:</b>
              {showData &&
                showData.genres &&
                showData.genres.map((genre) => genre + " " + "|" + " ")}
            </h3>{" "}
          </div>
          <div className="mb-4">
            <h3>
              <b>Official Site:</b>
              {showData.officialSite}
            </h3>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
