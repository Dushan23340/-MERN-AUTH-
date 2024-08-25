import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-300 shadow-md py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="src/assets/images/logo.png" alt="Logo" className="h-16 w-16" />
        </Link>

        {/* Search Bar with Merged Button */}
<div className="flex items-center mx-6">
  <input
    type="text"
    placeholder="Search..."
    className="px-4 py-2 rounded-l-full border-none focus:ring-2 focus:ring-blue-400 text-gray-700 w-48"
  />
  <button className="bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-600 transition duration-200">
    Search
  </button>
</div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/about" className="text-gray-800 hover:text-gray-600 transition duration-200">
            About Us
          </Link>
          <Link to="/support" className="text-gray-800 hover:text-gray-600 transition duration-200">
            Support
          </Link>
          <Link to="/blog" className="text-gray-800 hover:text-gray-600 transition duration-200">
            Blog
          </Link>
        </nav>
        
        {/* Sign-In Button */}
        <Link to="/sign-in">
          <button className="bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white px-6 py-2 rounded-full ml-4 hover:from-blue-600 hover:to-blue-800 transition duration-200">
            Sign In
          </button>
        </Link>
        
      </div>
    </header>
  );
}
