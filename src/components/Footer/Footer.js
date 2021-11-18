import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 p-4">
      <p className="text-purple-600 font-bold">
        © 2021 edureka <FontAwesomeIcon icon={faExclamation} />
        <span className="hover:text-purple-700">
          <a
            href="https://www.facebook.com/showvro/"
            target="_blank"
            className="ml-2 border-l-2 border-purple-600"
          >
            <span className="ml-2">Showvro</span>
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
