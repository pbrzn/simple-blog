import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from './lib/data.js';
import BlogPostContainer from './components/BlogPostContainer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>Simple Blog App</Head>
      <h1 className={styles.title}>Simple Blog App</h1>
      <BlogPostContainer styles={styles} />
    </div>
  )
}
