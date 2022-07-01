import React from "react";
import HomeMain from "./HomeMain";
import { useMoralis } from "react-moralis";
import Landing from "./Landing";
import NavBar from "../components/NavBar";
const Minter = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <div>
      {isAuthenticated ? (
        <HomeMain />
      ) : (
        <div className=" bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
          <NavBar />
          <div className=" flexh-screen min-h-screen min-w-screen">
            <p className=" ml-56 pl-72 text-white font-semibold text-4xl mt-36">
              Connect Wallet First
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Minter;
