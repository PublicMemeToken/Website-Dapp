import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {
  const router = useRouter();
  const Banner9 = (
    <div className={styles.slide} role="button"
    onClick={() => router.push(`https://bscscan.com/`)} >
      <Image src="/bscscan.svg" height="38" width="258" alt="bscscan" />
    </div>
  );
  const Banner6 = (
    <div className={styles.slide1} role="button"
    onClick={() => router.push(`https://www.coinbase.com/de/wallet`)}>
      <Image src="/coinbase.png" height="48" width="208" alt="coinbase" />
    </div>
  ); 
  const Banner2 = (
    <div className={styles.slide2} role="button"
    onClick={() => router.push(`https://www.bnbchain.org/en/`)}>
      <Image src="/binance.svg" height="38" width="208" alt="BinanceSmartChain" />
    </div>
  );
  
  const Banner4 = (
    <div className={styles.slide4} role="button"
    onClick={() => router.push(`https://metamask.io/`)}>
      <Image src="/metamask.png" height="35" width="208" alt="metamask" />
    </div>
  );
  const Banner5 = (
    <div className={styles.slide5} role="button"
    onClick={() => router.push(`https://walletconnect.com/`)}>
      <Image src="/walletconnect.png" height="30" width="208" alt="walletconnect" />
    </div>
  );
  
  const Banner7 = (
    <div className={styles.slide7} role="button"
    onClick={() => router.push(`https://pancakeswap.finance/?chain=bsc`)}>
      <Image src="/Pancakeswap.svg" height="38" width="250" alt="PanecakeSwap" />
    </div>
  ); 
  
  
  return (
    <div className={styles.container}>
      
        
          
          <div className={styles.heroAssetFrame}>
            <Image
              src="/logo1.png"
              width={320}
              height={320}
              alt="Home"
              quality={100}
              
            />
          </div>
          
            
              <h1 className={styles.heroTitle}>
                
                WE ARE THE FUTURE OF 
               
                <br />
                THE MEME MARKET.
              </h1>
              
              
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://www.x.com/publicmemetoken"
                  target="_blank"
                >
                  Public MEME Token 
                </Link>{" "}
                <br></br>is designed to integrate the world of memes and digital art,<br></br> providing a platform where users can not only engage with their favorite artists<br></br> but also stake their loyalty NFTs (Non-Fungible Tokens) to earn PMT tokens.

              </p>
              <p className={styles.heroSubtitle1}>
                              
                  Loyalty NFTs are special tokens created by renowned and talented artists who have contributed their exceptional artistry to the PMT ecosystem. These NFTs are not only valuable pieces of digital art but also function as a symbol of loyalty and support for the PMT community.

              </p>
              
              <div className={styles.slider}>
            <div className={styles.slideTrack}>
        
        {Banner2}
        {Banner4}
        {Banner5}
        {Banner6}
        {Banner7}
        {Banner9}
        {Banner2}
        {Banner4}
        {Banner5}
        {Banner6}
        {Banner7}
        {Banner9}
        
      </div>
      
    </div>
    <Image style={{ paddingBottom: 55 }}
              src="/logo.png"
              width={320}
              height={320}
              alt="Home"
              quality={100}
              
            />
 </div>    
  );
};

export default Home;
