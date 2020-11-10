import React from "react";
import "../../Css/Shows.css";

const EpisodesComponent = (props) => {
  const { tabsData } = props;
  return (
    <div className="cards cards-margin" >
      {tabsData &&
        tabsData.map((post) => (
          <div className="card-deck col-lg-3">
            <div className="card   mt-5">
                <img src={post && post.image && post.image.medium} />
              <div className="card-footer fontStyle">
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
