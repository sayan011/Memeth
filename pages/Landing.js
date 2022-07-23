import React from "react";
import Connect from "../components/Connect";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

// bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800
const Landing = () => {
  return (
    <>
      <div className="h-screen   w-screen min-w-screen min-h-10v bg-gradient-to-r from-black via-black  to-pink-500 ">
        <NavBar />
        <div className="flex w">
          <div className="pt-40 pl-36 space-y-10 ">
            <p className="text-white font-semibold text-7xl font-mono">
              Own Your Meme!!
            </p>
            <div>
              <p className="text-gray-300 text-3xl">
                Your Memes & Tweets keep getting Stolen?
              </p>
              <p className="text-gray-300 text-3xl font-mono">
                Get it Certified & Own your Intellectual Property
              </p>
            </div>
            <div className="scale-150 ml-44 pt-6">
              <button className="transition ease-in-out   hover:-translate-y-1 ml-9  scale-150 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <Link href="/mint">
                  <span className="flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <p className="pr-5 font-mono">Certify</p>
                    <div className="transition ease-in-out   hover:-translate-x-1">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </Link>
              </button>
            </div>
          </div>
          {/* <img
            src="/memth.png"
            className="pl-32 ml-9 scale-150 animate-pulse"
          /> */}

         
        </div>
        <div className="pl-40 ml-60  absolute right-9 top-60">
            <Image
              src="/finalf.png"
              alt="Doge"
              width="400"
              height="500"
              className=" "
            ></Image>
          </div>
        <div className="mt-72">
          {" "}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Landing;
