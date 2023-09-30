import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PrivacyModal1 from "../components/ModalView/PrivacyModal1";

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
          <br></br>
         
            
              
              
              
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://www.x.com/publicmemetoken"
                  target="_blank"
                >
                  Public MEME Token 
                </Link>{" "}
                <br></br>is designed to integrate the world of memes and digital art, providing a platform where users can not only engage with their favorite artists but also stake their loyalty NFTs (Non-Fungible Tokens) to earn PMT tokens.

              </p>
              <br></br>
              <br></br>
              <p className={styles.heroSubtitle1}>
                              
                  <b>Loyalty NFTs</b><br></br> are special tokens created by renowned and talented artists who have contributed their exceptional artistry to the PMT ecosystem. These NFTs are not only valuable pieces of digital art but also function as a symbol of loyalty and support for the PMT community.

              </p>
              <br></br>
              <br></br>
              <p className={styles.heroSubtitle1}>
                              
                  <b>Staking NFTs</b><br></br> is an opportunity to earn PMT tokens as a reward.  This incentivizes users to hold onto these unique artworks and participate actively in the PMT ecosystem.The more loyalty NFTs a community member stakes, the greater the potential rewards they can earn.

              </p>
              
              <Image style={{ marginTop:120 }}
              src="/logo.png"
              width={320}
              height={320}
              alt="Home"
              quality={100}
              
            />
            <br></br>
            <br></br>
            <div className={styles.button}>
            
            <PrivacyModal1 />
            
        </div>
        
        <br></br>
              <div className={styles.slider}>
            <div className={styles.slideTrack} style={{ marginTop:90 }}>
        
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
    
        {false && <PrivacyModal1 click={true} />}
 </div>    
  );
};

export default Home;
