import React from 'react';
import BlogPost from './BlogPost';

function BlogPostContainer(props) {
  const { postsData } = props;
  
  return (
    <div>
      <ul>
        {postsData.map(post => (<BlogPost key={post.id} postData={post} />))}
      </ul>
    </div>
  )
}

export default BlogPostContainer;
