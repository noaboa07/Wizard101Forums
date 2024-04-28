import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, searchPosts } from '../services/api'; // Import getPosts and searchPosts functions from API
import './HomePage.css';


const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postData = await getPosts(sortBy, order); // Call getPosts function with sortBy and order parameters
        setPosts(postData);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };
    fetchPosts();
  }, [sortBy, order]); // Trigger useEffect when sortBy or order changes

  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value); // Update search term state
    try {
      const postData = await searchPosts(e.target.value); // Call searchPosts function with the new search term
      setPosts(postData);
    } catch (error) {
      console.error('Error searching posts:', error.message);
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value); // Update sortBy state
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value); // Update order state
  };

  return (
    <div className="home-page">
      <h2>Wizard101 Forums</h2>
      <div className="sort-section">
        <label>Sort By:</label>
        <select className="sort-select" value={sortBy} onChange={handleSortChange}>
          <option value="created_at">Created Time</option>
          <option value="upvotes">Upvotes Count</option>
        </select>
        <label>Order:</label>
        <select className="sort-select" value={order} onChange={handleOrderChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
      {posts.map((post) => (
  <li key={post.id}>
    <Link to={`/post/${post.id}`} style={{ color: 'white' }}>
      {post.title} (Upvotes: {post.upvotes}, Created At: {new Date(post.created_at).toLocaleString()})
    </Link>
  </li>
))}
</ul>
</div>
  );
};

export default HomePage;