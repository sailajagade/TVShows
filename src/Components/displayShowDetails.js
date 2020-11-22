import React from "react";
import CastComponent from "./Tabs/CastComponent";
import CrewComponent from "./Tabs/CrewComponent";
import EpisodesComponent from "./Tabs/EpisodesComponent";
import GalleryComponent from "./Tabs/GalleryComponent";
import MainComponent from "./Tabs/MainComponent";
import Pagination from "./Pagination";
import "../Css/Shows.css";
import "../Css/Media.css";

function DisplayShowDetails(props) {
  const {
    showData,
    tabsData,
    showTab,
    paginate,
    currentPage,
    postsPerPage = 8,
  } = props;
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let tabData =
    Array.isArray(tabsData) &&
    tabsData.slice(indexOfFirstPost, indexOfLastPost);
  const tabsLabel = {
    Main: "",
    Cast: "cast",
    Crew: "crew",
    Gallery: "images",
    Episode: "episodes",
  };
  return (
    <div>
      <div className="nav-bar">
        <div className="row container mt-4">
          <div className="col-lg-4">
            <button className="btn home-btn" onClick={props.routeback}>
              <i className="fa fa-home"></i>
            </button>
          </div>
          {Object.keys(tabsLabel).map((item, index) => (
            <div className="col-lg-1" key={index}>
              <button
                className="btn nav-btn"
                id={item}
                onClick={() =>
                  props.getShowDetails(
                    item,
                    showData && showData.id,
                    tabsLabel[item]
                  )
                }
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        {showTab === "Main" || showTab === "" ? (
          <MainComponent showData={showData} />
        ) : (
          ""
        )}
        {showTab === "Episode" && (
          <EpisodesComponent showData={showData} tabsData={tabData} />
        )}

        {showTab === "Cast" && (
          <CastComponent showData={showData} tabsData={tabData} />
        )}
        {showTab === "Crew" && (
          <CrewComponent showData={showData} tabsData={tabData} />
        )}
        {showTab === "Gallery" && (
          <GalleryComponent showData={showData} tabsData={tabData} />
        )}

        <div className="pagination-margin">
          {showTab !== "" ? (
            <Pagination
              postsPerPage={8}
              totalPosts={tabsData && tabsData.length}
              paginate={paginate}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplayShowDetails;
