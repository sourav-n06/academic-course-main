import React from "react";
import { Link } from "react-router-dom";

const CourseEnrollment = ({ courseName, courseDescription }) => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 min-h-screen flex justify-center items-center py-16 sm:py-20">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full transition-all transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
        {/* Course Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 animate__animated animate__fadeIn">
          {courseName}
        </h2>

        {/* Course Description */}
        <p className="text-lg text-gray-700 mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">
          {courseDescription}
        </p>

        {/* Terms and Conditions */}
        <div className="animate__animated animate__fadeIn animate__delay-2s mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Terms and Conditions</h3>
          <p className="text-sm text-gray-600">
            By enrolling in this course, you agree to the following terms:
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You will have access to the course content for 12 months.</li>
              <li>Course materials cannot be shared or distributed.</li>
              <li>Refunds are only available within the first 7 days of enrollment.</li>
              <li>By enrolling, you agree to comply with our code of conduct.</li>
              <li>You will not use the course content for commercial purposes.</li>
              <li>The course price is non-negotiable and will not change after purchase.</li>
              <li>Late enrollments will be prorated based on the course start date.</li>
              <li>We reserve the right to change or cancel the course at any time with prior notice.</li>
            </ul>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-start items-center space-x-4 animate__animated animate__fadeIn animate__delay-3s">
          {/* Agree Button */}
          <Link
            to="/pay-now"
            className="bg-green-500 text-white py-1.5 px-4 rounded-md text-sm font-semibold shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Agree
          </Link>

          {/* Decline Button */}
          <Link
            to="/"
            className="bg-red-500 text-white py-1.5 px-4 rounded-md text-sm font-semibold shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Decline
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollment;
