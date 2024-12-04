// ComingSoon.js
import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-5xl font-bold text-teal-500"> Coming Soon </h1>
        <p className="text-lg mt-4">We're working hard on this page. Stay tuned!</p>
        <p className="mt-2 text-gray-600">Thanks for your patience.</p>
        <div className="mt-4">
          <p className="text-gray-500">In the meantime, feel free to visit our <a href="/" className="text-teal-500">Home Page</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
