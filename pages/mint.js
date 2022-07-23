import React from "react";
import HomeMain from "./HomeMain";
import { useMoralis } from "react-moralis";
import Landing from "./Landing";
import NavBar from "../components/NavBar";
import Image from "next/image";
const Minter = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <div>
      {isAuthenticated ? (
        <HomeMain />
      ) : (
        <div className="  bg-gradient-to-r from-black via-black  to-pink-500">
          <NavBar />

          <div className=" flex-screen min-h-screen min-w-screen">
            <div className="ml-60 pl-80 mt-5">
              <Image
                src="/dogegun.jpg"
                alt="threat"
                width="600"
                height="600"
              ></Image>
            </div>
          </div>
          {/* arrow */}
          <div className="ml-60 pl-80 mt-5 absolute right-60 top-0">
              <Image
                src="/arrow.png"
                alt="arrow"
                width="200"
                height="400"
              ></Image>
            </div>


          <div className=" flex-screen min-h-screen min-w-screen">

          </div>
        </div>
      )}
    </div>
  );
};

export default Minter;
