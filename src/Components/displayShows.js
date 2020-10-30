import React from 'react';
import Pagination from './Pagination';

const Posts = ({ posts, onMealSelect,showSearch,rating,gerne,paginate,loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div class="row">
      
          {showSearch?posts&&posts.map(post => (
            <div>
        <img src={post.show.image&&post.show.image.medium} onClick={(e) => onMealSelect(post.show)}/>
              </div>
      )):
      
      posts&&posts.map(post => (
       <div class="col-lg-3">
     <img src={post.image&&post.image.medium} onClick={(e) => onMealSelect(post)}/>
     
     </div>
))
}

    </div>
   

  );
};

export default Posts;
