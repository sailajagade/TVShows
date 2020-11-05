import React from "react";
import "../Css/Shows.css";

const displayShows = ({
  shows,
  onShowSelect,
  searchFlag,
  currentPage,
  postsPerPage,
}) => {
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = shows.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div class="row mt-5">
      {currentPosts.map((show) =>
        show && searchFlag ? (
          <div class="col-lg-4 pb-5 ">
            <div class="card ">
              <img
                id="image"
                src={show.show && show.show.image && show.show.image.medium}
                onClick={() => onShowSelect(show.show)}
              />
            </div>
          </div>
        ) : (
          <div class="col-lg-3 pb-5">
            <div class="card">
              <img
                id="image"
                src={show.image && show.image.medium}
                onClick={() => onShowSelect(show)}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default displayShows;
