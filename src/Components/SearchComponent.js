import React from "react";
import './Shows.css'

const SearchComponent = (props) => {
  const { onGerneSelect, onRatingSelect, onShowSearch } = props;
  const gerneaarr = ["Gerne","Drama", "Action", "Science-Fiction"];
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
    <div class="row arr1" >
      <div class="col-lg-3" style={{paddingLeft:'50px'}}><h1 className="text-primary mt-3">TV Shows</h1></div>
      <div class="col-lg-5 col-md-12 col-sm-12 col-xs-8" style={{padding:'0px'}}>
       <input
        id="serachbox"
        placeholder=""
        onKeyUp={(event) => onShowSearch(event)}
      />
     
      </div>
      {/* <div class="col-lg-2 col-md-12 col-sm-12 col-xs-2" style={{padding:'0px'}}>  <span><button
        id="inp"
        onKeyUp={(event) => onShowSearch(event)}
      > <i class="fa fa-search" style={{fontSize:"12px"}}></i>  </button></span></div> */}
      {/* <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
        <select name="cars" id="inp" onBlur={onGerneSelect}>
          {gerneaarr.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div class="col-lg-1 col-md-12 col-sm-12 col-xs-8">  <select name="cars" id="inp" onBlur={onRatingSelect}>
        {Object.keys(Ratingoptions).map((item) => (
          <option value={item}>{Ratingoptions[item]}</option>
        ))}
      </select></div>
      
       */}
    </div>
  );
};

export default SearchComponent;
