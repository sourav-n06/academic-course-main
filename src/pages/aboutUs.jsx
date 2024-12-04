import React from "react";
import DynamicHero from "../components/dynamicHero";
import { Award, BookOpen, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <DynamicHero
        title="Who We Are and What We Do"
        description="We are a passionate team dedicated to providing exceptional educational experiences, combining knowledge and technology to create innovative solutions."
        image="https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?cs=srgb&dl=pexels-pixabay-265152.jpg&fm=jpg"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Our Learning Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about transforming lives through accessible,
            high-quality online education that empowers learners to achieve
            their dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Users className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600">
              We believe in democratizing education by providing world-class
              courses accessible to everyone, regardless of background or
              location. Our mission is to bridge the gap between potential and
              professional success through innovative online learning.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="w-12 h-12 text-green-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-600">
              To become the global leader in online education, creating a
              platform where learning knows no boundaries. We aim to equip
              individuals with the skills and knowledge needed to thrive in an
              ever-changing professional landscape.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <Award className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world experience
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <BookOpen className="w-16 h-16 mx-auto text-purple-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">
                Comprehensive Curriculum
              </h3>
              <p className="text-gray-600">
                Courses designed to provide practical, job-ready skills
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <Users className="w-16 h-16 mx-auto text-red-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Community Support</h3>
              <p className="text-gray-600">
                Connect with learners and mentors worldwide
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <Award className="w-16 h-16 mx-auto text-blue-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Certification</h3>
              <p className="text-gray-600">
                Earn recognized certificates to boost your career
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Discover courses that will transform your professional skills and
            open new opportunities.
          </p>
          <Link to="/courses">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Explore Courses
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
