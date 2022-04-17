import Head from 'next/head'
import Image from 'next/image'
import { getAllPosts } from './lib/data.js'
import BlogPostContainer from './components/BlogPostContainer'
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
