import React from 'react';
import styles from '../../styles/Home.module.css';

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`)
  const post = await res.json()
  return { props: { post } }
}

function BlogPost({ post }) {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{post.title}</h2>
      <h3>Written By: {post.author}</h3>
      <h4>{post.subHeadline}</h4>
      <p>{post.content}</p>
    </div>
  )
}

export default BlogPost;
