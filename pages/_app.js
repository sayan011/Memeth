import "../styles/globals.css";
import Layout from "../components/Layout";

import { MoralisProvider } from "react-moralis";

const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

// console.log(APP_ID)
// console.log(SERVER_URL)
export default function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  );
}
