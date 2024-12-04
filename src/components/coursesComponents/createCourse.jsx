import React, { useState } from "react";

const CreateCourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null); // Track the selected video file

  // Function to upload video to Cloudinary and return the video URL
  const uploadVideoToCloudinary = async (videoFile) => {
    if (!videoFile) {
      console.error("No video file selected.");
      throw new Error("No video file selected.");
    }

    const formData = new FormData();
    formData.append("file", videoFile);
    formData.append("upload_preset", "courses-upload"); // Ensure your preset is correct
    formData.append("folder", "academic-course-main"); // Specify the folder name

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfgvocff4/video/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudinaryData = await res.json();
      console.log(cloudinaryData); // Log the response to see if it's correct
      if (!res.ok) {
        throw new Error("Failed to upload video to Cloudinary.");
      }
      const videoUrl = cloudinaryData.secure_url; // Get the URL
      console.log("Video URL:", videoUrl); // Log the URL

      return videoUrl; // Return the URL of the uploaded video
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
      // Upload the video to Cloudinary
      const videoUrl = await uploadVideoToCloudinary(videoFile);

      // Course data object
      const courseData = {
        title,
        description,
        timestamp: Date.now(), // Add a timestamp to track when the course was created
        videoUrl, // Save the video URL from Cloudinary
      };

      // Directly save course data with the video URL to Firebase
      const firebaseRes = await fetch(
        "https://academic-course-main-6bec2-default-rtdb.firebaseio.com/courses.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...courseData,
            videoUrl, // Add the video URL to the course data
          }),
        }
      );

      const firebaseData = await firebaseRes.json(); // Capture the response from Firebase
      if (!firebaseRes.ok) {
        console.error("Firebase error:", firebaseData); // Log the error message from Firebase
        throw new Error("Failed to create course.");
      }

      console.log("Course created successfully:", firebaseData); // Log the success
      alert("Course created successfully!");

      // Clear form fields after submission
      setTitle("");
      setDescription("");
      setVideoFile(null);
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Failed to create course.");
    }
  };

  return (
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
  );
};

export default CreateCourseForm;
