import React from "react";
import "../Css/Shows.css";

const SearchComponent = (props) => {
  const { onShowSearch } = props;

  return (
    <div class="row nav">
      <div class="col-lg-2 mt-4 ml-4">
        <h1 className="text-primary mt-3">TV Shows</h1>
      </div>
      <div class="col-lg-5 mt-3">
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
