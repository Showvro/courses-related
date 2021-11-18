import React from "react";

const Cart = (props) => {
  const { name, img, about, fee, company } = props.details;

  return (
    <div>
      <h3 className="text-2xl my-5 text-purple-600 font-bold">See Details</h3>
      <div className="flex flex-col justify-between mx-auto max-w-sm rounded shadow-lg border-2">
        <div>
          <img className="w-96" src={img} alt="" />
        </div>
        <div className="px-5 text-left font-bold mt-3">
          <h1 className="text-purple-600 text-xl mb-2">{name}</h1>
          <p className="text-gray-700 text-base">{about}</p>
          <p className="text-gray-700 text-base">{fee}</p>
          <p className="text-gray-700 text-base text-purple-600">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
