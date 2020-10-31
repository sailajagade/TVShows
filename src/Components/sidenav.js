import React from "react";
import './Shows.css'

const sidenav = (props) => {
//   const { onGerneSelect, onRatingSelect, onShowSearch } = props;
  const gerneaarr = ["","Drama", "Action", "Science-Fiction"];
  const Ratingoptions = {
      0:'',
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
    <div class="row" style={{marginTop:'10%'}} >
       <h1 style={{marginBottom:'30px',fontFamily: "Roboto",
    fontSize: "30px"}}><b>Filter</b></h1>
        <div>
               <label><h3>Gerne:</h3></label>
        <select name="cars" id="inputbox2"  >
          {gerneaarr.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
        <label><h3>Rating:</h3></label>
       <select name="cars" id="inputbox3" >
        {Object.keys(Ratingoptions).map((item) => (
          <option value={item}>{Ratingoptions[item]}</option>
        ))}
      </select>
      <div><button id="inp" onClick={props.filterRatingAndGerne} >Filter</button></div>
      
      </div>
      
    </div>
  );
};

export default sidenav;
