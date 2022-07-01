import React from "react";
import Link from "next/link";

import { ConnectButton } from "web3uikit";
import Connect from "./Connect";
const NavBar = () => {
  return (
    <>
    
      <div className="relative z-50">
        <header className="text-gray-600 body-font bg-gray-50 dark:bg-gray-900 dark:text-white">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <div className="py-4">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-gray-100">
                  {/* <img
                    className="w-32 m-auto"
                    src="/Memeth.png"
                    alt="logo"
                  /> */}
                  <p className="font-semibold"> Memeth</p>
                
                </a>
              </div>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              {/* <div className="mr-44">
                <SearchBar />
              </div> */}

              <div className="absolut top-0 right-0">
                <Link href="/postNote">
                  <div className="text-gray-white font-semibold text-2xl hover:underline transition-all underline-offset-4 decoration-2 text-lg font-semibold decoration-blue-600 hover:dark:text-gray-300 dark:decoration-blue-300 ">
                    Sell
                  </div>
                </Link>
              </div>
              {/* <div className="absolute top-0 right-0 p-5 mx-auto mt-2">
                <ConnectButton className="py-4 " />
              </div> */}  
              <Connect/>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;