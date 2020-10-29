import React, { Component } from 'react';
import Posts from '../Components/displayMealsComponent';
import Pagination from '../Components/Pagination';
import axios from 'axios';
import DisplayIngredients from '../Components/displayIngredients';
class DisplayMealsContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showIngredient: false,
      currentPage:1,
      postsPerPage:10,
      posts:[],
      showData:[],
      showMain:true,
      showEpisode:'',
      episodeData:[],castData:[],crewData:[],galleryData:[]
    };
     this.indexOfLastPost='';
     this.indexOfFirstPost='';
    this. currentPosts=[];
  }

  
 
  
  componentDidMount = async () => {
    try {
      const url='http://api.tvmaze.com/shows'
      const { data } = await axios.get(url);
      console.log(data)
      this.setState({ posts: data });
     
    } catch (err) {
      console.log("error", err);
    }
  };
  // Get current posts
  onMealSearch = async (event) => {
    this.setState({ showIngredient: false });
 
    try {
      const url1 =
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + event;
        // let { data } = await axios.get(url1);
        // console.log(data)
      const url='http://api.tvmaze.com/search/shows?q='+event;
       let { data } = await axios.get(url);
       this.setState({ randomMealData: data });
       console.log(this.state.randomMealData)
    } catch (err) {
      console.log("error", err);
    }
  };

  onSearchEnter = (event) => {
    if (event.keyCode === 13) {
      this.setState({ randomMealData: [] });
      this.setState({showSearch:true})
      this.onMealSearch(event.target.value);
    }
  };
  onMealSelect= async(event) => {
  
    const url='http://api.tvmaze.com/shows/'+event.id
    const { data } = await axios.get(url);
       this.setState({ showIngredient: true, showData: data });
  };
  switchCase=async(e,id)=>
  {
      this.setState({showEpisode:e});
      const {data}=await axios.get('http://api.tvmaze.com/shows/'+id+'/episodes')
    this.setState({episodeData:data})
    const data1=await axios.get('http://api.tvmaze.com/shows/'+id+'/cast')
    this.setState({castData:data1.data})
    const data2=await axios.get('http://api.tvmaze.com/shows/'+id+'/crew')
    this.setState({crewData:data2.data})
    const data3=await axios.get('http://api.tvmaze.com/shows/'+id+'/images')
    this.setState({galleryData:data3.data})
     
    
  }
  // Change page
  paginate = (pageNumber) => this.setState({currentPage:pageNumber});
  routeback=()=>{
    this.setState({showIngredient:false})
  }
  render()
  {
    const {postsPerPage,posts}=this.state;
    this.indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    this. indexOfFirstPost = this.indexOfLastPost - this.state.postsPerPage;
    this. currentPosts =this.state. posts.slice(this.indexOfFirstPost, this.indexOfLastPost);
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <input
                id="inputbox"
                placeholder=" Search Shows"
                onKeyUp={(event) => this.onSearchEnter(event)}
              />
     
       {this.state.showIngredient ? (
                  <div>
                    <div class="col-md-7 col-lg-7">
                    <DisplayIngredients
                    mealInfo={this.state.showData}
                    onMealSearch={this.onMealSearch}
                    onMealSelect={this.onMealSelect}
                    showIngredient={this.state.showIngredient}
                    showSearch={this.state.showSearch}
                    switchCase={this.switchCase}
                    showMain={this.state.showMain}
                    showEpisode={this.state.showEpisode}
                    episodeData={this.state.episodeData}
                    castData={this.state.castData}
                    crewData={this.state.crewData}
                    galleryData={this.state.galleryData}
                    routeback={this.routeback}
                  />
                    </div>
                   
                  </div>
                ) : (
                  <div>
                  <Posts posts={this.state.showSearch?this.state.randomMealData:this.currentPosts} 
       onMealSelect={this.onMealSelect}
       showSearch={this.state.showSearch}/>
       
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={this.state.showSearch?this.state.randomMealData.length:posts.length}
        paginate={this.paginate}
      />
      </div>
                )}
    </div>
  );
  }
};

export default DisplayMealsContainer;

