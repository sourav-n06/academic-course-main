import React, { useState, useEffect } from "react";

// Countdown component with animation (optional)
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Set a target date for your "coming soon" launch
    const targetDate = new Date("December 31, 2024 23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("Launched!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg sm:text-xl font-bold text-teal-500 animate-pulse animate-fade-in-up">
      {timeLeft}
    </p>
  );
};

const ComingSoonPage = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center animate-fade-in">
      {/* Animated Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800 animate-gradient-x"></div>
      
      <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto animate-slide-up animate-delay-1 z-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-4 animate-fade-in-up animate-delay-2">
        We Are Working On It
        </h1>
        <p className="text-gray-600 mb-6 animate-fade-in-up animate-delay-3">
          Thank you for your patience. We're working hard to bring you an amazing experience. Stay tuned!
        </p>

        {/* Countdown Timer */}
        <Countdown />

        <div className="mt-6">
          <a
            href="./contactUs"
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-8 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-110 hover:rotate-3 animate-bounce animate-delay-4"
          >
            Notify Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
