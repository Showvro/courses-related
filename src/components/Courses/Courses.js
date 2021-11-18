import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";
import HeroSection from "../HeroSection/HeroSection";

const Courses = () => {
  //usingState Function
  const [courses, setCourses] = useState([]);

  //useEffect Function
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="mx-auto w-9/12">
      <div>
        <h1 className="text-2xl text-purple-600 font-bold border-b-4 border-purple-600 my-5 w-2/12 mx-auto">
          All Courses
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {courses.map((course) => (
            <CourseDetails key={course.key} course={course}></CourseDetails>
          ))}
        </div>
        <div className="my-10">
          <NavLink
            to="/home"
            className="bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white text-center py-3 px-4  rounded-full font-bold"
          >
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Courses;
