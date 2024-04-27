import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, createComment } from '../services/api';
import CommentForm from '../components/CommentForm';

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPost(postId);
        setPost(postData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

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