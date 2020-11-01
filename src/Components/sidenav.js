import React from "react";
import "./Shows.css";

const sidenav = (props) => {
  const { filterRatingAndGerne } = props;
  const gerneaarr = [
    "",
    "Drama",
    "Action",
    "Science-Fiction",
    "Adventure",
    "Comedy",
    "History",
    "Nature",
  ];
  const Ratingoptions = {
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
      <h1 class="h1">
        <b>Filter</b>
      </h1>
      <div>
        <label>
          <h3>Gerne:</h3>
        </label>
        <select name="cars" id="inputbox2">
          {gerneaarr.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
        <label>
          <h3>Rating:</h3>
        </label>
        <select name="cars" id="inputbox3">
          {Object.keys(Ratingoptions).map((item) => (
            <option value={item}>{Ratingoptions[item]}</option>
          ))}
        </select>
        <div>
          <button id="inp" onClick={filterRatingAndGerne}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default sidenav;
