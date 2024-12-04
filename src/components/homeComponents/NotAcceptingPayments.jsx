import React from "react";

const NotAcceptingPayments = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 min-h-screen flex items-center justify-center text-center py-16 px-6 sm:px-8">
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Payment Temporarily Unavailable
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          We are currently not accepting online payments at this moment. Please try again later.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          We are working to get this back up and running. Thank you for your understanding and patience.
        </p>
        <a
          href="./"
          className="inline-block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition duration-300 ease-in-out"
        >
          BACK TO HOMEPAGE
        </a>
      </div>
    </div>
  );
};

export default NotAcceptingPayments;
