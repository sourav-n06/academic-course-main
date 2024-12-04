import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";

import DynamicHero from "../components/dynamicHero";
import CreateCourseForm from "../components/coursesComponents/createCourseForm";
import GetAllCourses from "../components/coursesComponents/getAllCourses";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all courses when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      const db = getDatabase();
      const coursesRef = ref(db, "courses"); // Reference to the "courses" node

      onValue(
        coursesRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();

            // Convert the object data into an array
            const coursesArray = Object.keys(data).map((id) => ({
              id,
              ...data[id],
            }));

            setCourses(coursesArray); // Set the array to state
          } else {
            setCourses([]); // No courses found
          }

          setLoading(false);
        },
        (error) => {
          console.error("Error fetching courses:", error);
          setLoading(false);
        }
      );
    };

    fetchCourses();
  }, []);

  // Handle course deletion without deleting the video
  const deleteCourse = async (courseId) => {
    try {
      // Delete the course from Firebase
      const res = await fetch(
        `https://academic-course-main-6bec2-default-rtdb.firebaseio.com/courses/${courseId}.json`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete course from Firebase.");
      }

      console.log("Course deleted successfully from Firebase.");
      alert("Course deleted successfully!");
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete course.");
    }
  };

  return (
    <div>
      {/* Dynamic Hero Section */}
      <DynamicHero
        title="Explore Our Courses"
        description="Choose from a wide range of courses designed to help you achieve your learning goals."
        image="https://images.unsplash.com/photo-1554412663-7b99cf315535?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Create Course Form */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Create a New Course</h1>
        <CreateCourseForm />
      </div>

    </div>
  );
};

export default Courses;
