import React from "react";
import CastComponent from "./Tabs/CastComponent";
import CrewComponent from "./Tabs/CrewComponent";
import EpisodesComponent from "./Tabs/EpisodesComponent";
import GalleryComponent from "./Tabs/GalleryComponent";
import MainComponent from "./Tabs/MainComponent";
import Pagination from "./Pagination";
import "../Css/Shows.css";

function DisplayShowDetails(props) {
  const { mealInfo, tabsData,showEpisode,onShowSelect,episodeLength,paginate} = props;
  const tabsLabel = {
    Main: "",
    Episode: "episodes",
    Cast: "cast",
    Crew: "crew",
    Gallery: "images",
  };

  return (
    <div>
      <div class="navbar2">
        <div class="container">
          <div class="col-lg-1">
            <button class="btn" onClick={props.routeback}>
              Home
            </button>
          </div>
          {Object.keys(tabsLabel).map((item) => (
            <div class="col-lg-1">
              <button
                class="btn"
                id={item}
                onClick={() =>
                  props.getShowDetails(item, mealInfo.id, tabsLabel[item])
                }
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
        <div class="container mt-5">
        <MainComponent showEpisode={showEpisode} mealInfo={mealInfo} onShowSelect={onShowSelect}/>
        <EpisodesComponent showEpisode={showEpisode} mealInfo={mealInfo} tabsData={tabsData}onShowSelect={onShowSelect}/>
        
          <CastComponent showEpisode={showEpisode} mealInfo={mealInfo} tabsData={tabsData}onShowSelect={onShowSelect}/>
          <CrewComponent showEpisode={showEpisode} mealInfo={mealInfo} tabsData={tabsData}onShowSelect={onShowSelect}/>
          <GalleryComponent showEpisode={showEpisode} mealInfo={mealInfo} tabsData={tabsData}onShowSelect={onShowSelect}/>
         
           <div class="row container">
              <Pagination
                postsPerPage={8}
                totalPosts={episodeLength.length}
                paginate={paginate}
              />
          </div>
         
          </div>
    </div>
  );
}

export default DisplayShowDetails;
