import { Link } from "@mui/material";
import React from "react";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

const Gallery = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-gradient-to-br from-black via-black  to-pink-500">
        <NavBar />
        <div className="p-12">
          <p className="font-bold text-white text-6xl ">Certified Memes</p>
          <p className="text-gray-400 mt-8 text-2xl ">
            Some of the origin's are not seeming quite right?
            <br />
            Report those immediately and earn reward
          </p>
        </div>
        <p></p>
        <div className="grid gap-x-8 gap-y-4 grid-cols-3 p-12 ">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Gallery;
