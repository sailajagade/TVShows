import React from "react";
// import DisplayMealsComponent from "./displayMealsComponent";
// import "./displayMealsComponent.css";

function displayIngredients(props) {
  const { mealInfo,episodeData,castData,crewData,galleryData } = props;
  console.log(galleryData)
  console.log('--')
  return (
    <div class="container">
      <div><button onClick={props.routeback} >Home</button></div>
    <div class="row">
      <div class="col-lg-1"><button id="Main" 
      onClick={(e) => props.switchCase('Main',mealInfo.id)}>Main</button>

      </div>
      <div class="col-lg-1">
      <button  onClick={(e) => props.switchCase('Episode',mealInfo.id)}>Episodes</button>

      </div>
      <div class="col-lg-1">
      <button onClick={(e) => props.switchCase('Cast',mealInfo.id)}>Cast</button>

      </div>
      <div class="col-lg-1">
      <button onClick={(e) => props.switchCase('Crew',mealInfo.id)}>Crew</button>

      </div>
      <div class="col-lg-1">
      <button onClick={(e) => props.switchCase('Gallery',mealInfo.id)}>Gallery</button>

      </div>

    </div>
    <div class="row">
        <div class="col-md-6 col-lg-6">
       
       
      {props.showEpisode==='Main'||props.showEpisode===''?  <h3><b>{mealInfo.name}</b></h3>:''}
      {props.showEpisode==='Main'||props.showEpisode===''? 
<img
  src={mealInfo.image&&mealInfo.image.medium}
  onClick={(e) => props.onMealSelect(mealInfo)}
  alt=""
  width="350"
  height="350"
/>:''}
{props.showEpisode==='Episode'?   episodeData && episodeData.map(post => (
        <img src={post.image&&post.image.medium} />
      )):''}
{props.showEpisode==='Cast'? castData && castData.map(post => (
        <img src={post.character.image&&post.character.image.medium} />
    
      )):''}
{props.showEpisode==='Crew'? crewData && crewData.map(post => (
        <img src={post.person.image&&post.person.image.medium} />
    
      )):'' }
{props.showEpisode==='Gallery'?   galleryData && galleryData.map(post =>
 (<img src={post.resolutions.medium&&post.resolutions.medium.url} />
    
    )):''}

              
        </div>
        <div class="col-md-4 col-lg-4">
        {props.showEpisode==='Main'||props.showEpisode===''?mealInfo.summary.replace(/<[^>]+>/g, ''):''} 
        </div> 
        </div>    
       </div>
  );
}

export default displayIngredients;
