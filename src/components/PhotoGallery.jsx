// src/components/PhotoGallery.jsx
import React, { useState } from 'react';

const PhotoGallery = () => {
  const images = Array.from({ length: 20 }, (_, i) => `/images/${i + 10}.jpg`);

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      closeModal();
    }
  };

  return (
    <section id="gallery" className="py-10 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto text-center px-6 lg:px-32">
        <h2 className="text-5xl font-extrabold mb-8 text-gray-800 uppercase tracking-widest relative pb-4 border-b-4 border-gradient-to-r from-green-400 to-blue-500 inline-block">
          Our Work
        </h2>

        <p className="text-lg mb-12 text-gray-600">
          Discover the quality of our work through our recent projects.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Work example ${index + 10}`}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {selectedImage && (
        <div 
          id="modal-background" 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" 
          onClick={handleBackgroundClick}
        >
          <div className="relative max-w-3xl mx-auto">
            <img
              src={selectedImage}
              alt="Selected work"
              className="max-h-[80vh] w-auto rounded-lg shadow-lg transition-opacity duration-300"
            />
            <button 
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg" 
              onClick={closeModal}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
