import { getAllPosts } from '../../lib/data.js';

export default async function handler(req, res) {
  try {
    const posts = await getAllPosts()
    res.status(200).json(posts.find(post => post.id === parseInt(req.query.id, 10)));
  } catch (error) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
