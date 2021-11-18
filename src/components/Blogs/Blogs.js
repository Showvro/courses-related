import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faComment,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

//declearFunction for Blogs
const Blogs = () => {
  return (
    <div class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/AngularJS.png"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Angular JS
                </h1>
                <p class="leading-relaxed mb-3 text-justify">
                  HTML is great for declaring static documents, but it falters
                  when we try to use it for declaring dynamic views in
                  web-applications. AngularJS lets you extend HTML vocabulary
                  for your application. The resulting environment is
                  extraordinarily expressive, readable, and quick to develop.
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                    1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVaJ1_r6xIoM4vd0SuHIXaTMe62c78LbV8HT5HjP8cSUaW4Lb_V9Xt0-d1zSHK8J3nEw&usqp=CAU"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  React JS
                </h1>
                <p class="leading-relaxed mb-3 text-justify">
                  React makes it painless to create interactive UIs. Design
                  simple views for each state in your application, and React
                  will efficiently update and render just the right components
                  when your data changes. Declarative views make your code more
                  predictable and easier to debug
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                    1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://miro.medium.com/max/850/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Vue JS
                </h1>
                <p class="leading-relaxed mb-3">
                  Vue.JS est un des frameworks front-end JS les plus populaires,
                  destiné à pour créer les interfaces. Il utilise deux éléments
                  clés : le data binding et le DOM. The Vue Point is the
                  official Vue.js blog on Medium. Expect articles directly from
                  the Vue Core team or Evan You himself about new features.
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                    1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVfd36XWSaoKyNJ_1io04XfQP9096WbzgnZeiQcChrZr9Sfs3kjVmDARfFT9ve85OOa4&usqp=CAU"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  React Router
                </h1>
                <p class="leading-relaxed mb-3 text-justify">
                  React Router is a collection of navigational components that
                  compose declaratively with your application. Whether you want
                  to have bookmarkable URLs for your code. Declarative routing
                  for React. Contribute to remix-run react-router development by
                  creating an account on GitHub.
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                    1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qmAPZ-GxKF1-NDV1D5WIuKzN9JHq4UhHc4xaPasedp3Q_NLc93oTnK5naDetKNEpjq4&usqp=CAU"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  JavaScript
                </h1>
                <p class="leading-relaxed mb-3 text-justify">
                  These are the top JavaScript blogs, recommended by developers
                  for 2021. Learn about React.js, Vue.js, Angular, and both
                  client and server-side JavaScript. These are the top
                  JavaScript blogs, recommended by developers for 2021. Learn
                  about React.js, Vue.js, Angular, and both client and
                  server-side JavaScript.
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                    1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6d1x2nIDdGZ4lU5jm3tM0ML6xvUlMUf702AIOwvxo11wsYeGDr4aQVJ5FXolEi2pNQI&usqp=CAU"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  mongoDB
                </h1>
                <p class="leading-relaxed mb-3 text-justify">
                  We're the creators of MongoDB, the most popular database for
                  modern apps, and MongoDB Atlas, the global cloud database on
                  AWS, Azure, and GCP. We're the creators of MongoDB, the most
                  popular database for modern apps, and MongoDB Atlas, the
                  global cloud database on AWS, Azure, and GCP.
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                    1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
