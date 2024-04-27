import React from 'react';

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Wizard101 Forum</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
            <span>Upvotes: {post.upvotes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
