import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tseaxutslrqjgbqsokoo.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZWF4dXRzbHJxamdicXNva29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNDU0NjYsImV4cCI6MjAyODcyMTQ2Nn0.C-bC-uE7jz6fYMmGQB0HswAnAn7JMnlDu_53fMuBRiM'; // Replace with your Supabase project key

const supabase = createClient(supabaseUrl, supabaseKey);

export const getPosts = async () => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getPost = async postId => {
  const { data, error } = await supabase.from('posts').select('*').eq('id', postId).single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const createPost = async postData => {
  const { data, error } = await supabase.from('posts').insert(postData);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const createComment = async (postId, author, commentData) => {
  const { data, error } = await supabase
    .from('comments')
    .insert([{ ...commentData, postId, author }]);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getPostWithComments = async postId => {
    const postPromise = supabase.from('posts').select('*').eq('id', postId).single();
    const commentsPromise = supabase.from('comments').select('*').eq('postId', postId);
    
    const [postData, commentData] = await Promise.all([postPromise, commentsPromise]);
    
    if (postData.error || commentData.error) {
      throw new Error(postData.error?.message || commentData.error?.message);
    }
    
    return { post: postData.data, comments: commentData.data };
  };