const posts = [
  {
    id: 1,
    title: "First Post",
    subHeadline: "This is the first post.",
    content: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
    author: "Franz Kafka"
  },
  {
    id: 2,
    title: "Second Post",
    subHeadline: "This is the second post.",
    content: "It was the best of times, it was the worst of times",
    author: "Charles Dickens"
  },{
    id: 3,
    title: "Third Post",
    subHeadline: "This is the third post.",
    content: "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
    author: "Jane Austen"
  },
];


export const getAllPosts = () => {
  return posts;
}
