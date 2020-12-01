import React from "react";
import "../../Css/Shows.css";
import "../../Css/Media.css";

const MainComponent = (props) => {
  const { showData } = props;
  return (
                <div className="row" style={{marginLeft:'30px',marginRight:'30px'}} >
                <div className="col-lg-1 col-sm-6 tags p-b-2">
          <img
            alt="img"
            className="img-details image-size"
            src={showData && showData.image && showData.image.medium}
          />
           </div>
          <div className="col-lg-7 col-sm-12 offset-lg-1 ">
                  <div className="fontStyle">
          {showData &&
            showData.summary &&
            showData.summary.replace(/<[^>]+>/g, "")}
        </div>
        </div>
    
   
    </div>
  );
};

export default MainComponent;
