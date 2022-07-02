import React from "react";
import Link from "next/link";

import { ConnectButton } from "web3uikit";
import Connect from "./Connect";
const NavBar = () => {
  return (
    <>
      <div className="relative z-50 ">
        <header className="">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <div className="py-4">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-gray-100">
                  {/* <img
                    className="w-32 m-auto"
                    src="/Memeth.png"
                    alt="logo"
                  /> */}
                  <p className="font-semibold text-2xl"> Memeth</p>
                </a>
              </div>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              {/* <div className="mr-44">
                <SearchBar />
              </div> */}
              {/* 
              <div className="absolut top-0 right-0">
                <Link href="/postNote">
                  <div className="text-gray-white font-semibold text-2xl hover:underline transition-all underline-offset-4 decoration-2 text-lg font-semibold decoration-blue-600 hover:dark:text-gray-300 dark:decoration-blue-300 ">
                    Sell
                  </div>
                </Link>
              </div> */}
              {/* <div className="absolute top-0 right-0 p-5 mx-auto mt-2">
                <ConnectButton className="py-4 " />
              </div> */}
              {/* <Connect/> */}
              <nav className=" z-10 absolute top-0 right-0">
                <div className="max-w-5xl px-4 mr-36 ">
                  <div className="flex items-center justify-between h-16">
                    <div className="flex space-x-12 text-white ">
                      <a href="#" className="hover:scale-x-110 hover:underline">
                        Docs
                      </a>
                      <a href="#" className="hover:scale-x-110 hover:underline">
                        About
                      </a>
                      <a href="#" className="hover:scale-x-110 hover:underline">
                        Gallery
                      </a>
                      <a href="#" className="hover:scale-x-110 hover:underline">
                        Contact
                      </a>
                    </div>

                    <ConnectButton className="pl-8 " />
                  </div>
                </div>
              </nav>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
