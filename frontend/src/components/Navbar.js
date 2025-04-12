import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container ml-4 mr-4 mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          className="text-primary font-bold"
          to="/"
        >
          <img
            className="h-12"
            src="/assets/img/logonew3.svg"
            alt="twitter video download"
            loading='lazy'
          />
        </Link>
        <button
          className="text-gray-500 focus:outline-none lg:hidden"
          onClick={toggleNavbar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden lg:flex space-x-6">
          <Link
            className="text-gray-700 hover:text-primary font-bold"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-700 hover:text-primary font-bold"
            to="/about"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col w-4/5 mx-auto">
          <li className="nav-item">
            <Link
              className="block px-3 py-2 text-gray-700 hover:text-primary font-bold"
              to="/"
            >
              Home
            </Link>
            <div className="border-b-2 border-blue-500"></div>
          </li>
          <li className="nav-item">
            <Link
              className="block px-3 py-2 text-gray-700 hover:text-primary font-bold"
              to="/about"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
