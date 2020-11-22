import React from "react";
import "../../Css/Shows.css";
import "../../Css/Tabs.css";

import "../../Css/Media.css";

const EpisodesComponent = (props) => {
  const { tabsData } = props;
  return (
    <div className="row cards-margin">
      {tabsData &&
        tabsData.map((post) => (
          <div
            className=" cards col-lg-3 mt-5  col-md-4 col-sm-6"
            key={post.name}
          >
            <div className="card">
              <img src={post && post.image && post.image.medium} alt="img" />

              <div className="card-footer cards font-Style">
                <div>
                  <b>Season:</b>
                  {post.season}
                </div>
                <div>
                  <b>Episode:</b>
                  {post.number}
                </div>
                <div>
                  {" "}
                  <b>Name:</b>
                  {post.name}
                </div>
                <div>
                  <b>AirDate:</b>
                  {post.airdate}
                </div>
                <div>
                  <b>Summary</b>:
                  {post.summary && post.summary.replace(/<[^>]+>/g, "")}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EpisodesComponent;
