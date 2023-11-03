import { ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  localWallet,
  paperWallet,
  trustWallet,
  frameWallet,
  rainbowWallet  } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import  Footer  from "../components/Footer/Footer"
import Favicon from '../components/Favicon';

// This is the chain your dApp will work on.
const activeChain = "binance";

function MyApp({ Component, pageProps }) {
  return (
    
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        localWallet(),
        trustWallet(),
        frameWallet(),
        rainbowWallet(),
      ]}
      
    >
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={-30}
        showOnShallow={true}
      />
      
       <Head>
        <title>PMT|Public Meme Token</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Public Meme Token is the first of its kind, a unique and innovative collective that builds bridges between publicity and Blockchain. "
        />
        <meta
          name="keywords"
          content="Public Meme Token, Buy BEP20, NFC Marketplace, NFT Auction, Dao "
        />
        <meta charSet="utf-8" />
          <Favicon/>
      </Head>
      
      <Navbar />
      <Footer />
      <Component {...pageProps} />
      
    </ThirdwebProvider>
    
  );
}

export default MyApp;
