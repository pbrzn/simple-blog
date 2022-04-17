import React from 'react';

function BlogPost(props) {
  const { postData } = props;

  return (
    <div>
      <h2>{postData.title}</h2>
      <h3>Written By: {postData.author}</h3>
      <h4>{postData.subHeadline}</h4>
      <p>{postData.content}</p>
    </div>
  )
}

export default BlogPost;
