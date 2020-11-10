import React from "react";
import "../../Css/Shows.css";

const CrewComponent = (props) => {
  const { tabsData } = props;
  return (
    <div className="cards cards-margin"  >
      {tabsData &&
        tabsData.map((post) => (
          <div className=" cards col-lg-2 mt-5">
            <div className="card"> 
              <img
                src={
                  post.person && post.person.image && post.person.image.medium
                }
                alt=""
              />
               <div className="card-footer fontStyle">
              <b>{post && post.type}</b>: {post.person && post.person.name}
               </div>
             </div>
           </div>
        ))}
    </div>
  );
};

export default CrewComponent;
