import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row mx-auto my-10 border-2 p-5 rounded-lg">
      <img
        className="sm:w-full lg:w-6/12 w-6/12"
        src="https://raw.githubusercontent.com/Showvro/course-img/main/online-couurse.png"
        alt=""
      />
      <div className="sm:w-full lg:w-6/12 flex flex-col justify-around">
        <div>
          <h1 className="md:text-2xl lg:text-4xl text-left text-purple-600 font-bold">
            Find The Most Exiting and Organic Course Online
          </h1>
          <p className="text-left text-justify text-gray-600 my-5">
            One of the best way to do this is to learn from us safly. It's Best
            Platfrom of learning. You can learn and earn from here. Here is the
            future trends for the learner. You can trust us from the core of
            your heart.
          </p>
        </div>
        <div className="mt-3 mb-5">
          <NavLink
            to="/course"
            className="bg-transparent border border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white text-center py-3 px-4  rounded-full font-bold"
          >
            See All
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
