import Head from 'next/head'
import Image from 'next/image'
import { getAllPosts } from './lib/data.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className={styles.container}>
      <Head>Simple Blog App</Head>
      <h1>Simple Blog App</h1>
      <BlogPostContainer postsData={posts} />
    </div>
  )
}

const BlogPostContainer = props => {
  const { postsData } = props
  return (
    <>
      <ul>
        {postsData.map(post => (<BlogPost key={post.id} postData={post} />))}
      </ul>
    </>
  )
}

const BlogPost = props => {
  const { postData } = props
  return (
    <div>
      <h2>{postData.title}</h2>
      <h3>Written By: {postData.author}</h3>
      <h4>{postData.subHeadline}</h4>
      <p>{postData.content}</p>
    </div>
  )
}
