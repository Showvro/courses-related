import React from "react";

const CourseDetails = (props) => {
  const { name, img, company, about, fee } = props.course;

  return (
    <div className="flex flex-col justify-between mx-auto max-w-sm rounded-lg border">
      <div>
        <img className="w-96" src={img} alt="" />
      </div>
      <div className="px-5 text-left font-bold my-3">
        <h1 className="text-purple-600 text-xl mb-2">{name}</h1>
        <p className="text-gray-700 text-base">{about}</p>
        <p className="text-gray-700 text-base">
          Course Fee:{" "}
          <span className="text-purple-600 font-bold">{fee} Only!</span>
        </p>
        <p className="text-gray-700 text-base text-purple-600">{company}</p>
      </div>
      <div className="mb-5">
        <button className="bg-transparent border border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white text-center py-2 px-4 rounded-full font-bold">
          Details
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
