import React from "react";
import "../../Css/Shows.css";


const MainComponent = (props) => {
  const { showData } = props;
  return (
    <div className="row maindiv ">
      <div className="col-lg-1 col-sm-6 tags p-b-2 mb-3">
        <img
          alt="img"
          className="main"
          src={showData && showData.image && showData.image.medium}
        />
      </div>
      <div className="col-lg-5  offset-lg-1 mb-3 summary ">
        <div className="fontSize">
          {showData &&
            showData.summary &&
            showData.summary.replace(/<[^>]+>/g, "")}
        </div>
      </div>
      <div className="col-lg-3 ">
        <div className="card-group">
          <div className="card details">
            <div className="show-info">
              <div className="mb-3">
                <h3>Show Info</h3>
              </div>
              <div className="fontStyle  mb-3">
                <b>Language</b>: {showData && showData.language}
              </div>
              <div className="fontStyle mb-3">
                <b>Genres:</b>
                {showData &&
                  showData.genres &&
                  showData.genres.map((genre) => genre).join(",")}
              </div>
              <div className="fontStyle  mb-3">
                <b>Status</b>: {showData && showData.status}
              </div>
              <div className="fontStyle  mb-3">
                {showData &&
                  showData.schedule.days.map((day, index) => (
                    <div key={index}>
                      <b>Schedule</b>:{day} {showData.schedule.time}
                    </div>
                  ))}
              </div>
              <div className="fontStyle  mb-3">
                <b>Show Type</b>:{showData && showData.type}
              </div>
              <div className="fontStyle  mb-3">
                <b>Premiered</b>:{showData && showData.premiered}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
