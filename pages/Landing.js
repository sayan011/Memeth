import React from "react";
import Connect from "../components/Connect";
import NavBar from "../components/NavBar";
import Link from "next/link";
const Landing = () => {
  return (
    <>
      <div className="">
        <div className="h-screen min-w-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
          <NavBar />
          <div className="pt-28 pl-36 space-y-10">
            <p className="text-white font-semibold text-5xl ">
              OWN YOUR MEME!!
            </p>
            <div>
              <p className="text-gray-300 text-xl">
                Your Memes/Jokes/Tweets keep getting Stolen?
              </p>
              <p className="text-gray-300 text-xl">
                Get it Certified & OWN your Intellectual Property
              </p>
            </div>

            <button class="transition ease-in-out   hover:-translate-y-1 ml-9  scale-150 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <a href="/Minter">
                <span class="flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <p className="pr-5">Certify</p>
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
