
  


  import React from "react";
  import "../../Css/Shows.css";

const MainComponent = (props ) => {
    const {mealInfo,onShowSelect,showEpisode}=props
  return (
   
<div>{showEpisode === "Main" || showEpisode === "" ? (
    <div>
      <div class="col-lg-4">
        <div class="card">
          <img
            
            src={mealInfo&&mealInfo.image && mealInfo.image.medium}
            onClick={() => onShowSelect(mealInfo)}
          />
        </div>
      </div>
      <div class="col-lg-4 fontStyle">
        {mealInfo&&mealInfo.summary && mealInfo.summary.replace(/<[^>]+>/g, "")}
      </div>

      <div class="col-lg-4 detailsCard">
        <div >
          <h1 class="mt-3 mb-5 font-family">Show Info</h1>
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
            {mealInfo&&mealInfo.schedule &&
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
            <b>genres:</b>
            {mealInfo&&mealInfo.genres &&
              mealInfo.genres.map((genre) => genre + " " + "|" + " ")}
          </h4>{" "}
        </div>
        <div class="mb-4">
          <h4>
            <b>Official Site:</b>
            {mealInfo.officialSite}
          </h4>{" "}
        </div>
      </div>
    </div>
  ) : (
    ""
  )}
</div>
  );
};

export default MainComponent;
