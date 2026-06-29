import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <section className="text-white font-bold text-xl left">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Nextwork Forum Logo" className="h-8 w-8" />
            <Link to="/discussion" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/news" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</Link>
          </div>
        </section>
        <section className="flex space-x-4 right">
          <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;