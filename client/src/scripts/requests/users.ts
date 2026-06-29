import {VITE_SERVER_URL} from "../../.env";

const SERVER_URL = VITE_SERVER_URL;

const currentUser = async (): Promise<any | null> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/users/current`);
    if (!response.ok) {
      throw new Error(`Error fetching current user: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const signOutUser = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/users/signout`, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error(`Error signing out user: ${response.statusText}`);
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const signUpUser = async (userData: { username: string; email: string; password: string }): Promise<any | null> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),

    });
    if (!response.ok) {
      throw new Error(`Error signing up user: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const signInUser = async (userData: { email: string; password: string }): Promise<any | null> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/users/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error(`Error signing in user: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Could be used to update the bio, username, etc.
const editUser = async (userId: string, userData: { username: string; bio: string }): Promise<any | null> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error(`Error editing user: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { currentUser, editUser, signInUser, signUpUser, signOutUser }; 