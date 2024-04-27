import React, { useState } from 'react';
import { createPost } from '../services/api';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createPost({ title, content, image });
      // Optionally, you can redirect or show a success message here
    } catch (error) {
      console.error('Error creating post:', error.message);
      // Optionally, handle error display or logging here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content"></textarea>
      <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;