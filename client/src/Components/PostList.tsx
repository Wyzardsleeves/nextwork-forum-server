import {useState, useEffect} from 'react';
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch posts
    const fetchPosts = async () => {
      // Replace this with your actual API call
      const response = await fetch('/api/topics/:id/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Post 
                title={post.title}
                content={post.content}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;