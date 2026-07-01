import Votes from "./Votes";
interface PostProps {
  content: string;
};

const Post = ({ content }: PostProps) => {
  return (
    <div>
      <section id="user-info">
        <div>{/* Post content */}</div>
        <div>User's name</div>
        <div>@postDate</div>
      </section>
      <section id="post-content">
        <div  className="bg-white p-4 shadow-md">
          <p className="text-gray-600">{content}</p>
        </div>
        <Votes />
        {/* Signature */}
      </section>
    </div>
  );
}

export default Post;