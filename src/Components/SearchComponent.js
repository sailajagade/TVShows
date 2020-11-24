import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import {fetchShow,onShowSearchData,onSelect} from "../Containers/CommonMethods";
import "../Css/Shows.css";
import "../Css/Media.css";


class SearchComponent extends Component {
  constructor(props){
    super(props);
    this.state=
    {
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
  onShowSelect = async (event) => {
    let selectData=onSelect(event);
    selectData.then((res) => {
         this.setState(
           {
             showDetails: true,
             showData: res.data,
             showTab: "Main",
           },
           this.routeToDetails
         );
       })
       .catch((error) => {
         console.log(error);
       });
   };
    onShowSearch = async (event) => {
     this.setState({ showDetails: false });
        try {
          if (event.keyCode === 13) {
         this.setState({ searchFlag: true });
         let searchData=onShowSearchData(event);
         searchData.then((res) => {
           this.setState({
             shows: res.data,
             searchPosts: res.data,
           },this.routeToShows);
         });
          } } catch (err) {
       console.log(err);
     }
   };

  routeToDetails = () => {
    this.props.history.push({
      pathname: "/showdetails",
      state: {
        showData: this.state.showData,
        showTab: this.state.showTab,
        fetchShows: this.fetchShows,
      },
    });
  };
  routeToShows=()=>
    {
      this.props.history.push({pathname:'/displayShows',state:
  {
    currentPosts:this.state.searchPosts,
    shows:this.state.shows,
    genre:"",
    onShowSelect:this.onShowSelect,
    searchFlag:true,
    fetchShows:this.fetchShows
  }})
    }
render(){
  return (
    <div className="nav">
      <div className="col-lg-2 mt-4 marginLeft">
        <b>
          <h1 className=" mt-3 color">TV Shows</h1>
        </b>
      </div>
      <div className="col-lg-5 mt-3">
        <input
          id="searchbox"
          placeholder=""
          onKeyUp={(event) =>this.onShowSearch(event)}
        />
      </div>
        </div>
  );
}
};

export default withRouter(SearchComponent);
