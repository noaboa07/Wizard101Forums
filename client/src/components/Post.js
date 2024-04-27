import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <img src={post.image} alt="Post" />
      <span>Upvotes: {post.upvotes}</span>
    </div>
  );
};

export default Post;