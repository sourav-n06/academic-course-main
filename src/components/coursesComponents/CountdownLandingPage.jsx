import React, { useState, useEffect } from "react";

const CountdownLandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set the target date to December 31, 11:59:59 PM of the current year
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`${currentYear}-12-31T23:59:59`);

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval); // Stop the countdown once the target date is reached
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-pink-500 text-white">
      <header className="text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4 animate-fade-down">We Are Working On It</h1>
        <p className="text-lg mb-6 animate-fade-up">
        Thank you for your patience. We're working hard to bring you an amazing experience. Stay tuned!
        </p>
        <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg mb-6 animate-zoom-in">
          <h2 className="text-2xl font-semibold mb-4">Countdown to Launch:</h2>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <span className="text-3xl font-bold block">{timeLeft.days}</span>
              <small>Days</small>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold block">{timeLeft.hours}</span>
              <small>Hours</small>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold block">{timeLeft.minutes}</span>
              <small>Minutes</small>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold block">{timeLeft.seconds}</span>
              <small>Seconds</small>
            </div>
          </div>
        </div>
        <a
          href="./contactUs"
          className="bg-white text-orange-500 font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          Notify Me!
        </a>
      </header>
    </div>
  );
};

export default CountdownLandingPage;
