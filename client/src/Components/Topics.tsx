import React, { useEffect, useState } from "react";

const Topics = () => {
  const [topics, setTopics] = useState<string[]>([]);

  useEffect(() => {
    // Simulate an API call to fetch topics
    const fetchTopics = async () => {
      // Replace this with your actual API call
      const response = await fetch('/api/topics');
      const data = await response.json();
      setTopics(data);
    };

    fetchTopics();
  }, []);
  return (
    <div className="topics">
      <h1>Topics</h1>
      <p>Here are some topics to discuss:</p>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;