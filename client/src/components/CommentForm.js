import React, { useState } from 'react';
import { createComment } from '../services/api';

const CommentForm = ({ postId }) => {
  const [formData, setFormData] = useState({ text: '', author: '' });

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await createComment(postId, formData);
      // Refresh comments or navigate to the post page to see the new comment
    } catch (error) {
      console.error('Error creating comment:', error.message);
    }
  };

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="text">Comment:</label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Enter your comment"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;