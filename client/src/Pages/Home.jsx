import React from 'react';
import { Link } from 'react-router-dom';

// Hero Section
const HeroSection = () => (
  <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(src/assets/images/background.jpg)' }}>
    <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
    <div className="relative z-10 flex items-center justify-center h-full px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold font-serif">Water Delivery</h1>
        <p className="text-lg md:text-2xl mt-4 font-serif">Welcome to BlueWave Mineral Water, your trusted source for pure, fresh, and healthy water delivery right to your doorstep.</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white font-bold font-serif py-2 px-4 rounded-full hover:from-[#0056D2] hover:to-[#003A99] hover:shadow-lg transition-all duration-300">
            Read More
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold font-serif py-2 px-4 rounded-full">Order Now</button>
        </div>
      </div>
    </div>
  </section>
);

// Services Section
const ServicesSection = () => (
  <section className="relative bg-cover bg-center text-white py-16" style={{ backgroundImage: 'url(src/assets/images/service.jpeg)' }}>
    <div className="flex flex-col items-center justify-center mb-8">
      <img src="src/assets/images/image1.png" alt="Logo" className="h-24 md:h-32 w-28 md:w-36" />
      <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-serif">
        Our Services
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      <div className="p-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-lg shadow-lg">
        <img src="src/assets/images/maintance.png" alt="Maintenance" className="h-28 md:h-36 w-32 md:w-40 mx-auto" />
        <h3 className="text-xl md:text-2xl font-bold pb-4 md:pb-6 font-serif text-black">Maintenance</h3>
        <p className="text-base md:text-lg font-serif">Enjoy great-tasting bottled water delivered direct to your home or office with no hassle. Save time with your requested order delivered to your door by our friendly and knowledgeable Route Sales Representative.</p>
        <button className="mt-4 font-semibold text-white">Read More &gt;</button>
      </div>
      <div className="p-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg">
        <img src="src/assets/images/Delivary.png" alt="Water Delivery" className="h-28 md:h-36 w-32 md:w-40 mx-auto" />
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-black font-serif">Water Delivery</h3>
        <p className="text-base md:text-lg font-serif">Enjoy great-tasting bottled water delivered direct to your home or office with no hassle. Save time with your requested order delivered to your door by our friendly and knowledgeable Route Sales Representative.</p>
        <button className="mt-4 text-white font-semibold">Read More &gt;</button>
      </div>
      <div className="p-6 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg shadow-lg">
        <img src="src/assets/images/quality.png" alt="Quality Check" className="h-28 md:h-36 w-32 md:w-40 mx-auto" />
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-black font-serif">Quality Check</h3>
        <p className="text-base md:text-lg font-serif">Enjoy great-tasting bottled water delivered direct to your home or office with no hassle. Save time with your requested order delivered to your door by our friendly and knowledgeable Route Sales Representative.</p>
        <button className="mt-4 text-white font-semibold">Read More &gt;</button>
      </div>
    </div>
  </section>
);

// Delivery Service Section
const DeliverySection = () => (
  <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center py-16">
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
      <div className="flex-1 flex justify-center">
        <img src="src/assets/images/delivery.png" alt="Delivery Service" className="rounded-full shadow-lg w-48 md:w-64" />
      </div>
      <div className="flex-1 text-left">
        <h2 className="text-3xl md:text-6xl font-semibold mb-8 font-serif">Delivery Service</h2>
        <p className="text-base md:text-lg font-serif mb-8">Our delivery service operates 365 days a year. We will deliver water to your home within 24 hours when you place your first order.</p>
        <ul className="text-base md:text-lg list-disc list-inside font-serif mb-6">
          <li>Free Delivery</li>
          <li>7 Days a week</li>
          <li>8:00 - 22:00</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold py-2 px-4 rounded-full font-serif hover:from-blue-800 hover:to-blue-900">
            Read More
          </button>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2 px-4 rounded-full font-serif hover:from-red-700 hover:to-red-800">
            Order Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

// How We Extract Water Section
const ExtractionSection = () => (
  <section className="bg-white text-center py-16">
    <h2 className="text-xl md:text-2xl font-semibold text-blue-300 font-serif leading-tight">Technology</h2>
    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-600 font-serif leading-tight">How We Extract Water</h2>
    <p className="text-base md:text-lg mb-8 font-serif px-4 md:px-0">Location of our source of water in Padukka comes through a deep tube well 120 feet below the ground penetrating through 2 solid rock beds. This location has been identified as the ground water source in Sri Lanka. The extracted water goes through an extensive 7 filtration stages, careful lab tests, and quality checks before it's bottled and delivered to your hands.</p>
    <div className="flex justify-center">
      <video
        src="/path-to-water-extraction-video.mp4"
        alt="Water Extraction"
        className="rounded-lg shadow-lg w-full max-w-4xl"
        controls
        autoPlay
        loop
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section className="bg-blue-100 text-center py-16">
    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-600 font-serif">About Us</h2>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
      <div className="flex-1 text-left">
        <h3 className="text-xl md:text-3xl font-semibold mb-4 font-serif">Our Mission</h3>
        <p className="text-base md:text-lg font-serif mb-8">At BlueWave, our mission is to provide the highest quality mineral water while ensuring exceptional service. We strive to be the most reliable and trusted water delivery service in the region.</p>
        <h3 className="text-xl md:text-3xl font-semibold mb-4 font-serif">Our Values</h3>
        <p className="text-base md:text-lg font-serif mb-8">We are committed to purity, sustainability, and customer satisfaction. Our values drive us to continuously improve and innovate in our water extraction and delivery processes.</p>
        <Link to="/about">
          <button className="bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white font-bold py-2 px-4 rounded-full font-serif hover:from-[#0056D2] hover:to-[#003A99] transition-all duration-300">
            Learn More
          </button>
        </Link>
      </div>
      <div className="flex-1">
        <img src="src/assets/images/services.jpg" alt="About Us" className="rounded-lg shadow-lg w-full md:w-3/4" />
      </div>
    </div>
  </section>
);

// Recent Posts Section
const RecentPostsSection = () => (
  <section className="bg-gray-200 py-16">
    <h2 className="text-4xl font-semibold mb-8 text-center text-blue-600 font-serif">Recent Posts</h2>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="src/assets/images/post1.jpg" alt="Post 1" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 font-serif">Water Quality Testing</h3>
          <p className="text-lg text-gray-700 font-serif">Learn about the rigorous water quality testing methods we employ to ensure you receive the purest water.</p>
          <Link to="/blog/water-quality-testing">
            <button className="text-blue-500 font-bold mt-4 font-serif">Read More &gt;</button>
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="src/assets/images/post2.jpg" alt="Post 2" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 font-serif">Sustainable Water Practices</h3>
          <p className="text-lg text-gray-700 font-serif">Discover our commitment to sustainable water extraction and delivery practices.</p>
          <Link to="/blog/sustainable-water-practices">
            <button className="text-blue-500 font-bold mt-4 font-serif">Read More &gt;</button>
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="src/assets/images/post3.jpg" alt="Post 3" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 font-serif">Health Benefits of Mineral Water</h3>
          <p className="text-lg text-gray-700 font-serif">Explore the numerous health benefits of drinking natural mineral water.</p>
          <Link to="/blog/health-benefits-of-mineral-water">
            <button className="text-blue-500 font-bold mt-4 font-serif">Read More &gt;</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Homepage = () => (
  <div>
    <HeroSection />
    <ServicesSection />
    <DeliverySection />
    <ExtractionSection />
    <AboutSection />
    <RecentPostsSection />
  </div>
);

export default Homepage;
