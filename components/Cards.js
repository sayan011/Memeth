import React from "react";
import Image from "next/image";
import { Card, Icon } from "semantic-ui-react";
const meme = require("../public/darkmeme.jpg");
const meme1= require("../public/meme1.jpg")
const meme2= require("../public/meme2.jpeg")
const meme4= require("../public/meme4.jpg")
const meme5= require("../public/meme5.jpg")
const meme6= require("../public/meme6.jpeg")
const Cards = () => {
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          {/* <img
            className="p-8 rounded-t-lg"
            src="https://www.pinterest.com/lala20195/dark-humor-mr-lovenstein-humor-slightly-wrong-humo/"
            alt="product image"
          /> */}

          <Image src={meme2} alt="NFT" width={500} height={500} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Fire & Howard
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <p className="text-white font-semibold">Origin:</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Reddit
            </span>
          </div>
          <div className="flex">
            <p className="text-white font-semibold">
              Creator: 0xD63B5...907aAaf
            </p>
            <span className="text-xl font-bold text-gray-900 dark:text-white mt-10"></span>
          </div>
          {/* <div className="flex drop-shadow-md rounded-lg mt-10 ">
            <div className="flex mr-12 ">
              <img
                className="w-28 h-28 rounded-full border-4 border-slate-50 object-cover scale-50"
                src="https://pbs.twimg.com/profile_images/1541020501866213376/RX9wHKqD_400x400.jpg"
              />
            </div>
          </div> */}
          <div className="ml-56 pb-3 scale-150 mt-8 ">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Validate
            </a>
          </div>
        </div>
      </div>
                  {/* new */}
                  <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          {/* <img
            className="p-8 rounded-t-lg"
            src="https://www.pinterest.com/lala20195/dark-humor-mr-lovenstein-humor-slightly-wrong-humo/"
            alt="product image"
          /> */}

          <Image src={meme4} alt="NFT" width={500} height={500} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Sub-Marine
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <p className="text-white font-semibold">Origin:</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Reddit
            </span>
          </div>
          <div className="flex">
            <p className="text-white font-semibold">
              Creator: 0xD63B5...907aAaf
            </p>
            <span className="text-xl font-bold text-gray-900 dark:text-white mt-10"></span>
          </div>
          {/* <div className="flex drop-shadow-md rounded-lg mt-10 ">
            <div className="flex mr-12 ">
              <img
                className="w-28 h-28 rounded-full border-4 border-slate-50 object-cover scale-50"
                src="https://pbs.twimg.com/profile_images/1541020501866213376/RX9wHKqD_400x400.jpg"
              />
            </div>
          </div> */}
          <div className="ml-56 pb-3 scale-150 mt-8 ">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Validate
            </a>
          </div>
        </div>
      </div>
            {/* new */}
            <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          {/* <img
            className="p-8 rounded-t-lg"
            src="https://www.pinterest.com/lala20195/dark-humor-mr-lovenstein-humor-slightly-wrong-humo/"
            alt="product image"
          /> */}

          <Image src={meme5} alt="NFT" width={500} height={500} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Not a Drugdealer
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <p className="text-white font-semibold">Origin:</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Reddit
            </span>
          </div>
          <div className="flex">
            <p className="text-white font-semibold">
              Creator: 0xD63B5...907aAaf
            </p>
            <span className="text-xl font-bold text-gray-900 dark:text-white mt-10"></span>
          </div>
          {/* <div className="flex drop-shadow-md rounded-lg mt-10 ">
            <div className="flex mr-12 ">
              <img
                className="w-28 h-28 rounded-full border-4 border-slate-50 object-cover scale-50"
                src="https://pbs.twimg.com/profile_images/1541020501866213376/RX9wHKqD_400x400.jpg"
              />
            </div>
          </div> */}
          <div className="ml-56 pb-3 scale-150 mt-8 ">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Validate
            </a>
          </div>
        </div>
      </div>

  
            {/* new */}
            <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          {/* <img
            className="p-8 rounded-t-lg"
            src="https://www.pinterest.com/lala20195/dark-humor-mr-lovenstein-humor-slightly-wrong-humo/"
            alt="product image"
          /> */}

          <Image src={meme1} alt="NFT" width={500} height={500} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Anxiety
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <p className="text-white font-semibold">Origin:</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Reddit
            </span>
          </div>
          <div className="flex">
            <p className="text-white font-semibold">
              Creator: 0xD63B5...907aAaf
            </p>
            <span className="text-xl font-bold text-gray-900 dark:text-white mt-10"></span>
          </div>
          {/* <div className="flex drop-shadow-md rounded-lg mt-10 ">
            <div className="flex mr-12 ">
              <img
                className="w-28 h-28 rounded-full border-4 border-slate-50 object-cover scale-50"
                src="https://pbs.twimg.com/profile_images/1541020501866213376/RX9wHKqD_400x400.jpg"
              />
            </div>
          </div> */}
          <div className="ml-56 pb-3 scale-150 mt-8 ">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Validate
            </a>
          </div>
        </div>
      </div>
            {/* new */}
            <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          {/* <img
            className="p-8 rounded-t-lg"
            src="https://www.pinterest.com/lala20195/dark-humor-mr-lovenstein-humor-slightly-wrong-humo/"
            alt="product image"
          /> */}

          <Image src={meme6} alt="NFT" width={500} height={500} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              SmartKid vs mE
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <p className="text-white font-semibold">Origin:</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Reddit
            </span>
          </div>
          <div className="flex">
            <p className="text-white font-semibold">
              Creator: 0xD63B5...907aAaf
            </p>
            <span className="text-xl font-bold text-gray-900 dark:text-white mt-10"></span>
          </div>
          {/* <div className="flex drop-shadow-md rounded-lg mt-10 ">
            <div className="flex mr-12 ">
              <img
                className="w-28 h-28 rounded-full border-4 border-slate-50 object-cover scale-50"
                src="https://pbs.twimg.com/profile_images/1541020501866213376/RX9wHKqD_400x400.jpg"
              />
            </div>
          </div> */}
          <div className="ml-56 pb-3 scale-150 mt-8 ">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Validate
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Cards;
