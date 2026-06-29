import { useState, useEffect } from 'react'
import './App.css'

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL

const App: React.FC = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch(`${VITE_SERVER_URL}/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div>
      <h1>Vite + Express Full Stack App</h1>
      <p>{message}</p>
    </div>
  );
}
export default App;