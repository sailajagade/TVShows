import React, { Component } from 'react';
import Posts from '../components/displayShows';
import Pagination from '../components/Pagination';
import axios from 'axios';
import DisplayIngredients from '../components/displayShowDetails';
class showContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sailu:[],
      sailuboolean:false,
      showIngredient: false,
      currentPage:1,
      postsPerPage:8,
      posts:[],
      showData:[],
      showMain:true,
      showEpisode:'',
      episodeData:[],castData:[],crewData:[],galleryData:[],
      rating:'',
      gerne:''
    };
     this.indexOfLastPost='';
     this.indexOfFirstPost='';
    this. currentPosts=[];
  }

  
 
  
  componentDidMount = async () => {
    try {
        console.log(this.currentPosts)
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
      this.setState({currentPage:1})
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
  paginate = (pageNumber) =>{
    this.setState({currentPage:pageNumber})}

  dropDownSelect=(event)=>
  {
// this.setState({gerne:event.target.value});
let gernevalue=document.getElementById('inputbox2').value
   
let ratingvalue=document.getElementById('inputbox3').value
let rating2=[];
  this.state.posts.map(post => (
    Math.floor(post.rating.average)>=ratingvalue?
    rating2.push(post):''))
    this.setState({rating:ratingvalue,sailu:rating2,sailuboolean:true,currentPage:1})
this.thirdmethod(event)
  }
  dropDownSelect1=(event)=>
  {
   let gernevalue=document.getElementById('inputbox2').value
   
   let ratingvalue=document.getElementById('inputbox3').value
   console.log(gernevalue,ratingvalue,this.currentPosts)
   let rating3=[];    
    this.state.posts.map(post => (
  post.genres.includes(gernevalue)?rating3.push(post):''))
    this.setState({rating:event.target.value,sailu:rating3,sailuboolean:true,currentPage:1})
    this.thirdmethod(event);
  //  const value=
// switch(3)
// {
//   case 1: let rating2=[];
//   this.state.posts.map(post => (
//     Math.floor(post.rating.average)>=ratingvalue?
//     rating2.push(post):''))
//     this.setState({rating:ratingvalue,posts:rating2})
//     break;
//     case 2: let rating3=[];    
//     this.state.posts.map(post => (
//   post.genres.includes(gernevalue)?rating2.push(post):''))
//     this.setState({rating:event.target.value,posts:rating3})
//     break;
//     case 3:let rating4=[];
//     this.state.posts.map(post => (
//       Math.floor(post.rating.average)>=ratingvalue
//       &&post.genres.includes(gernevalue)?rating4.push(post):''))
      
//        this.setState({rating:event.target.value,sailu:rating4,sailuboolean:true})
//        console.log(rating4)
//         break;
// }
  }
  thirdmethod=(event)=>
  {
    let rating4=[];
    let gernevalue=document.getElementById('inputbox2').value
   
    let ratingvalue=document.getElementById('inputbox3').value
    this.state.posts.map(post => (
      Math.floor(post.rating.average)>=ratingvalue
      &&post.genres.includes(gernevalue)?rating4.push(post):''))
      if(rating4.length>0)
       this.setState({rating:event.target.value,sailu:rating4,sailuboolean:true})
  }
  render()
  {
    const {postsPerPage,posts,sailuboolean}=this.state;
    this.indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    this. indexOfFirstPost = this.indexOfLastPost - this.state.postsPerPage;
    this. currentPosts =!sailuboolean?this.state.posts.slice(this.indexOfFirstPost, this.indexOfLastPost)
        :this.state.sailu.slice(this.indexOfFirstPost, this.indexOfLastPost);
        this. currentPost22 =this.state.episodeData.slice(this.indexOfFirstPost, this.indexOfLastPost);
        this. currentPost23 =this.state.castData.slice(this.indexOfFirstPost, this.indexOfLastPost);
       this. currentPost24 =this.state.crewData.slice(this.indexOfFirstPost, this.indexOfLastPost);
        this. currentPost25 =this.state.galleryData.slice(this.indexOfFirstPost, this.indexOfLastPost);
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <div>
      <select name="cars" id="inputbox2" onBlur={this.dropDownSelect1}>
<option value="" selected>Genre</option>
    <option value="Drama">Drama</option>
    <option value="Science-Fiction">Science-Fiction</option>
    <option value="Action">Action</option>
    <option value="audi">Audi</option>
  </select>
            </div>
            <div class="col-lg-2 align">
            {/* <label>Rating:</label> */}
              <select name="cars" id="inputbox3" onBlur={this.dropDownSelect}>
<option value="" selected>Rating</option>
    <option value="2">2+</option>
    <option value="3">3+</option>
    <option value="4">4+</option>
    <option value="6">6+</option>
    <option value="7">7+</option>
    <option value="8">8+</option>
  </select>
  </div>
      <input
                id="inputbox"
                placeholder=" Search Shows"
                onKeyUp={(event) => this.onSearchEnter(event)}
              />
     
       {this.state.showIngredient ? (
                  <div>
                    <div class="row">
                    <DisplayIngredients
                    mealInfo={this.state.showData}
                    onMealSearch={this.onMealSearch}
                    onMealSelect={this.onMealSelect}
                    showIngredient={this.state.showIngredient}
                    showSearch={this.state.showSearch}
                    switchCase={this.switchCase}
                    showMain={this.state.showMain}
                    showEpisode={this.state.showEpisode}
                    episodeData={this.currentPost22}
                    episodeLength={this.state.episodeData}
                    castData={this.currentPost23}
                    castLength={this.state.castData}
                    crewData={this.currentPost24}
                    crewLength={this.state.crewData}
                    galleryData={this.currentPost25}
                    galleryLength={this.state.galleryData}
                    paginate={this.paginate}
                    postsPerPage={postsPerPage}
                  />
                
      
                    </div>
                   
                  </div>
                ) : (
                  <div>
                     <Posts posts={this.state.showSearch?this.state.randomMealData:this.currentPosts} 
       onMealSelect={this.onMealSelect}
       showSearch={this.state.showSearch}
       rating={this.state.rating} gerne={this.state.gerne}/>
       
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={this.state.showSearch?this.state.randomMealData.length:this.state.sailuboolean?this.state.sailu.length:posts.length}
        paginate={this.paginate}
      />
                    </div>
                )}
    </div>
  );
  }
};

export default showContainer;

