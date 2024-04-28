import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/api'; // Import getPosts function from API

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postData = await getPosts(sortBy, order);
        setPosts(postData);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };
    fetchPosts();
  }, [sortBy, order]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <h2>Wizard101 Forums</h2>
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="created_at">Created Time</option>
          <option value="upvotes">Upvotes Count</option>
        </select>
        <label>Order:</label>
        <select value={order} onChange={handleOrderChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} style={{ color: '#000' }}>
              {post.title} (Upvotes: {post.upvotes}, Created At: {new Date(post.created_at).toLocaleString()})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;