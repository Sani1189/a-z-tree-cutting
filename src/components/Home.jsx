// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?trees)' }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to A-Z Tree Cutting Service</h1>
        <p className="text-lg">Professional Tree Cutting and Maintenance Services in Kuala Lumpur, Selangor, and Putrajaya.</p>
      </div>
    </section>
  );
};

export default Home;
