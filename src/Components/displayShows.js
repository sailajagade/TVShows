import React from "react";
import "../Css/Shows.css";

const displayShows = ({ shows, onShowSelect, searchFlag }) => {
  return (
    <div class="row mt-5">
      {shows.map((show) =>
        show && searchFlag ? (
          <div class="col-lg-4 pb-5 ">
            <div class="card ">
              <img               
                  src={show.show && show.show.image && show.show.image.medium}
                onClick={() => onShowSelect(show.show)}
              />
            </div>
          </div>
        ) : (
          <div class="col-lg-3 pb-5">
            <div class="card">
              <img              
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
