import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.content}</p>
      <span>By: {comment.author}</span>
    </div>
  );
};

export default Comment;