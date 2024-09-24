// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-0 md:py-20 bg-gray-900"> {/* Removed top padding for mobile */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-0 flex justify-center mt-0"> {/* Removed padding and margin top for mobile */}
          <img 
            src="./images/about.jpg" 
            alt="About Us" 
            className="rounded-lg shadow-lg w-full h-auto md:h-96 object-cover" // Full width for mobile and height for larger screens
          />
        </div>
        <div className="md:w-1/2 p-4 sm:p-10  flex flex-col justify-center items-center md:items-start text-white"> {/* Center text for mobile */}
          <h2 className="text-6xl font-extrabold mb-6 leading-tight text-center md:text-left">About Us</h2> {/* Centered heading for mobile */}
          <p className="text-gray-300 mb-4 leading-relaxed text-xl text-center md:text-left"> {/* Centered paragraph for mobile */}
            At <span className="font-semibold text-green-400">A-Z Tree Cutting Service</span>, we pride ourselves on delivering top-notch tree care solutions. 
            With years of experience in the industry, our team is dedicated to ensuring the health, safety, and beauty of your trees.
          </p>
          <p className="text-gray-300 leading-relaxed text-xl text-center md:text-left"> {/* Centered paragraph for mobile */}
            Whether you need tree cutting, trimming, or area cleaning, we've got you covered. 
            Our services are tailored to meet the unique needs of each client, ensuring satisfaction and peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
