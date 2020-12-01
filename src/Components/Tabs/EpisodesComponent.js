


import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import noimgfound from '../../images/noimg.png'
import "../../Css/Shows.css";
import "../../Css/Media.css";
import '../../App.css'

const MenuItem = ({ post }) => {


  return   <div className="container">
  <div className="card-group">
    <div className="card" style={{width:'200px',height:'250px'}}>
      <img className="card-img-top" src={post.image&&post.image.medium}
       alt="Card  cap"/>
      <div className="card-block">
              <div className="fontStyle">
             <b>Episode:</b>{ post.season}
                 </div>
                 <div className="fontStyle">
               <b>Season</b>  :{post.number}
                 </div>
                 <div className="fontStyle">
                 <b>Name</b>:{ post.name}
                 </div>
                 <div className="fontStyle">
                <b>Date</b>:{ post.airdate}
                 </div>
    </div>
    
       </div>
  </div>
 </div>

  
           
  };

export const Menu = (list) =>
  list.map((el,index) => {
    return      <MenuItem post={el} key={index} />
   
  });

const Arrow = ({ post, className }) => {
  return <div className={className} style={{cursor:'pointer'}}> <i
  className={post}
 
></i></div>;
};

export const ArrowLeft = Arrow({ post: "fa fa-chevron-circle-left fa-lg", className: "arrow-prev" });
export const ArrowRight = Arrow({ post: "fa fa-chevron-circle-right fa-lg", className: "arrow-next" });
const EpisodesComponent = (props) => {
    const { tabsData } = props;
   let state = {
     readMore:false,
      selected: "",
     
      showName:'',
      alignCenter: true,
      hideArrows: true,
      hideSingleArrow: true
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

export default EpisodesComponent;



