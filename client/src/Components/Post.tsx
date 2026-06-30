import Votes from "./Votes";

const Post = ({ title, content }) => {
  return (
    <div>
      <section id="user-info">
        <div>{/* Post content */}</div>
        <div>User's name</div>
        <div>@postDate</div>
      </section>
      <section id="post-content">
        <div  className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
        </div>
        <Votes />
        {/* Signature */}
      </section>
    </div>
  );
}

export default Post;