import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import noimgfound from '../../images/noimg.png'

import "../../Css/Shows.css";
import "../../Css/Media.css";
import '../../App.css'

const MenuItem = ({ post }) => {
      
  return <div  className={` flex row flex-no-wrap w-1/2 sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col p-3  `}  
  
   >  
  
  <div className="w-full sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col p-3"
    >
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col 
     " >
      <div className="bg-cover h-48"  >
        {post.resolutions.medium?<img className="img card-img-top image-size"
                  alt="img"
                  src={ post.resolutions&&post.resolutions.medium&&post.resolutions.medium.url } 
               
                />:  <img className="img card-img-top image-size" src={noimgfound
                }
             alt = 'no'   />}
        
      </div>
    </div>  
   
  </div>
  
   
  </div>
  
  
              }
  
  
  
  
  
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
  list.map((el,index) => {
    return      <MenuItem post={el} key={index}  />
   
  });

const Arrow = ({ text, className }) => {
  return <div className={className} style={{cursor:'pointer'}}> <i
  className={text}
 
></i></div>;
};

export const ArrowLeft = Arrow({ text: "fa fa-chevron-circle-left fa-lg", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: "fa fa-chevron-circle-right fa-lg", className: "arrow-next" });
const GalleryComponent = (props) => {
    const { tabsData } = props;
   let state = {
      selected: "",
      
      showName:'',
      alignCenter: true,      
      hideArrows: true,
      hideSingleArrow: true,
      
    };
   let menuItems =tabsData&& Menu(tabsData.slice(0, tabsData.length));
   const menu = menuItems;
    return (    
      <ScrollMenu
      alignCenter={false}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      data={menu}
      hideArrows={state.hideArrows}
      hideSingleArrow={state.hideSingleArrow}
      scrollBy={6}
    />
        
    );
  
}

export default GalleryComponent;


