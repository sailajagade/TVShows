import React from "react";
import './Shows.css';

const displayShows = ({ shows, onShowSelect, searchFlag }) => {

  return (
    <div class="row" >

      {shows.map((show) =>
        show && searchFlag ? (
          <div class="col-lg-4" style={{paddingBottom: '90px'}} >
          <div class="card">
            <img id="image" width='250px' height='300px'
              src={show.show && show.show.image && show.show.image.medium}
              onClick={() => onShowSelect(show.show)}
            />
            </div>
          </div>
        ) : (
          <div class="col-lg-4" style={{paddingBottom: '20px'}}>
            <div class="card">
            <img id="image2"  width='250px' height='300px'
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
