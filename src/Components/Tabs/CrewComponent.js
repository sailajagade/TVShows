import React from "react";
import "../../Css/Shows.css";

const CrewComponent = (props) => {
  const { tabsData } = props;
  return (
    <div className="cards cards-margin">
      {tabsData &&
        tabsData.map((post, index) => (
          <div className=" cards col-lg-2 mt-5  col-md-4 col-sm-6" key={index}>
            <div className="card">
              <img
                src={
                  post.person && post.person.image && post.person.image.medium
                }
                alt="img"
              />
              <div className="card-footer card fontStyle">
                <b>{post && post.type}</b>: {post.person && post.person.name}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CrewComponent;
