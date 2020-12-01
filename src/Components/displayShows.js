import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { isMobileOnly } from "react-device-detect";
import noimgfound from '../images/noimg.png'
import {onShowSearchData} from "../Containers/CommonMethods";
import "../Css/Shows.css";
import "../Css/Media.css";
import '../App.css'


const MenuItem = ({ text, selected ,onShowSelect}) => {
  
  return      <div  className={` flex row  flex-col p-2  menu-item ${selected ? "active" : ""}`}  
  onClick={() => onShowSelect(text.id)}  >  
  
  <div className=" flex flex-col p-3"
    >
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col
     " >
      <div className="bg-cover h-48"  >
        <img className="img" src={text.image&&text.image.medium} width="200px" height="200px" alt="no data"/>
      </div>
      <div className="p-4 flex-1 flex flex-col" >
       Rating:{text.rating&&text.rating.average}
      </div>
    </div>  
   
  </div>
  
   
  </div>
  
  
  
  // <div className={` row menu-item ${selected ? "active" : ""}`} key={selected} 
  //  onClick={() => onShowSelect(text.id)}  >
  // <div className={` card-view menu-item ${selected ? "active" : ""}`}>
  //     <div className={` card-header menu-item ${selected ? "active" : ""}`}>
  //         <img className="card-header avengerEndgame" src={text.image&&text.image.medium}
  //          />
  //     </div>

  //     <div className="card-movie-content">
  //         <div className="card-movie-content-head">
              
  //             <div className="ratings">Rating:<span>{text.rating&&text.rating.average}</span></div>
  //         </div>
         
  //     </div>
  // </div>

  //   </div>
  
  // <div  className={` card menu-item ${selected ? "active" : ""}`} key={selected}  onClick={() => onShowSelect(text.id)} >
  //  {text.image? <img className="card-img-top image-size" src = {text.image&&text.image.medium}
  // alt = {text.name}  onClick={() => onShowSelect(text.id)} />
  //  :<img src={noimgfound} alt={text.name} className="card-img-top image-size"/>}
  //     <div className="card-footer" style={{background:'rgb(34, 37, 57)',color:'white'}}>Rating:{text.rating&&text.rating.average}</div>
  //     </div>

};

export const Menu = (list, onShowSelect,searchFlag) =>
list&&list.map((el,index) => { 
    
  return        <div key={index}>     <MenuItem text={searchFlag?el.show:el} key={index} selected={index} onShowSelect={onShowSelect}/>
  </div>
  });

const Arrow = ({ text, className }) => {
  return <div className={className} style={{cursor:'pointer'}}> <i
  className={text}
 
></i></div>;
};

export const ArrowLeft = Arrow({ text: "fa fa-chevron-circle-left fa-lg", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: "fa fa-chevron-circle-right fa-lg", className: "arrow-next" });
class displayShows extends Component {
    constructor(props) {
        super(props);
        this.menu = null;
        this.mounted=true
             }
    state = {
      mounted:true,
      selected: "",
      arrowNumber: 1,
      searchPosts:[],
      shows: [],
      showData: [],
      showName:'',
      alignCenter: true,
      clickWhenDrag: false,
      dragging: true,
      hideArrows: true,
      hideSingleArrow: true,
      wheel: true
    };

  componentDidMount=()=>
  {
    const Url = window.location.hash.split("/");
      let searchData=onShowSearchData(Url[Url.length-1]);   
    searchData.then((res) => {
     
      this.mounted&& this.setState({
        shows: res.data,
        searchPosts: res.data
      });
    });
    
  }
  componentDidUpdate=()=>
  {
    const Url = window.location.hash.split("/");
    let searchData=onShowSearchData(Url[Url.length-1]);   
    searchData.then((res) => {
      this.mounted&&  this.setState({
        shows: res.data,
        searchPosts: res.data,
      });
    });
    
  }
  
  onShowSelect = async (event) => {
    this.props.history.push({
      pathname: `/showdetails/${event}`
 
    });
   };
  componentWillUnmount=()=>
  {
    this.mounted=false
  } 
  routeback = () => {
    this.setState({
      searchFlag: false,
    });
    this.props.history.push({ pathname: "/" });
  };
  render() {
   
    const {
        
        hideArrows,
        hideSingleArrow
      } = this.state;
    const {searchFlag=true,currentPosts,fetchShows,genre}=
    this.props.location?this.props.location.state!==undefined?this.props.location.state:'':this.props;
        const Url = window.location.hash.split("/");
    let searchData=onShowSearchData(Url[Url.length-1]);
   !searchFlag?
   this.menuItems = Menu(currentPosts&&currentPosts.slice(0, currentPosts.length), 
  this.onShowSelect,searchFlag):
   searchData.then((res) => {
  this.menuItems = Menu(res.data.slice(0,res.data.length),this.onShowSelect,true);
  
  }) 
    const menu = this.menuItems;
    return (
      <div>
          {" "}
          {searchFlag ? (
           <nav className="navbar navbar-inverse navbar-expand-md nav">  
<li className="nav-link home-btn" onClick={this.routeback} style={{marginLeft:'40px'}}>
         <i className="fa fa-home"></i>
       </li>
       </nav>
          ) : (
            <h3 className="genre-style flex row flex-no-wrap w-1/2 sm:w-1/2 md:w-1/3 xs:w-1/6 flex flex-col"
            style={{marginLeft:'50px',marginTop:'10px',marginBottom:'0px'}} >
              {" "}
           <b>  {genre} Shows</b>
            </h3>
          )}
          <ScrollMenu
          alignCenter={false}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          data={menu}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          scrollBy={6}
        />
        </div>
    );
  }
}
export default displayShows;
