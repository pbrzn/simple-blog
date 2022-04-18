import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Link href={{
                    pathname: "/posts/[id]",
                    query: { id: post.id }
                  }}
                  as={`/posts/${post.id}`}
                >
                  <h2>{post.title} by: {post.author}</h2>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BlogPostContainer;
