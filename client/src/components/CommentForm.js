import React, { useState } from 'react';
import { createComment } from '../services/api';

const CommentForm = ({ postId, author }) => {
    const [formData, setFormData] = useState({ text: '' });
  
    const handleSubmit = async event => {
      event.preventDefault();
      try {
        await createComment(postId, author, formData);
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
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Enter your comment"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default CommentForm;