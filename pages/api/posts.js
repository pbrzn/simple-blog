import { getAllPosts } from '../lib/data.js';

export default async function handler(req, res) {
  try {
    const posts = await getAllPosts()
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
