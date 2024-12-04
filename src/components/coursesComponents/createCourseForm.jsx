import React, { useState, useEffect } from "react";
import GetAllCourses from "./getAllCourses"; // Assuming this component handles displaying all courses

const CreateCourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor]= useState("")
  const [rating, setRating] = useState(0.0);
  const [lectures, setLectures] = useState(0);
  const [duration, setDuration] = useState("");
  const [perMonth, setPerMonth] = useState("");
  const [price, setPrice] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [courses, setCourses] = useState([]);

  // Fetch courses from Firebase
  const fetchCourses = async () => {
    try {
      const res = await fetch(
        "https://academic-course-main-6bec2-default-rtdb.firebaseio.com/courses.json"
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Failed to fetch courses.");
      }

      const coursesArray = [];
      for (const key in data) {
        coursesArray.push({ id: key, ...data[key] });
      }
      setCourses(coursesArray); // Set courses data to state
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses(); // Fetch courses when the component is mounted
  }, []);

  const uploadVideoToCloudinary = async (videoFile) => {
    if (!videoFile) {
      console.error("No video file selected.");
      throw new Error("No video file selected.");
    }

    const formData = new FormData();
    formData.append("file", videoFile);
    formData.append("upload_preset", "courses-upload");
    formData.append("folder", "academic-course-main");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dfgvocff4/video/upload", {
        method: "POST",
        body: formData,
      });

      const cloudinaryData = await res.json();
      if (!res.ok) {
        throw new Error("Failed to upload video to Cloudinary.");
      }

      const videoUrl = cloudinaryData.secure_url;
      const publicId = cloudinaryData.public_id;

      return { videoUrl, publicId };
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Failed to upload video.");
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !videoFile) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const { videoUrl, publicId } = await uploadVideoToCloudinary(videoFile);

      const courseData = {
        title,
        description,
        instructor,
        rating,
        lectures,
        duration,
        perMonth,
        price,
        videoUrl,
        publicId,
        timestamp: Date.now(),
      };

      const firebaseRes = await fetch(
        "https://academic-course-main-6bec2-default-rtdb.firebaseio.com/courses.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(courseData),
        }
      );

      const firebaseData = await firebaseRes.json();
      if (!firebaseRes.ok) {
        console.error("Firebase error:", firebaseData);
        throw new Error("Failed to create course.");
      }

      alert("Course created successfully!");
      setTitle("");
      setDescription("");
      setInstructor("")
      setRating();
      setLectures();
      setDuration("");
      setPerMonth("");
      setPrice("");
      setVideoFile(null);
      fetchCourses(); // Fetch the updated courses list
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Failed to create course.");
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      const res = await fetch(
        `https://academic-course-main-6bec2-default-rtdb.firebaseio.com/courses/${courseId}.json`,
        {
          method: 'DELETE',
        }
      );
  
      if (!res.ok) {
        throw new Error('Failed to delete course');
      }
  
      // After successful deletion, fetch the updated courses list
      fetchCourses();
      alert('Course deleted successfully!');
    } catch (error) {
      console.error('Error deleting course:', error);
      alert('Failed to delete course.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-gray-600 font-bold">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            placeholder="Enter course title"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-bold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            placeholder="Enter course description"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-bold">instructor</label>
          <textarea
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            placeholder="Enter course description"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-bold">Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            step="0.1"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            placeholder="Enter rating (1 to 5)"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-bold">Number of Lectures</label>
          <input
            type="number"
            value={lectures}
            onChange={(e) => setLectures(e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            placeholder="Enter number of lectures"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-bold">Duration (Hr)</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            placeholder="Enter course duration"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-bold">Per Month (IN DOLLAR)</label>
          <input
            type="text"
            value={perMonth}
            onChange={(e) => setPerMonth(e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            placeholder="Enter course duration"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-bold">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            placeholder="Enter course price"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-bold">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl rounded-lg transition duration-300"
        >
          Create Course
        </button>
      </form>

      <GetAllCourses courses={courses} onDeleteCourse={deleteCourse} />
      </>
  );
};

export default CreateCourseForm;
