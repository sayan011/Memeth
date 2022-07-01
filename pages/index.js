import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeMain from "./HomeMain";
import { useMoralis } from "react-moralis";
import Landing from "./Landing";
export default function Home() {

  const{isAuthenticated}=useMoralis()
  return (
    <div className="">
      <Head>
        <title>Memeth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAuthenticated?( <HomeMain />):(
        <div><Landing/></div>
      )}
     
    </div>
  );
}
