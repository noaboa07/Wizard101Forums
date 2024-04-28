import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost, createComment, updatePost, deletePost } from '../services/api';
import CommentForm from '../components/CommentForm';

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postData = await getPost(postId);
        setPost(postData);
        setComments(postData.comments || []);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPostAndComments();
  }, [postId]);

  const handleUpvote = async () => {
    try {
      const updatedPost = { ...post, upvotes: post.upvotes + 1 };
      await updatePost(postId, updatedPost);
      setPost(updatedPost);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(postId);
      navigate('/'); // Redirect to homepage after deletion
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${postId}`); // Navigate to the edit page
  };

  const handleSubmitComment = async (commentData) => {
    try {
      const newComment = await createComment(postId, commentData);
      setComments([...comments, newComment]);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post" />}
      <p>Upvotes: {post.upvotes}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button> {/* Button to navigate to the edit page */}
      
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>By: {comment.author}</p>
        </div>
      ))}
      
      <CommentForm onSubmit={handleSubmitComment} />
    </div>
  );
};

export default PostPage;