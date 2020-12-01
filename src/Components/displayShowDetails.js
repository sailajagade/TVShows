import React from "react";
import CastComponent from "./Tabs/CastComponent";
import CrewComponent from "./Tabs/CrewComponent";
import EpisodesComponent from "./Tabs/EpisodesComponent";
import GalleryComponent from "./Tabs/GalleryComponent";
import MainComponent from "./Tabs/MainComponent";
import "../Css/Shows.css";
import "../Css/Media.css";

function DisplayShowDetails(props) {
  const {
    showData,
    episodeData,
    castData,
    crewData,
    galleryData
  } = props; 
 
  return (
    <div>
     <nav className="navbar navbar-inverse navbar-expand-md nav">  
     <li className="nav-link home-btn" onClick={props.routeback} style={{marginLeft:'40px'}}>
              <i className="fa fa-home"></i>
            </li>
            </nav>
            <h3 className="genre-style flex row flex-no-wrap w-1/2 sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col"
            style={{marginLeft:'50px',marginTop:'10px'}} >
           <b>  Summary</b>
            </h3>
          <MainComponent showData={showData} />
      
          <h3 className="genre-style flex row flex-no-wrap w-1/2 sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col"
            style={{marginLeft:'50px',marginTop:'10px'}} >
           <b>  Cast</b>
            </h3>
          <CastComponent showData={showData} tabsData={castData} />
        
          <h3 className="genre-style flex row flex-no-wrap w-1/2 sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col"
            style={{marginLeft:'50px',marginTop:'10px'}} >
           <b>  Crew</b>
            </h3>
          <CrewComponent showData={showData} tabsData={crewData} />
      
          <h3 className="genre-style flex row flex-no-wrap w-1/2 sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col"
            style={{marginLeft:'50px',marginTop:'10px'}} >
           <b>  Episodes</b>
            </h3>
        <EpisodesComponent showData={showData} tabsData={episodeData} />
        <h3 className="genre-style flex row flex-no-wrap w-1/2 sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col"
            style={{marginLeft:'50px',marginTop:'10px'}} >
           <b>  Gallery</b>
            </h3>
          <GalleryComponent showData={showData} tabsData={galleryData} />
       
      </div>
  );
}

export default DisplayShowDetails;
