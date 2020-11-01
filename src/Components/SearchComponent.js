import React from "react";
import "./Shows.css";

const SearchComponent = (props) => {
  const { onShowSearch } = props;

  return (
    <div class="row arr1">
      <div class="col-lg-3 heading-Tv">
        <h1 className="text-primary mt-3 h1">TV Shows</h1>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 col-xs-8 mt-3 ml-5">
        <input
          id="searchbox"
          placeholder=""
          onKeyUp={(event) => onShowSearch(event)}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
