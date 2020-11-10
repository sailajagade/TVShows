import React from "react";
import "../../Css/Shows.css";

const GalleryComponent = (props) => {
  const { tabsData, showTab } = props;
  return (
    <div className="cards cards-margin">
    {tabsData &&
      tabsData.map((post) => (
        <div className=" cards col-lg-2 mt-5">
          <div className="card">
        {post &&
        post.resolutions &&
        post.resolutions.medium &&
        post.resolutions.medium.url ? (
          <img
            src={
              post &&
              post.resolutions &&
              post.resolutions.medium &&
              post.resolutions.medium.url
            }
          />
        ) : (
          <img
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
