import {VITE_SERVER_URL} from "../../.env";

const SERVER_URL = VITE_SERVER_URL;

const getTopics = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/topics`);
    if (!response.ok) {
      throw new Error(`Error fetching topics: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getTopicById = async (topicId: string): Promise<any | null> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/topics/${topicId}`);
    if (!response.ok) {
      throw new Error(`Error fetching topic: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const createTopic = async (topicData: { name: string; description: string }): Promise<any | null> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/topics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(topicData),
    });
    if (!response.ok) {
      throw new Error(`Error creating topic: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const editTopic = async (topicId: string, topicData: { name: string; description: string }): Promise<any | null> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/topics/${topicId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(topicData),
    });
    if (!response.ok) {
      throw new Error(`Error editing topic: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteTopic = async (topicId: string): Promise<boolean> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/topics/${topicId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error deleting topic: ${response.statusText}`);
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { getTopics, getTopicById, createTopic, editTopic, deleteTopic };