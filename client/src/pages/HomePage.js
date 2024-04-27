import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/api'; // Import getPosts function from API

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postData = await getPosts();
        setPosts(postData);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Wizard101 Forums</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} style={{ color: '#000' }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;