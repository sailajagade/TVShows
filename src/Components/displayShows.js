import React from "react";

const displayShows = ({ shows, onShowSelect, searchFlag }) => {
  return (
    <div class="row">
      {shows.map((show) =>
        show && searchFlag ? (
          <div>
            <img id="image"
              src={show.show && show.show.image && show.show.image.medium}
              onClick={() => onShowSelect(show.show)}
            />
          </div>
        ) : (
          <div class="col-lg-3">
            <img id="image2"
              src={show.image && show.image.medium}
              onClick={() => onShowSelect(show)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default displayShows;
