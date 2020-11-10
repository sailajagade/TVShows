import React from "react";
import "../../Css/Shows.css";

const CastComponent = (props) => {
  const { tabsData } = props;
  return (
    <div className="cards cards-margin" >
    {tabsData &&
      tabsData.map((post) => (
        <div className=" cards col-lg-2 mt-5">
          <div className="card">
              <img
                src={
                  post &&
                  post.character &&
                  post.character.image &&
                  post.character.image.medium
                }
              />
              <div className="card-footer fontStyle">
                <b>{post && post.character && post.character.name}</b>:{" "}
                {post.person && post.person.name}
              </div>
            </div>
           </div>
        ))}
    </div>
  );
};

export default CastComponent;
