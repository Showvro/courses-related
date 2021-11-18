import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="mx-auto mt-32 border-4 border-purple-100 w-9/12 p-8 rounded-lg">
        <h1 className="text-purple-500 font-extrabold text-6xl">404</h1>
        <p className="text-black text-3xl my-5">
          The page are you looking for is not found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
