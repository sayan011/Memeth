import React from "react";
import { useMoralis, useMoralisFile } from "react-moralis";
import { useState, useEffect } from "react";
import Connect from "../components/Connect";
import Moralis from "moralis";
import { contractABI, contractAddress } from "../utils/contract";
import ethers, { Contract } from "ethers";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Web3 from "web3";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

const HomeMain = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isAuthenticated, logout, user } = useMoralis();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);

  // const router = useRouter();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "green",
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Attempt to save image to IPFS
      const file1 = new Moralis.File(file.name, file);
      await file1.saveIPFS();
      const file1url = file1.ipfs();
      // Generate metadata and save to IPFS
      const metadata = {
        name,
        description,
        image: file1url,
      };
      const file2 = new Moralis.File(`${name}metadata.json`, {
        base64: Buffer.from(JSON.stringify(metadata)).toString("base64"),
      });
      await file2.saveIPFS();
      const metadataurl = file2.ipfs();
      console.log(metadataurl);
      // Interact with smart contract
      const web3 = new Web3(Web3.givenProvider);

      const contract = new web3.eth.Contract(contractABI, contractAddress);

      const response = await contract.methods
        .mint(metadataurl)
        .send({ from: user.get("ethAddress") });
      // Get token id
      const tokenId = response.events.Transfer.returnValues.tokenId;

      // Display alert
      alert(
        // `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
        `Minted Successfully!! here's link https://testnets.opensea.io/assets/${contractAddress}/${tokenId}`
      );
    } catch (err) {
      console.error(err);
      alert("An error occured!");
    }
  };

  return (
    <>
      <div className="min-h-screen min-w-screen bg-gradient-to-br bg-gradient-to-r from-black via-black  to-pink-500">
        <NavBar />
        <div className="flex  h-screen pt-32 justify-center ">
          <form onSubmit={onSubmit}>
            <div className="">
              <p className="text-4xl font-bold text-white pb-11">
                Mint your Meme/Joke/Tweet!!
              </p>
              <input
                type="text"
                className=" w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-white
            focus:text-white
            bg-transparent
            border border-solid 
            rounded
            transition
            ease-in-out
            m-0
          focus:border-blue-600 focus:outline-none"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="        w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-white
            focus:text-white
            bg-transparent bg-clip-padding
            border border-solid 
            rounded
            transition
            ease-in-out
            m-0
          focus:border-blue-600 focus:outline-none"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-3 text-white ">
              <input
                type="file"
                className="border-[1px] p-2 text-lg border-black "
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            {/* <button
            type="submit"
            className="mt-5 w-full p-5 text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-2xl"
          >
            <p className="font-semibold">Mint</p>
          </button> */}
            <button
              type="submit"
              className="scale-150 ml-56 mt-8  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Mint
              </span>
            </button>
            {/* <button
          type="submit"
          className="mt-5 w-full p-5 text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-2xl"
        >
          <p className="font-semibold">Mint as Soul-Bound-Token</p>
        </button> */}
            {/* <button
          onClick={logout}
          className="mt-5 w-full p-5 bg-red-700 text-white text-lg rounded-xl"
        >
          Logout
        </button> */}
          </form>
        </div>
      </div>
      {/* <div className="absolute bottom-0 min-h-screen">
        <Footer />
      </div> */}
    </>
  );
};

export default HomeMain;
