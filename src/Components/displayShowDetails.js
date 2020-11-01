import React from "react";
import Pagination from "./Pagination";
import "./Shows.css";

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
    <div>
      <div class="row arr">
        <div class="container">
          <div class="col-lg-1 col-md-12 col-sm-12 col-xs-2">
            <button class="btn default" onClick={props.routeback}>
              Home
            </button>
          </div>
          {Object.keys(tabsLabel).map((item) => (
            <div class="col-lg-1 col-md-12 col-sm-12 col-xs-2">
              <button
                class="btn default"
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
      </div>
      <div class="row">
        <div class="container">
          {props.showEpisode === "Main" || props.showEpisode === "" ? (
            <div class="mt-5">
              <div class="col-md-4 col-lg-4">
                <div class="card mb-5 ">
                  <img
                    id="image2"
                    height="350px"
                    src={mealInfo.image && mealInfo.image.medium}
                    onClick={(e) => props.onShowSelect(mealInfo)}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-4 cast">
                {mealInfo.summary && mealInfo.summary.replace(/<[^>]+>/g, "")}
              </div>

              <div class="col-md-4 col-lg-4 detailsCard">
                <div class="mb-4">
                  <h1 class="h1">Show Info</h1>
                </div>

                <div class="mb-4">
                  <h4>
                    <b>Network:</b>
                    {mealInfo.network && mealInfo.network.name},
                    {mealInfo.network && mealInfo.network.country.code}
                  </h4>{" "}
                </div>
                <div class="mb-4">
                  {" "}
                  <h4>
                    <b>Schedule:</b>
                    {mealInfo.schedule &&
                      mealInfo.schedule.days.map((day) => day)}{" "}
                    at {mealInfo.schedule && mealInfo.schedule.time}
                  </h4>{" "}
                </div>
                <div class="mb-4">
                  {" "}
                  <h4>
                    <b>Status:</b>
                    {mealInfo.status}
                  </h4>{" "}
                </div>
                <div class="mb-4">
                  <h4>
                    <b>Language:</b>
                    {mealInfo && mealInfo.language}
                  </h4>{" "}
                </div>
                <div class="mb-4">
                  {" "}
                  <h4>
                    <b>Show Type:</b>
                    {mealInfo.type}
                  </h4>{" "}
                </div>
                <div class="mb-4">
                  <h4>
                    <b>Gernes:</b>
                    {mealInfo.genres &&
                      mealInfo.genres.map((genre) => genre + " " + "|" + " ")}
                  </h4>{" "}
                </div>
                <div class="mb-4">
                  <h4>
                    <b>Official-Site:</b>
                    {mealInfo.officialSite}
                  </h4>{" "}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div class="row container">
            {props.showEpisode === "Episode" &&
              tabsData &&
              tabsData.map((post) => (
                <div class="card-deck col-lg-4">
                  <div class="card episode  mt-5">
                    <div class="card-body" style={{ flex: "none" }}>
                      <img src={post.image && post.image.medium} />
                    </div>
                    <div class="card-footer">
                      <div class="alignLeft">
                        <b>Season:</b>
                        {post.season}
                      </div>
                      <div class="alignLeft">
                        <b>Episode:</b>
                        {post.number}
                      </div>
                      <div class="alignLeft">
                        {" "}
                        <b>Name:</b>
                        {post.name}
                      </div>
                      <div class="alignLeft">
                        <b>AirDate:</b>
                        {post.airdate}
                      </div>
                      <div class="alignLeft">
                        <b>Summary</b>:
                        {post.summary && post.summary.replace(/<[^>]+>/g, "")}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div class="row container">
            {props.showEpisode === "Episode" && (
              <Pagination
                postsPerPage={8}
                totalPosts={props.episodeLength.length}
                paginate={props.paginate}
              />
            )}
          </div>

          <div class="row">
            {props.showEpisode === "Cast" &&
              tabsData &&
              tabsData.map((post) => (
                <div class="card-deck col-lg-3 mt-5">
                  <div class="card ">
                    <img
                      src={
                        post &&
                        post.character &&
                        post.character.image &&
                        post.character.image.medium
                      }
                    />
                    <div class="card-footer cast">
                      <b>{post && post.character && post.character.name}</b>:{" "}
                      {post.person && post.person.name}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div class="row container">
            {props.showEpisode === "Cast" && (
              <Pagination
                postsPerPage={8}
                totalPosts={props.episodeLength.length}
                paginate={props.paginate}
              />
            )}
          </div>
          <div class="row">
            {props.showEpisode === "Crew" &&
              tabsData &&
              tabsData.map((post) => (
                <div class="card-deck col-lg-3 mt-5">
                  <div class="card ">
                    <img
                      src={
                        post.person &&
                        post.person.image &&
                        post.person.image.medium
                      }
                      alt=""
                    />
                    <div class="card-footer cast">
                      <b>{post && post.type}</b>:{" "}
                      {post.person && post.person.name}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div class="row container">
            {props.showEpisode === "Crew" && (
              <Pagination
                postsPerPage={8}
                totalPosts={props.episodeLength.length}
                paginate={props.paginate}
              />
            )}
          </div>
          <div class="row ">
            {props.showEpisode === "Gallery" &&
              tabsData &&
              tabsData.map((post) => (
                <div class="card col-lg-2 mt-5 mr-5 pr-0 pl-0">
                  {post &&
                  post.resolutions &&
                  post.resolutions.medium &&
                  post.resolutions.medium.url ? (
                    <img
                      src={
                        post &&
                        post.resolutions &&
                        post.resolutions.medium &&
                        post.resolutions.medium.url
                      }
                    />
                  ) : (
                    <img
                      width="250px"
                      height="300px"
                      src={
                        post &&
                        post.resolutions &&
                        post.resolutions.original &&
                        post.resolutions.original.url
                      }
                    />
                  )}
                </div>
              ))}
          </div>
          <div class="row container">
            {props.showEpisode === "Gallery" && (
              <Pagination
                postsPerPage={8}
                totalPosts={props.episodeLength.length}
                paginate={props.paginate}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayShowDetails;
