// ErrorPage.js
import React from 'react';

const error = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 text-center">
      <div>
        <h1 className="text-6xl font-bold text-teal-500">404</h1>
        <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="mt-2 text-gray-600">You can go back to the <a href="/" className="text-teal-500">Home Page</a>.</p>
      </div>
    </div>
  );
};

export default error;
