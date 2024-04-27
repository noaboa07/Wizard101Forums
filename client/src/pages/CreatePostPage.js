// CreatePostPage.js
import React, { useState } from 'react';
import { createPost } from '../services/api';// Import createPost function from API

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create post data object
      const postData = {
        title,
        content,
        image,
        // You can add additional fields here if needed
      };
      // Call API function to create post
      await createPost(postData);
      // Reset form fields after successful submission
      setTitle('');
      setContent('');
      setImage('');
      // Optionally, you can redirect to homepage or display a success message
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostPage;