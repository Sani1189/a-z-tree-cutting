// src/components/Approaches.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLeaf, faSmile, faUsers } from '@fortawesome/free-solid-svg-icons';

const Approaches = () => {
  const approaches = [
    {
      title: 'Safety First',
      description: 'We prioritize safety in all our tree cutting and trimming services, ensuring that our team and your property are protected throughout the process.',
      icon: faShieldAlt,
      iconColor: 'text-red-600',
    },
    {
      title: 'Eco-Friendly Practices',
      description: 'We utilize environmentally friendly methods to minimize our impact on the surrounding ecosystem while providing our services.',
      icon: faLeaf,
      iconColor: 'text-green-600',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Our focus is on delivering high-quality results that exceed customer expectations, with open communication and responsiveness to your needs.',
      icon: faSmile,
      iconColor: 'text-yellow-500', 
    },
    {
      title: 'Expertise and Experience',
      description: 'Our team consists of trained professionals with extensive experience in tree care, ensuring that every job is completed with precision and care.',
      icon: faUsers,
      iconColor: 'text-blue-600',
    },
  ];

  return (
    <section id="approaches" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-6 lg:px-32">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Approaches</h2>
        <p className="text-lg mb-12 text-gray-600">
          At A-Z Tree Cutting Service, we adopt a variety of approaches to ensure the highest quality of service while maintaining a commitment to safety and environmental responsibility.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={approach.icon} className={`text-4xl ${approach.iconColor}`} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{approach.title}</h3>
              <p className="text-gray-700">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approaches;
