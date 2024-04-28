import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tseaxutslrqjgbqsokoo.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZWF4dXRzbHJxamdicXNva29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNDU0NjYsImV4cCI6MjAyODcyMTQ2Nn0.C-bC-uE7jz6fYMmGQB0HswAnAn7JMnlDu_53fMuBRiM'; // Replace with your Supabase project key

const supabase = createClient(supabaseUrl, supabaseKey);

export const getPosts = async (sortBy = 'created_at', order = 'desc') => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order(sortBy, { ascending: order === 'asc', descending: order === 'desc' });

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
  // Add initialization for upvotes and created_at fields
  const postDataWithDefaults = {
    ...postData,
    upvotes: 0,
    created_at: new Date().toISOString() // Set current time
  };

  const { data, error } = await supabase.from('posts').insert(postDataWithDefaults);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const updatePost = async (postId, updatedData) => {
  try {
    const { data, error } = await supabase
      .from('posts')
      .update(updatedData)
      .eq('id', postId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deletePost = async postId => {
  try {
    // Delete comments associated with the post
    const { error: commentError } = await supabase
      .from('comments')
      .delete()
      .eq('postId', postId);

    if (commentError) {
      throw new Error(commentError.message);
    }

    // Delete the post
    const { error: postError } = await supabase
      .from('posts')
      .delete()
      .eq('id', postId);

    if (postError) {
      throw new Error(postError.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createComment = async (postId, commentData) => {
  const { data, error } = await supabase
    .from('comments')
    .insert([{ ...commentData, postId }]);
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

  export const searchPosts = async (title) => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .ilike('title', `%${title}%`);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  