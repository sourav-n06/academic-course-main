import { useState } from "react";
import {
  FaBrain,
  FaBullhorn,
  FaChalkboardTeacher,
  FaCloud,
  FaImage,
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaPython,
  FaPlayCircle,
  FaTimes,
  FaTrash
} from "react-icons/fa";

const GetAllCourses = ({ courses, onDeleteCourse }) => {
  const [fullScreenVideo, setFullScreenVideo] = useState(null);

  const openFullScreenVideo = (videoUrl) => {
    setFullScreenVideo(videoUrl);
  };

  const closeFullScreenVideo = () => {
    setFullScreenVideo(null);
  };

  return (
    <div className="bg-gray-50 py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Full Screen Video Modal */}
      {fullScreenVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeFullScreenVideo} 
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              <FaTimes />
            </button>
            <video 
              src={fullScreenVideo} 
              controls 
              autoPlay 
              className="w-full h-auto max-h-[90vh]"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Courses</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses && courses?.map((course, index) => (
            <div
              key={course.id || index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative group"
            >
              {/* Delete Button */}
              {onDeleteCourse && (
                <button 
                  onClick={() => onDeleteCourse(course.id)}
                  className="absolute top-2 right-2 z-20 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <FaTrash className="text-sm" />
                </button>
              )}

              {/* Play Button Overlay */}
              <div 
                onClick={() => openFullScreenVideo(course.videoUrl)}
                className="absolute inset-0 z-10 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center cursor-pointer transition-all duration-300"
              >
                <FaPlayCircle 
                  className="text-white opacity-0 group-hover:opacity-100 text-5xl transition-opacity duration-300" 
                />
              </div>

              {/* Course Content */}
              <div className="px-6 py-4 flex flex-col justify-between flex-1">
                {/* Title and Icon */}
                <div className="flex items-center">
                  <div className="text-teal-500 text-3xl mr-3">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {course.title}
                  </h3>
                </div>
                <p className="mt-2 text-gray-500">by {course.instructor}</p>
                <div className="flex items-center mt-4">
                  <svg
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-gray-500">
                    {course.rating}
                  </span>
                </div>
                <div className="flex flex-col mt-4 space-y-2">
                  <p className="text-sm text-gray-500">
                    {course.lectures} lectures ({course.duration} Hrs) 
                  </p>
                  <p className="text-lg font-semibold text-teal-500">
                    {course.price} All Courses / ${course.perMonth} Month
                  </p>
                </div>
                <a
                  href="./upcoming"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mt-4"
                >
                  Enroll Now!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default GetAllCourses