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
    <div className="absolute top-0 right-0 p-5 mx-auto mt-2">
      
      <ConnectButton className="py-4 " />
    </div>
  );
};

export default Connect;
