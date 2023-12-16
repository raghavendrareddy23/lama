// Header.js
import React from 'react';
import logo from '../../logo.svg'; // Import your logo image

const Header = () => {
  return (
    <div className="bg-blue-500 h-16 flex justify-between items-center px-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-2" />
        <h1 className="text-white text-lg font-semibold">Your App Name</h1>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19c-1.657 0-3-1.343-3-3V8c0-1.657 1.343-3 3-3s3 1.343 3 3v8c0 1.657-1.343 3-3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M23 19c-1.657 0-3-1.343-3-3V8c0-1.657 1.343-3 3-3s3 1.343 3 3v8c0 1.657-1.343 3-3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
