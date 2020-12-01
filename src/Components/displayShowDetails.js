import React from "react";
import CastComponent from "./Tabs/CastComponent";
import CrewComponent from "./Tabs/CrewComponent";
import EpisodesComponent from "./Tabs/EpisodesComponent";
import GalleryComponent from "./Tabs/GalleryComponent";
import MainComponent from "./Tabs/MainComponent";
import "../Css/Shows.css";
;

function DisplayShowDetails(props) {
  const { showData, episodeData, castData, crewData, galleryData } = props;

  return (
    <div>
      <nav className="navbar navbar-inverse navbar-expand-md nav">
        <li className="nav-link home-btn" onClick={props.routeback}>
          <i className="fa fa-home"></i>
        </li>
      </nav>
      <h3 className="genre-style">
        <b> Summary</b>
      </h3>
      <MainComponent showData={showData} />

      <h3 className="genre-style">
        <b> Cast</b>
      </h3>
      <CastComponent showData={showData} tabsData={castData} />
      <h3 className="genre-style">
        <b> Crew</b>
      </h3>
      <CrewComponent showData={showData} tabsData={crewData} />
      <h3 className="genre-style">
        <b> Episodes</b>
      </h3>
      <EpisodesComponent showData={showData} tabsData={episodeData} />
      <h3 className="genre-style">
        <b> Gallery</b>
      </h3>
      <GalleryComponent showData={showData} tabsData={galleryData} />
    </div>
  );
}

export default DisplayShowDetails;
