import VITE_SERVER_URL from "../../.env";

const SERVER_URL = VITE_SERVER_URL;

const getPosts = async (
  topicId: string
) => {
  try {
    const response = await fetch(`${SERVER_URL}/api/topics/${topicId}/posts`);
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const createPost = async (
  topicId: string, 
  postData: { 
    title: string,
    content: string 
  }) => {
  try {
    const response = await fetch(`${SERVER_URL}/api/topics/${topicId}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error(`Error creating post: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const editPost = async (
  postId: string, 
  postData: { 
    title: string,
    content: string 
  }) => {
  try {
    const response = await fetch(`${SERVER_URL}/api/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error(`Error editing post: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deletePost = async (
  postId: string
) => {
  try {
    const response = await fetch(`${SERVER_URL}/api/posts/${postId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error deleting post: ${response.statusText}`);
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { getPosts, createPost, editPost, deletePost };