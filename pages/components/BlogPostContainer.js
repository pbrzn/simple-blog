import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

function BlogPostContainer() {
  const [ posts, setPosts ] = useState(null);
  const [ isLoading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetch('../api/posts')
    .then(resp => resp.json())
    .then(data => {
      setLoading(false);
      setPosts(data);
    })
    .catch(error => {
      setLoading(false);
      setError({ message: error })
    })
  });

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (posts) {
    return (
      <div>
        <ul>
          {posts.map(post => (<BlogPost key={post.id} postData={post} />))}
        </ul>
      </div>
    )
  }
}

export default BlogPostContainer;
