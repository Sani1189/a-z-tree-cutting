import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ sections }) => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full bg-gray-700 text-white shadow-md z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="Tree Logo"
                        className="h-8 md:h-10 lg:h-12 mr-2"
                    />
                    <div className="font-bold">
                        <span className="text-xl md:text-2xl lg:text-3xl">AZ TREE</span>
                        <br />
                        <span className="text-xs md:text-sm lg:text-base fancy-style">
                            Cutting Service
                        </span>
                    </div>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {sections.map((section) => (
                        <li key={section.name}>
                            <Link
                                to={section.name.toLowerCase().replace(' ', '-')}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-sm md:text-base lg:text-lg hover:text-gray-400 transition duration-300"
                            >
                                {section.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Mobile Menu Icon */}
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? (
                        <Bars3Icon className="h-6 w-6" />
                    ) : (
                        <XMarkIcon className="h-6 w-6" />
                    )}
                </div>
            </div>
            {/* Mobile Menu */}
            {nav && (
                <ul className="md:hidden bg-gray-900 text-white">
                    {sections.map((section) => (
                        <li key={section.name} className="p-4 border-t border-gray-700">
                            <Link
                                to={section.name.toLowerCase().replace(' ', '-')}
                                smooth={true}
                                duration={500}
                                onClick={handleClick}
                                className="block text-sm hover:text-gray-400 transition duration-300"
                            >
                                {section.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
