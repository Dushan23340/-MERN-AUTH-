import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  const toggleDropdown = (setter) => setter((prev) => !prev);

  return (
    <header className="bg-blue-300 shadow-md py-4 relative z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
        
        {/* Logo and Company Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="src/assets/images/logo.png" alt="BlueWave Logo" className="h-16 w-16 md:h-20 md:w-20" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4778F5] to-[#0056D2] font-serif">
            BLUEWAVE
          </span>
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
          
          {/* Products Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown(setIsProductsDropdownOpen)} 
              className="text-gray-800 hover:text-gray-600 transition duration-200 font-serif font-bold focus:outline-none"
            >
              Products
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute mt-2 bg-gradient-to-r from-[#4778F5] to-[#0056D2] shadow-lg rounded-lg py-2 w-48 z-50 animate-fadeIn">
                <Link to="/products/category1" className="block px-4 py-2 text-white hover:bg-blue-500 transition duration-200 rounded-t-lg">
                  Category 1
                </Link>
                <Link to="/products/category2" className="block px-4 py-2 text-white hover:bg-blue-500 transition duration-200">
                  Category 2
                </Link>
                <Link to="/products/category3" className="block px-4 py-2 text-white hover:bg-blue-500 transition duration-200 rounded-b-lg">
                  Category 3
                </Link>
              </div>
            )}
          </div>

          {/* Career Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown(setIsCareerDropdownOpen)} 
              className="text-gray-800 hover:text-gray-600 transition duration-200 font-serif font-bold focus:outline-none"
            >
              Career
            </button>
            {isCareerDropdownOpen && (
              <div className="absolute mt-2 bg-gradient-to-r from-[#4778F5] to-[#0056D2] shadow-lg rounded-lg py-2 w-48 z-50 animate-fadeIn">
                <Link to="/career/open-positions" className="block px-4 py-2 text-white hover:bg-blue-500 transition duration-200 rounded-t-lg">
                  Open Positions
                </Link>
                <Link to="/career/benefits" className="block px-4 py-2 text-white hover:bg-blue-500 transition duration-200">
                  Benefits
                </Link>
                <Link to="/career/internships" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200 rounded-b-lg">
                  Internships
                </Link>
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown(setIsAboutDropdownOpen)} 
              className="text-gray-800 hover:text-gray-600 transition duration-200 font-serif font-bold focus:outline-none"
            >
              About Us
            </button>
            {isAboutDropdownOpen && (
              <div className="absolute mt-2 bg-gradient-to-r from-[#4778F5] to-[#0056D2] shadow-lg rounded-lg py-2 w-48 z-50 animate-fadeIn">
                <Link to="/about/team" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200 rounded-t-lg">
                  Our Team
                </Link>
                <Link to="/about/mission" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200">
                  Mission
                </Link>
                <Link to="/about/history" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200 rounded-b-lg">
                  Company History
                </Link>
              </div>
            )}
          </div>

          {/* Support Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown(setIsSupportDropdownOpen)} 
              className="text-gray-800 hover:text-gray-600 transition duration-200 font-serif font-bold focus:outline-none"
            >
              Support
            </button>
            {isSupportDropdownOpen && (
              <div className="absolute mt-2 bg-gradient-to-r from-[#4778F5] to-[#0056D2] shadow-lg rounded-lg py-2 w-48 z-50 animate-fadeIn">
                <Link to="/support/faq" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200 rounded-t-lg">
                  FAQ
                </Link>
                <Link to="/support/contact" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200">
                  Contact Us
                </Link>
                <Link to="/support/resources" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200 rounded-b-lg">
                  Resources
                </Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown(setIsBlogDropdownOpen)} 
              className="text-gray-800 hover:text-gray-600 transition duration-200 font-serif font-bold focus:outline-none"
            >
              Blog
            </button>
            {isBlogDropdownOpen && (
              <div className="absolute mt-2 bg-gradient-to-r from-[#4778F5] to-[#0056D2] shadow-lg rounded-lg py-2 w-48 z-50 animate-fadeIn">
                <Link to="/blog/latest-posts" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200 rounded-t-lg">
                  Latest Posts
                </Link>
                <Link to="/blog/tutorials" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200">
                  Tutorials
                </Link>
                <Link to="/blog/community" className="block px-4 py-2 text-white  hover:bg-blue-500 transition duration-200 rounded-b-lg">
                  Community Stories
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Sign-In Button */}
        <Link to="/sign-in">
          <button className="bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white px-6 py-2 rounded-full ml-4 hover:from-blue-600 hover:to-blue-800 transition duration-200 font-serif">
            Sign In
          </button>
        </Link>

      </div>
    </header>
  );
}
