import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faUser,
  faAlignJustify,
  faExclamation,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="bg-gray-100">
      <nav className="flex items-center justify-between flex-wrap lg:p-4  w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <NavLink
            to="/home"
            className="text-2xl text-purple-600 font-extrabold pl-4 hover:text-purple-700"
          >
            edureka <FontAwesomeIcon icon={faExclamation} className="mr-1" />
          </NavLink>
        </div>

        <div
          className="w-full flex-grow flex items-center sm:w-auto lg:w-auto lg:block pt-6 lg:pt-0"
          id="nav-content"
        >
          <ul className="list-reset flex justify-end flex-1 items-center font-bold">
            <li>
              <NavLink
                to="/home"
                className="inline-block text-gray-600 hover:text-purple-600 py-2 px-4"
              >
                <span>
                  <FontAwesomeIcon icon={faHome} className="mr-1" />
                </span>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className="inline-block text-gray-600 hover:text-purple-600 py-2 px-4"
              >
                <FontAwesomeIcon icon={faAlignJustify} className="mr-1" />
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="inline-block text-gray-600 hover:text-purple-600 py-2 px-4"
              >
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="inline-block text-gray-600 hover:text-purple-600 py-2 px-4"
              >
                <FontAwesomeIcon icon={faBlog} className="mr-1" />
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
