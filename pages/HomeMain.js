import React from "react";
import { useMoralis, useMoralisFile } from "react-moralis";
import { useState, useEffect } from "react";
import Connect from "../components/Connect";
import Moralis from "moralis";
import { contractABI,contractAddress } from "../utils/contract";
import ethers, { Contract } from "ethers";
import Web3 from "web3"

const tutlink =
  "https://blog.logrocket.com/create-nft-minter-moralis-solidity-next-js/";
const HomeMain = () => {
  // const { isAuthenticated, logout, user } = useMoralis();
  // const userEthAddress = user && user.get("ethAddress");

  // const [nftName, setnftName] = useState("");
  // const [metadataDescription, setmetadataDescription] = useState("");
  // const [nftImage, setnftImage] = useState("");
  // const [nftAddress, setNftAddress] = useState("");
  // const [isminted, setisminted] = useState(false);
  // const [isMinting, setisMinting] = useState(false);
  // const [mintingStatus, setmintingStatus] = useState("");
  // const { saveFile } = useMoralisFile();

  // const uploadImage = async (e) => {
  //   const data = e.target.files[0];
  //   const file = new Moralis.File(data.name, data);
  //   await file.saveIPFS();
  //   console.log(file.ipfs(), file.hash());
  //   return file.ipfs();
  // };
  // const uploadMetadata = async (imageURL) => {
  //   const name = getElementbyId("metadataName").value;
  //   const description = getElementbyId("metadataDescription").value;
  //   const metadata = {
  //     "name": name,
  //     "description": description,
  //    " image": imageURL,
  //   };
  //   const file = new Moralis.File("file.json", {
  //     base64: btoa(JSON.stringify(metadata)),
  //   });
  //   await file.saveIPFS();
  //   console.log(file.ipfs());
  // };

  // const gogo = async () => {
  //   const image = await uploadImage();
  //   await uploadMetadata(image);
  //   console.log(file.ipfs());
  //   console.log("hehe");
  // };

  // const mintNft = async (e) => {};

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   logout();
  // };

  // return (
  //   <>
  //     <div className="bg-slate-800 ">
  //       {isAuthenticated ? (
  //         <div className="">
  //           {/* Display Minting Form */}

  //           <h2 className="hero-title text-style">Mint New NFT</h2>

  //           <div className="form-wrapper">
  //             <form>
  //               <div className="form-group">
  //                 <label htmlFor="metadataName" className="text-white">
  //                   NFT Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   className="form-control"
  //                   id="metadataName"
  //                   placeholder="e.g Apes"
  //                   value={nftName}
  //                   onChange={(e) => setnftName(e.target.value)}
  //                 />
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="nft-image">NFT File</label>
  //                 <input
  //                   type="file"
  //                   onChange={(e) => setnftImage(e.target.files[0])}
  //                   className="form-control"
  //                   id="fileInput"
  //                 />
  //               </div>
  //               <div className="form-group">
  //                 <label htmlFor="metadataDescription" className="text-white">
  //                   NFT Description
  //                 </label>
  //                 <textarea
  //                   type="text"
  //                   className="form-control"
  //                   id="metadataDescription"
  //                   placeholder="Write a short description of your NFT"
  //                   value={metadataDescription}
  //                   onChange={(e) => setmetadataDescription(e.target.value)}
  //                 />
  //               </div>
  //               {/* Mint button */}
  //               <div className="text-white">
  //                 <button type="button" className="mint-btn" onClick={mintNft}>
  //                   {isMinting ? mintingStatus : "Mint NFT"}
  //                 </button>
  //               </div>
  //               <button
  //                 className="text-white bg-blue-600 rounded-lg"
  //                 onClick={(e) => gogo(e)}
  //               >
  //                 GOGO
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="bg-slate-800 h-screen ">
  //           {/* <img
  //                   src="https://w0.peakpx.com/wallpaper/746/806/HD-wallpaper-memes-collage-no-2-cat-awesome-pandabomb-dog-meme.jpg"
  //                   alt="bg"
  //                   className="bg-cover bg-center h-screen w-screen"
  //               />
  //               */}
  //         </div>
  //       )}
  //     </div>
  //     </>
  //   );
  // };

  const { isAuthenticated, logout, user } = useMoralis();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  // const router = useRouter();
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


      //ethers
      // const contractAddress = "0x88267feffdb723d91e4f84910bd583792d6b76a7";
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const contract = new ethers.Contract(
      //   contractAddress,
      //   contractABI,
      //   provider
      // );

      // const response = await contract.methods
      //   .mint(metadataurl)
      //   .send({ from: user.get("ethAddress") });
      // Get token id
     
      // Display alert
      alert(
        // `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
        `here's link https://testnets.opensea.io/assets/${contractAddress}/${tokenId}`
      );
    } catch (err) {
      console.error(err);
      alert("An error occured!");
    }
  };

  // useEffect(() => {
  //   if (!isAuthenticated) router.replace("/");
  // }, [isAuthenticated]);
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            className="border-[1px] p-2 text-lg border-black w-full"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="border-[1px] p-2 text-lg border-black w-full"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input
            type="file"
            className="border-[1px] p-2 text-lg border-black"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="mt-5 w-full p-5 bg-green-700 text-white text-lg rounded-xl animate-pulse"
        >
          Mint now!
        </button>
        <button
          onClick={logout}
          className="mt-5 w-full p-5 bg-red-700 text-white text-lg rounded-xl"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default HomeMain;
