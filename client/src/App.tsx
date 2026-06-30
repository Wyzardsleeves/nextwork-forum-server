import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

// auth components
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'

// layout components
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'

// page components
import TopicList from './Components/TopicList'
import CreateTopic from './Components/CreateTopic'
import EditTopic from './Components/EditTopic'
import DeleteTopic from './Components/DeleteTopic'
import PostList from './Components/PostList'
import CreatePost from './Components/CreatePost'
import EditPost from './Components/EditPost'
import DeletePost from './Components/DeletePost'


const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL

const App: React.FC = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);

  useEffect(() => {
    // Simulate an API call to check if the user is authorized
    const checkAuthorization = async () => {
      // Replace this with your actual API call
      const response = await fetch(`${VITE_SERVER_URL}/api/check-auth`);
      const data = await response.json();
      setAuthorized(data.authorized);
    };

    checkAuthorization();
  }, []);
  
  useEffect(() => {
    fetch(`${VITE_SERVER_URL}/api/topics`)
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  if (!authorized) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <TopicList />
        </Route>
        <Route path="/topic/:topic_id/create">
          <CreateTopic />
        </Route>
        <Route path="/topic/:topic_id/edit">
          <EditTopic />
        </Route>
        <Route path="/topic/:topic_id/delete">
          <DeleteTopic />
        </Route>
        <Route path="/topic/:topic_id/posts">
          <PostList />
        </Route>
        <Route path="/topic/:topic_id/posts/create">
          <CreatePost />
        </Route>
        <Route path="/topic/:topic_id/posts/:postId/edit">
          <EditPost />
        </Route>
        <Route path="/topic/:topic_id/posts/:postId/delete">
          <DeletePost />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;