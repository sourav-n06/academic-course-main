import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* New Section: Academia */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-teal-400 mb-2">ACADEMIA</h2>
            <p className="text-gray-300 mb-4">
              A small river named Duden flows by their place and supplies it with the necessary regalia.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="./upcoming" className="text-teal-400 hover:text-white text-2xl">
                <FaFacebookF />
              </a>
              <a href="./upcoming"  className="text-teal-400 hover:text-white text-2xl">
                <FaTwitter />
              </a>
              <a href="./upcoming"  className="text-teal-400 hover:text-white text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Original Footer Content */}
          <div>
            <h3 className="text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-500">About Us</a></li>
              <li><a href="#" className="hover:text-teal-500">Services</a></li>
              <li><a href="#" className="hover:text-teal-500">Courses</a></li>
              <li><a href="#" className="hover:text-teal-500">Blog</a></li>
              <li><a href="#" className="hover:text-teal-500">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-teal-500">Pricing</a></li>
              <li><a href="#" className="hover:text-teal-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-teal-500">Privacy</a></li>
              <li><a href="#" className="hover:text-teal-500">Feedbacks</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-500">Build your Dream Software & Engineering Career</a></li>
              <li><a href="#" className="hover:text-teal-500">Build your Dream Software & Engineering Career</a></li>
              <li><a href="#" className="hover:text-teal-500">Build your Dream Software & Engineering Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Have a Questions?</h3>
            <p className="mb-4">+91 86453 73526</p>
            <p>sweta@gamil.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
