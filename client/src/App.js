import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CreatePostPage from './pages/CreatePostPage'; // Import CreatePostPage component
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/post/:postId" element={<PostPage />} />
          <Route exact path="/create" element={<CreatePostPage />} /> {/* Correctly define route for CreatePostPage */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
