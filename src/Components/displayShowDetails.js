import React from "react";
import Pagination from "./Pagination";

function DisplayShowDetails(props) {
  const { mealInfo, tabsData } = props;
  console.log(mealInfo)
  const tabsLabel = {
    Main: "",
    Episode: "episodes",
    Cast: "cast",
    Crew: "crew",
    Gallery: "images",
  };

  return (
    
    <div>
     

      <div class="row arr" >
      <div class="col-lg-1 col-md-12 col-sm-12 col-xs-2">
        <button class="btn default" onClick={props.routeback}>Home</button>
      </div>
          {Object.keys(tabsLabel).map((item) => (
              <div class="col-lg-1 col-md-12 col-sm-12 col-xs-2">
          <button class="btn default"
              id={item}
              onClick={(e) =>
                props.getShowDetails(item, mealInfo.id, tabsLabel[item])
              }
            >
              {item}
            </button>
            </div>
          ))}
        
      </div>
      <div class="row" style={{marginLeft:'5%'}}>
        <div class="">
             {props.showEpisode === "Main" || props.showEpisode === "" ? (
               <div>
                  <h3>
              <b>{mealInfo.name}</b>
            </h3>
            <div class="col-md-4 col-lg-5">
             
            <div class="" >
            <img id="image" width='600px' height='500px'
                src={mealInfo.image && mealInfo.image.medium}
                onClick={(e) => props.onShowSelect(mealInfo)}
                alt=""
                width="350"
                height="350"
              />
                
              </div>
              <div class="col-md-4 col-lg-9" style={{paddingLeft:'0px'}}>
              {mealInfo.summary&&mealInfo.summary.replace(/<[^>]+>/g, "")}
              </div>
              </div>
               
              <div class="card col-md-4 col-lg-4">
               <div class="card-body"> <h3>Show Info</h3></div>
             <h4><b>Network:</b>{mealInfo.network.name},{mealInfo.network.country.code}</h4> 
             <h4><b>Schedule:</b>{mealInfo.schedule.days.map(day=>day)} at {mealInfo.schedule.time}</h4> 
             <h4><b>Status:</b>{mealInfo.status}</h4> 
            <h4><b>Language:</b>{mealInfo && mealInfo.language}</h4> 
             <h4><b>Show Type:</b>{mealInfo.type}</h4> 
            <h4><b>Gernes:</b>{mealInfo.genres.map(genre=>genre+' '+'|'+' ')}</h4> 
            {/* <h4><b>Episode Order:</b></h4>  */}
            <h4><b>Official Site:</b>{mealInfo.officialSite}</h4> 
                
              {/* {mealInfo.summary&&mealInfo.summary.replace(/<[^>]+>/g, "")} */}
              </div>
            </div>
          ) : (
            ""
          )}
          <div class="row container">
            {props.showEpisode === "Episode"
              ? tabsData &&
                tabsData.map((post) => (
                  <div class="card col-lg-4 episode">
                     <div class="card-body ">
                    
                    <img src={post.image && post.image.medium} />
                    <div><b>Season</b>:{post.season}</div>
                    <div>Episode:{post.number}</div>
                   <div> Name:{post.name}</div>
                    <div>AirDate:{post.airdate}</div>
                    <div><b>Summary</b>:{post.summary.replace(/<[^>]+>/g, "")}</div>
                  </div>
                  </div>
                  
                ))
              : ""}
              </div>
              <div class="row container">
            {props.showEpisode === "Episode" ? (
              <Pagination
                postsPerPage={8}
                totalPosts={props.episodeLength.length}
                paginate={props.paginate}
              />
            ) : (
              ""
            )}
            </div>
          
          <div class="row">
            {props.showEpisode === "Cast"
              ? tabsData &&
                tabsData.map((post) => (
                  <div class="card col-lg-3">
                      <div class="card-body">
                    <img
                      src={post.character&&post.character.image && post.character.image.medium}
                    />
                        <b>{post&&post.character.name}</b>: {post.person&&post.person.name}
                  </div>
                  </div>
                ))
              : ""}
              </div>
                <div class="row container">
            {props.showEpisode === "Cast" ? (
              <Pagination
                postsPerPage={8}
                totalPosts={props.episodeLength.length}
                paginate={props.paginate}
              />
            ) : (
              ""
            )}
          </div>
          <div class="row">
            {props.showEpisode === "Crew"
              ? tabsData &&
                tabsData.map((post) => (
                  <div class="card col-lg-3">
              
                    <div class="card-body">
                    <img src={post.person&&post.person.image && post.person.image.medium} />
                    <b>{post&&post.type}</b>: {post.person&&post.person.name}
                    </div>
                  </div>
                ))
              : ""}
              </div>
              <div class="row container">
            {props.showEpisode === "Crew" ? (
              <Pagination
                postsPerPage={8}
                totalPosts={props.episodeLength.length}
                paginate={props.paginate}
              />
            ) : (
              ""
            )}
          </div>
          <div class="row ">
            {props.showEpisode === "Gallery"
              ? tabsData &&
                tabsData.map((post) => (
                  <div class="col-lg-3">
                    <img 
                      src={
                        post.resolutions&&  post.resolutions.medium && post.resolutions.medium.url
                      }
                    />
                  </div>
                ))
              : ""}
              </div>
                <div class="row container">
            {props.showEpisode === "Gallery" ? (
              <Pagination
                postsPerPage={8}
                totalPosts={props.episodeLength.length}
                paginate={props.paginate}
              />
             
            ) : (
              ""
            )}
             </div>
          
        </div>
      </div>
    </div>
  );
}

export default DisplayShowDetails;
