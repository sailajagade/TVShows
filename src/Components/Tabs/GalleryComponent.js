import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import noimgfound from "../../images/noimg.png";

import "../../Css/Shows.css";

import "../../App.css";
import { isMobileOnly } from "react-device-detect";

const MenuItem = ({ post }) => {
  return (
    <div className="container">
        <div className="card gallery">
          {post.resolutions.medium ? (
            <img
              className="card-img-top  "
              src={post.resolutions.medium.url}
              width="200px"
              height="200px"
              alt="No Data"
            />
          ) : (
            <img
              className="card-img-top "
              width="200px"
              height="200px"
              src={noimgfound}
              alt={post.name}
            />
          )}
        </div>
      </div>
  );

  // return <div  className={` flex row flex-no-wrap w-1/2 sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col p-3  `}

  //  >

  // <div className="w-full sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col p-3"
  //   >
  //   <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col
  //    " >
  //     <div className="bg-cover h-48"  >
  //       {post.resolutions.medium?<img className="img card-img-top image-size"
  //                 alt="img"
  //                 src={ post.resolutions&&post.resolutions.medium&&post.resolutions.medium.url }

  //               />:  <img className="img card-img-top image-size" src={noimgfound
  //               }
  //            alt = 'no'   />}

  //     </div>
  //   </div>

  // </div>

  // </div>
};

// <div className="container">
// <div className="card">
//     <div className="card-block">
//         <div className="row " >
//             <div  >
//              {post.resolutions.medium?<img className="card-img-top image-size"
//                 alt="img"
//                 src={ post.resolutions&&post.resolutions.medium&&post.resolutions.medium.url }

//               />:  <img className="card-img-top image-size" src={noimgfound
//               }
//            alt = 'no'   />
//            }
//            </div>
//            </div>
//            </div>
//           </div>
//   </div>
// };

export const Menu = (list) =>
  list.map((el, index) => {
    return <MenuItem post={el} key={index} />;
  });

const Arrow = ({ post, className }) => {
  return (
    <div className={className}>
      {" "}
      <i className={post}></i>
    </div>
  );
};

export const ArrowLeft = Arrow({
  post: "fa fa-chevron-circle-left fa-lg",
  className: "arrow-prev",
});
export const ArrowRight = Arrow({
  post: "fa fa-chevron-circle-right fa-lg",
  className: "arrow-next",
});
const GalleryComponent = (props) => {
  const { tabsData } = props;
  let state = {
    selected: "",

    showName: "",
    alignCenter: true,
    hideArrows: true,
    hideSingleArrow: true,
    clickWhenDrag: true,
  };
  let menuItems = tabsData && Menu(tabsData.slice(0, tabsData.length));
  const menu = menuItems;
  return (
    <ScrollMenu
      alignCenter={false}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      data={menu}
      hideArrows={state.hideArrows}
      hideSingleArrow={state.hideSingleArrow}
      clickWhenDrag={state.clickWhenDrag}
      scrollBy={isMobileOnly ? 1 : 6}
    />
  );
};

export default GalleryComponent;
