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
        <div className=" bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
          <NavBar />

          <div className=" flex-screen min-h-screen min-w-screen">
            <p className=" ml-56 pl-72 text-white font-semibold text-4xl mt-36">
              Connect Wallet First
            </p>
            <div className="ml-60 pl-80 mt-12">
              <Image
                src="/threat1.png"
                alt="Doge"
                width="300"
                height="290"
              ></Image>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Minter;
