import React from "react";

const About = () => {
  return (
    <div className="text-gray-600 body-font">
      <h1 className="mt-16 text-purple-600 font-bold text-3xl border-b-4 w-3/12 mx-auto border-purple-600">
        About Me
      </h1>
      <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded lg:ml-24"
            alt="hero"
            src="https://raw.githubusercontent.com/Showvro/course-img/main/Shuvro.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-start">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-purple-600 font-bold lg:w-6/12 mx-auto">
            Showvro Roy
          </h1>
          <p className="text-gray-600 font-bold my-3 lg:w-6/12 mx-auto">
            Web Developer | Freelancer | Traveler
          </p>
          <p className="mb-8 leading-relaxed text-gray-600 text-justify text-center lg:w-6/12 mx-auto">
            I'm Showvro Kumar Roy. I'm curently preparing as a University
            Student. I'm a Learner. I love to travel, love to eat, love to
            Coding and for sure, love to being so happy with whatever I have. I
            heard about freelanching sector like Grapics Design, SEO Marketing,
            Video Editing or Web Development more than 6 years ago. Till that
            time I'm curious about learning about any kind of freelanching
            sector. And finaly I learn Web Development form a organaization
            called Programing Hero. And till now, I love to code and I am
            learning everyday from reading article or watching videos from
            youtube. Thank You.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
