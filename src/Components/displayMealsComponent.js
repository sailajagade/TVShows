import React from 'react';

const DisplayMealsComponent = ({ posts, onMealSelect,showSearch,loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      
          {showSearch?posts&&posts.map(post => (
        <img src={post.show.image&&post.show.image.medium} onClick={(e) => onMealSelect(post.show)}/>
      )):
      posts&&posts.map(post => (
<img src={post.image&&post.image.medium} onClick={(e) => onMealSelect(post)}/>
))
}
     
    </div>
  );
};

export default DisplayMealsComponent;
