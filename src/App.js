// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageCarousel from './components/ImageCarousel';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Approaches from './components/Approaches';
import PhotoGallery from './components/PhotoGallery';
import { FaWhatsapp, FaEnvelope, FaComments, FaTimes } from 'react-icons/fa';

function App() {
  const [showIcons, setShowIcons] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/60173487624', '_blank');
  };

  const handleGmailClick = () => {
    window.location.href = 'mailto:atoztreecuttingservice@gmail.com';
  };

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const sections = [
    { name: 'Home', component: <ImageCarousel /> },
    { name: 'About', component: <About /> },
    { name: 'Approaches', component: <Approaches /> },
    { name: 'Services', component: <Services /> },
    { name: 'Photo Gallery', component: <PhotoGallery /> },
    { name: 'Contact', component: <Contact /> },
  ];

  return (
    <div>
      <Navbar sections={sections} />
      <div className="pt-16">
        {sections.map((section, index) => (
          <div key={index} id={section.name.toLowerCase().replace(' ', '-')}>
            {section.component}
          </div>
        ))}
      </div>

      {/* Contact Icon */}
      <div
        className={`fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform ${showIcons ? 'scale-110' : ''}`}
        onClick={toggleIcons}
      >
        {showIcons ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaComments className="w-6 h-6" />
        )}
      </div>

      {showIcons && (
        <div className="fixed bottom-20 right-5 flex flex-col items-end space-y-3">
          {/* WhatsApp Icon */}
          <div
            className="bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp className="w-6 h-6" />
          </div>

          {/* Gmail Icon */}
          <div
            className="bg-red-500 text-white p-3 rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95"
            onClick={handleGmailClick}
          >
            <FaEnvelope className="w-6 h-6" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
