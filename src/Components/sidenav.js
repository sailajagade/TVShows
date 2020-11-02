import React from "react";
import "../Css/Shows.css";

const sidenav = (props) => {
  const { filterRatingAndgenre } = props;
  const genreOptions = [
    "",
    "Drama",
    "Action",
    "Science-Fiction",
    "Adventure",
    "Comedy",
    "History",
    "Nature",
  ];
  const RatingOptions = {
    0: "",
    1: "1+",
    2: "2+",
    3: "3+",
    4: "4+",
    5: "5+",
    6: "6+",
    7: "7+",
    8: "8+",
    9: "9+",
  };
  return (
    <div class="row mt-5 ml-3">
      <h1 >
        <b>Filter</b>
      </h1>
      <div class="mt-3">
        <label>
          <h3>Genre:</h3>
        </label>
        <select id="genre">
          {genreOptions.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
        <label>
          <h3>Rating:</h3>
        </label>
        <select  id="rating">
          {Object.keys(RatingOptions).map((opt) => (
            <option value={opt}>{RatingOptions[opt]}</option>
          ))}
        </select>
                 <button id="button" onClick={filterRatingAndgenre}>
            Filter
          </button>
       
      </div>
    </div>
  );
};

export default sidenav;
