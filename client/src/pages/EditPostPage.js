import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost, updatePost } from '../services/api';

const EditPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPost(postId);
        setPost(postData);
        setFormData({
          title: postData.title,
          content: postData.content,
          image: postData.image || '',
        });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(postId, formData);
      navigate(`/post/${postId}`); // Redirect to post page after update
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image Link:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPostPage;