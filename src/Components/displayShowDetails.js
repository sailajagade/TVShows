import React from "react";
import Pagination from "./Pagination";;

function displayIngredients(props) {
  const { mealInfo,episodeData,castData,crewData,galleryData } = props;
  return (
    <div class="container">
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
  src={mealInfo.image&&mealInfo.image.medium?mealInfo.image.medium:mealInfo.image.original}
  onClick={(e) => props.onMealSelect(mealInfo)}
  alt=""
  width="350"
  height="350"
/>:''}
<div class="row">
{props.showEpisode==='Episode'?   episodeData && episodeData.map(post => (
  <div class="col-lg-3">
    {post.name}
        <img src={post.image&&post.image.medium} />
        </div>
      )):''}
         {props.showEpisode==='Episode'?<Pagination
        postsPerPage={8}
        totalPosts={props.episodeLength.length}
        paginate={props.paginate}
      />:''}
      </div>
      <div class="row">
{props.showEpisode==='Cast'? castData && castData.map(post => (
  <div>
        <img src={post.character.image&&post.character.image.medium?post.character.image.medium:post.character.image.original} />
        </div>
    
      ))
      :''}
        {props.showEpisode==='Cast'? <Pagination
        postsPerPage={8}
        totalPosts={props.castLength.length}
        paginate={props.paginate}
      />:''}
      </div>
      <div class="row">
{props.showEpisode==='Crew'? crewData && crewData.map(post => (
  <div class="col-lg-4">
    {post.person.name}
        <img src={post.person.image&&post.person.image.medium} />
        </div>
    
      )):'' }
       {props.showEpisode==='Crew'? <Pagination
        postsPerPage={8}
        totalPosts={props.crewLength.length}
        paginate={props.paginate}
      />:''}
      </div>
      <div class="row">
{props.showEpisode==='Gallery'?   galleryData && galleryData.map(post =>
<div class="col-lg-4">
 <img src={post.resolutions.medium&&post.resolutions.medium.url} />
    </div>
    ):''}
    {  props.showEpisode==='Gallery'? <Pagination
        postsPerPage={8}
        totalPosts={props.galleryLength.length}
        paginate={props.paginate}
      />:''}
      </div>

              
        </div>
        {props.showEpisode==='Main'||props.showEpisode===''&&<div class="col-md-4 col-lg-4">
        {mealInfo.summary.replace(/<[^>]+>/g, '')} 
 </div> }
        </div>    
       </div>
  );
}

export default displayIngredients;
