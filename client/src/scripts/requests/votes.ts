import {VITE_SERVER_URL} from "../../.env";

const SERVER_URL = VITE_SERVER_URL;

const getVotes = async (postId: string): Promise<number> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/posts/${postId}/votes`);
    if (!response.ok) {
      throw new Error(`Error fetching votes: ${response.statusText}`);
    }
    const data = await response.json();
    return data.votes;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

const createVote = async (postId: string, value: number): Promise<number> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/posts/${postId}/vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });
    if (!response.ok) {
      throw new Error(`Error voting on post: ${response.statusText}`);
    }
    const data = await response.json();
    return data.votes;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

const editVote = async (postId: string, value: number): Promise<number> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/posts/${postId}/vote`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });
    if (!response.ok) {
      throw new Error(`Error editing vote on post: ${response.statusText}`);
    }
    const data = await response.json();
    return data.votes;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

const deleteVote = async (postId: string): Promise<number> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/posts/${postId}/vote`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error deleting vote on post: ${response.statusText}`);
    }
    const data = await response.json();
    return data.votes;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export { getVotes, createVote, editVote, deleteVote };