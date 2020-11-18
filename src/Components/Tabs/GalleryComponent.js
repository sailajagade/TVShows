import React from "react";
import "../../Css/Shows.css";

const GalleryComponent = (props) => {
  const { tabsData } = props;
  return (
    <div className="cards cards-margin">
      {tabsData &&
        tabsData.map((post, index) => (
          <div className=" cards col-lg-2 mt-5  col-md-3 col-sm-6" key={index}>
            <div className="card">
              {post &&
              post.resolutions &&
              post.resolutions.medium &&
              post.resolutions.medium.url ? (
                <img
                  alt="img"
                  src={
                    post &&
                    post.resolutions &&
                    post.resolutions.medium &&
                    post.resolutions.medium.url
                  }
                />
              ) : (
                <img
                  alt="img"
                  height="300px"
                  src={
                    post &&
                    post.resolutions &&
                    post.resolutions.original &&
                    post.resolutions.original.url
                  }
                />
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GalleryComponent;
