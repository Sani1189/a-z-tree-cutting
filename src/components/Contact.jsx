import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-32 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-4">A-Z Tree Cutting Service</h3>
            <p className="text-gray-300 leading-relaxed">
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
                  +60 17‑348 7624
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

          {/* Address Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-4">Our Address</h3>
            <p className="text-gray-300">
              Jalan TBK 1/10, Taman Bukit Kinrara, 47100 Puchong, Selangor
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-5">
          <h3 className="text-3xl font-bold text-white mb-6">Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31809.192702882374!2d101.63465364933089!3d3.04681234558382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d4f8f8fce5f%3A0x52149b0e8a8d6e10!2sJalan%20TBK%201%2F10%2C%20Taman%20Bukit%20Kinrara%2C%2047100%20Puchong%2C%20Selangor!5e0!3m2!1sen!2smy!4v1695731831949!5m2!1sen!2smy"
            width="100%"
            height="400"
            title="A-Z Tree Cutting Service Location" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © 2024 A-Z Tree Cutting Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
