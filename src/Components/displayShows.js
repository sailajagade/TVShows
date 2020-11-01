import React from "react";
import "./Shows.css";

const displayShows = ({ shows, onShowSelect, searchFlag }) => {
  return (
    <div class="row mt-5">
      {shows.map((show) =>
        show && searchFlag ? (
          <div class="col-lg-4 padding-bottom ">
            <div class="card mr-5">
              <img
                id="image"
                width="250px"
                height="300px"
                src={show.show && show.show.image && show.show.image.medium}
                onClick={() => onShowSelect(show.show)}
              />
            </div>
          </div>
        ) : (
          <div class="col-lg-4 padding-bottom ">
            <div class="card mr-5">
              <img
                id="image2"
                width="250px"
                height="300px"
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
