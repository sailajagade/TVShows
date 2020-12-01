import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import {fetchShow} from "../Containers/CommonMethods";
import tv from '../images/TV.jpg'
import "../Css/Shows.css";
// import "../Css/Media.css";


class SearchComponent extends Component {
  constructor(props){
    super(props);
    this.state=
    {
      searchValue:'',
      searchPosts:[],
      showDetails: false,
      shows: [],
      showData: [],
      showTab: "",
      searchFlag: false
    }
  }

  fetchShows = () => {
    let showsAll=fetchShow()
    showsAll.then((res) => {
        this.setState(
          {
            shows: res.data,
            searchFlag: false,
            showDetails: false,
          },
          this.setGenreType
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
 
         
      onShowSearch = async (event) => {
        console.log(event)
        const { value } = event.target;
       this.setState({ showDetails: false ,searchValue:value});
      event.keyCode===13&&
     this.props.history.push({pathname:`/displayShows/${value}`,
     state:
     {
searchFlag:true
       }
     })
   }

 
render(){
  return (
    <div className="nav flex">
      <div className="col-lg-2 mt-3 Tvshows" >
        <b>
          <h1 className=" color" style={{color:'maroon'}}>TV Shows</h1>
        </b>
        {/* <img src={tv} width="100" height="60" alt="no data" /> */}
      </div>
      <div className="col-lg-5 mt-2">
        {/* <input
          id="searchbox"
          placeholder=""
          onKeyUp={(event) =>this.onShowSearch(event)}
        /> */}

<div className="search-box" style={{marginBottom:'20px',marginTop:'10px'}}>
<input className="form-control" id="searchbox" placeholder="" 
onKeyUp={(event) =>this.onShowSearch(event)}/>
<div style={{marginTop:'10px'}}></div>
</div>
      </div>
        </div>
  );
}
};

export default withRouter(SearchComponent);
