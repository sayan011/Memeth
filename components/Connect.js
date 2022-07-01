import React from "react";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";
const Connect = () => {
  const { isAuthenticated, logout, user } = useMoralis();
  const userEthAddress = user && user.get("ethAddress");
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div className=" p-5 mx-auto mt-2 scale-90">
      
      <ConnectButton/>
    </div>
  );
};

export default Connect;
