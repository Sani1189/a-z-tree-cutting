// src/components/Contact.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-32 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-4">A-Z Tree Cutting Service</h3>
            <p className="text-gray-300 leading-relaxed">
              We serve the Kuala Lumpur, Selangor, and Putrajaya regions. 
              If you need tree cutting or trimming services, feel free to contact us.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">WhatsApp:</span> 
                <a href="https://wa.me/60173487624" className="text-white hover:text-green-400 underline ml-2">
                  0173487624
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span> 
                <a href="mailto:atoztreecuttingservice@gmail.com" className="text-white hover:text-blue-400 underline ml-2">
                  atoztreecuttingservice@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/TreeCuttingService.Selangor" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faFacebookF} className="text-3xl" />
              </a>
              <a href="https://www.instagram.com/aztreecutting" className="hover:text-pink-400">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </a>
              <a href="https://wa.me/60173487624" className="hover:text-green-400">
                <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Legal / Address */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-4">Our Address</h3>
            <p className="text-gray-300">
              Kuala Lumpur, Selangor, and Putrajaya
            </p>
            <p className="mt-4 text-gray-400">© 2024 A-Z Tree Cutting Service. All rights reserved.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          Thank you for visiting our website.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
