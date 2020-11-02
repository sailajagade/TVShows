import React from "react";
import "../../Css/Shows.css";

const GalleryComponent = (props ) => {
    const {tabsData,showEpisode}=props
  return (
   
    <div class="row ">
    {showEpisode === "Gallery" &&
      tabsData &&
      tabsData.map((post) => (
        <div class="card col-lg-2 mt-5 mr-5 pr-0 pl-0">
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
              width="250px"
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
      ))}
  </div>
 
);
};

export default GalleryComponent;
