import React from "react";
// import "./displayAllShows.css";

function displayAllShows(props) {
  const { randomMealData,mealInfo,gerne,rating,showSearch,searchShowData} = props;
  console.log(randomMealData)
  return (
    <div>
 { randomMealData&&randomMealData.map((mealInfo, index) => (
    
                               <div class="col-lg-4">
               {/* {rating && gerne&&mealInfo.rating.average>=Math.floor(+rating) && mealInfo.genres.includes(gerne)  ? */}
             <div>
                 <h3><b>{mealInfo.name }</b></h3>
                 <h3><b>{mealInfo.rating.average}</b></h3>
        
                 <img
                   src={mealInfo.image&&mealInfo.image.medium}
                   onClick={(e) => props.onMealSelect(mealInfo)}
                   alt=""
                   width="350"
                   height="350"
                 />
         
                 </div>
                 {/* :<div></div>} */}
             
              </div>
 ))}
 </div>
           

   

    // </div>
  );
}
export default displayAllShows;
