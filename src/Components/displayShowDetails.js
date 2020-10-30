import React from "react";
import Pagination from "./Pagination";

function DisplayShowDetails(props) {
  const { mealInfo, tabsData } = props;
  const tabsLabel = {
    Main: "",
    Episode: "episodes",
    Cast: "cast",
    Crew: "crew",
    Gallery: "images",
  };

  return (
    <div class="container">
      <div>
        <button onClick={props.routeback}>Home</button>
      </div>

      <div class="row">
        <div class="col-lg-1">
          {Object.keys(tabsLabel).map((item) => (
            <button
              id={item}
              onClick={(e) =>
                props.getShowDetails(item, mealInfo.id, tabsLabel[item])
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-6">
             {props.showEpisode === "Main" || props.showEpisode === "" ? (
            <div class="col-md-4 col-lg-4">
              <h3>
              <b>{mealInfo.name}</b>
            </h3>
              <img id="img"
                src={mealInfo.image && mealInfo.image.medium}
                onClick={(e) => props.onShowSelect(mealInfo)}
                alt=""
                width="350"
                height="350"
              />

              {mealInfo.summary&&mealInfo.summary.replace(/<[^>]+>/g, "")}
            </div>
          ) : (
            ""
          )}
          <div class="row">
            {props.showEpisode === "Episode"
              ? tabsData &&
                tabsData.map((post) => (
                  <div class="col-lg-3">
                    {post.name}
                    <img src={post.image && post.image.medium} />
                  </div>
                ))
              : ""}
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
                  <div>
                    <img
                      src={post.character&&post.character.image && post.character.image.medium}
                    />
                  </div>
                ))
              : ""}
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
                  <div class="col-lg-4">
                    {post.person&&post.person.name}
                    <img src={post.person&&post.person.image && post.person.image.medium} />
                  </div>
                ))
              : ""}
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
          <div class="row">
            {props.showEpisode === "Gallery"
              ? tabsData &&
                tabsData.map((post) => (
                  <div class="col-lg-4">
                    <img
                      src={
                        post.resolutions&&  post.resolutions.medium && post.resolutions.medium.url
                      }
                    />
                  </div>
                ))
              : ""}
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
