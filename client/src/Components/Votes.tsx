import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Votes = () => {
  const { topic_id, postId } = useParams<{ topic_id: string; postId: string }>();
  const [votes, setVotes] = useState<number>(0);
  
  useEffect(() => {
    // Simulate an API call to fetch votes for the specific post
    const fetchVotes = async () => {
      // Replace this with your actual API call
      const response = await fetch(`/api/topics/${topic_id}/posts/${postId}/votes`);
      const data = await response.json();
      setVotes(data.votes);
    };

    fetchVotes();
  }, [topic_id, postId]);
  return (
    <div>
      
      <p>Votes: {votes}</p>
    </div>
  );
};

export default Votes;