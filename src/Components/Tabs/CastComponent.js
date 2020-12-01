import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import noimgfound from '../../images/noimg.png'

import "../../Css/Shows.css";
import "../../Css/Media.css";
import '../../App.css'

const MenuItem = ({ text }) => {
  
  
  return <div className="container">
  <div className="card-group">
    <div className="card" style={{width:'200px',height:'300px'}}>
    { text.character.image?
     <img className="card-img-top" src={
      text.character.image.medium} width="200px" height="170px"
     alt="Card  cap"/>:  <img className="card-img-top" width="200px" height="170px" src={noimgfound
   }
alt = {text.name}   />}
      <div className="card-block">
      <div className="fontStyle">
                    <b> {text && text.character && text.character.name}</b>
                    </div>
               <div>as</div> 
                <div className="fontStyle ">
                {text.person && text.person.name}
                </div>
    </div>
    
       </div>
  </div>
 </div>

  
  
  
  
  
  
  
  
  
  
// return<div  className={` flex row flex-no-wrap w-1/2 sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col p-3  `}  
  
//    >  
  
//   <div className="w-full sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col p-3"
//     >
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col 
//      " >
//       <div className="bg-cover h-48"  >
//       { text.character.image?<img className="img-details card-img-top image-size" src={
//                  text.character.image&&  text.character.image.medium
//                 }  width="200px" height="170px"
//   alt = {text.name}   />:  <img className="img-details card-img-top image-size"  width="200px" height="170px" src={noimgfound
//    }
// alt = {text.name}   />}
//       </div>
//       <div className="p-2 flex-1 flex flex-col" >
//       <div className="fontStyle">
//                     <b> {text && text.character && text.character.name}</b></div>
//                <div>as</div> 
//                 <div className="fontStyle ">
//                 {text.person && text.person.name}
//                 </div>
//       </div>
//     </div>  
   
//   </div>
  
   
//   </div>
  
  
  



  
  
//   <div className="container">
//   <div className="card">
//       <div className="card-block">
//           <div className="row " >
//               <div className="col-lg-4 col-sm-4 col-2 tags p-b-2" style={{paddingLeft:'0px'}}>
//               { text.character.image?<img className="card-img-top image-size" src={
//                  text.character.image&&  text.character.image.medium
//                 }
//   alt = {text.name}   />:  <img className="card-img-top image-size" src={noimgfound
//    }
// alt = {text.name}   />
// }
//               </div>
//               <div className="col-lg-4 col-5 col-sm-6 offset-lg-3 offset-sm-1 offset-md-1 offset-5 ">
//                   <div className="fontStyle ">
//                     <b> {text && text.character && text.character.name}</b></div>
//                <div>as</div> 
//                 <div className="fontStyle ">
//                 {text.person && text.person.name}
//                 </div>
                    
//               </div>
//           </div>
//       </div>
//   </div>
// </div>
  
     
};

export const Menu = (list) =>
  list.map((el,index) => {
    return      <div  key={index}>
     <MenuItem text={el} key={index}  />
     </div>
  });

const Arrow = ({ text, className }) => {
  return <div className={className} style={{cursor:'pointer'}}> <i
  className={text}
 
></i></div>;
};

export const ArrowLeft = Arrow({ text: "fa fa-chevron-circle-left fa-lg", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: "fa fa-chevron-circle-right fa-lg", className: "arrow-next" });
const CastComponent = (props) => {
    const { tabsData } = props;
   let state = {
      selected: "",
      alignCenter: true,
           hideArrows: true,
      hideSingleArrow: true,
    };
   let menuItems =tabsData&& Menu(tabsData.slice(0, tabsData.length));
   const menu = menuItems;
    return (    
      <ScrollMenu
      scrollBy={6}
      alignCenter={false}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      data={menu}
      hideArrows={state.hideArrows}
      hideSingleArrow={state.hideSingleArrow}
    />
        
    );
  
}
export default CastComponent;
