import React from "react";
import "../../Css/Shows.css";
import "../../Css/Tabs.css";

import "../../Css/Media.css";

const CastComponent = (props) => {
  const { tabsData } = props;
  return (
    <div className="cards cards-margin">
      {tabsData &&
        tabsData.map((post) => (
          <div
            className=" cards col-lg-2 mt-5  col-md-4 col-sm-6"
            key={post.character.name}
          >
            <div className="card" id="cast-div">
              <img
                id="cast-image"
                alt="img"
                src={
                  post &&
                  post.character &&
                  post.character.image &&
                  post.character.image.medium
                }
              />
              <div className="card-footer card fontStyle">
                <b>{post && post.character && post.character.name}</b>:
                {post.person && post.person.name}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CastComponent;
