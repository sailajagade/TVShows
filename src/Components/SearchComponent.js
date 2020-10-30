import React from "react";

const SearchComponent = (props) => {
  const { onGerneSelect, onRatingSelect, onShowSearch } = props;
  const gerneaarr = ["Drama", "Action", "Science-Fiction"];
  const Ratingoptions = {
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
    <div class="row">
      <h1 className="text-primary mb-3">TV Shows</h1>
      <div>
        <select name="cars" id="inputbox2" onBlur={onGerneSelect}>
          {gerneaarr.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <select name="cars" id="inputbox3" onBlur={onRatingSelect}>
        {Object.keys(Ratingoptions).map((item) => (
          <option value={item}>{Ratingoptions[item]}</option>
        ))}
      </select>

      <input
        id="inputbox"
        placeholder=" Search Shows"
        onKeyUp={(event) => onShowSearch(event)}
      />
    </div>
  );
};

export default SearchComponent;
