import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PrivacyModal1 from "../components/ModalView/PrivacyModal1";
import Countdown from "../components/countdown"

const Home: NextPage = () => {
  const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 24
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
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
      <Image src="/bsc.png" height="38" width="208" alt="BinanceSmartChain" />
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

  const Banner1 = (
    <div className={styles.slide7} role="button"
    onClick={() => router.push(`https://www.safepal.com/`)}>
      <Image src="/SFP.svg" height="45" width="200" alt="SafePal" />
    </div>
  ); 

  const Banner3 = (
    <div className={styles.slide3} role="button"
    onClick={() => router.push(`https://www.instagram.com/rocketbyz/`)}>
      <Image src="/Rocketbyz.png" height="40" width="200" alt="Rocketbyz" />
    </div>
  ); 
  
  const Banner7 = (
    <div className={styles.slide7} role="button"
    onClick={() => router.push(`https://pancakeswap.finance/?chain=bsc`)}>
      <Image src="/Pancakeswap.svg" height="38" width="250" alt="PanecakeSwap" />
    </div>
  ); 

  const Banner8 = (
    <div className={styles.slide} role="button"
    onClick={() => router.push(`https://docs.pinksale.finance/`)}>
      <Image src="/pinksale.png" height="50" width="250" alt="Pinksale" />
    </div>
  );
  
  
  return (
    <div className={styles.container}>
      
        
          
          <div className={styles.heroAssetFrame}style={{ marginTop:35 }}>
            <Image
              src="/text.png"
              width={300}
              height={100}
              alt="Home"
              quality={100}
              
            />
            
          </div>
          
          <div className={styles.heroAssetFrame}style={{ marginTop:-15 }}>
            <Image
              src="/back1.png"
              width={360}
              height={360}
              alt="Home"
              quality={100}
              
            />
            
          </div>
          <div className={styles.heroAssetFrame}style={{ marginTop:-15 }}>
            <Image
              src="/text2.png"
              width={340}
              height={120}
              alt="Home"
              quality={100}
              
            />
            
          </div>
          
             
              
              <Image style={{ marginTop:15 }}
              src="/pmt_big.png"
              width={320}
              height={320}
              alt="Home"
              quality={100}
              
            />
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.button1} 
    onClick={() => router.push(`https://whitepaper.publicmemetoken.xyz/`)} >
      White Paper
    </div>
            
            <br></br>
            <div className={styles.button}>
            
            <PrivacyModal1 />
            
        </div>
        
        <br></br>
        <br></br>
        
        <br></br>
        <br></br>
              <div className={styles.slider}>
            <div className={styles.slideTrack} style={{ marginTop:90 }}>
        {Banner1}
        {Banner2}
        {Banner3}
        {Banner4}
        {Banner5}
        {Banner6}
        {Banner7}
        {Banner8}
        {Banner9}
        {Banner1}
        {Banner2}
        {Banner3}
        {Banner4}
        {Banner5}
        {Banner6}
        {Banner7}
        {Banner8}
        {Banner9}
        
      </div>
      
    </div>
    
        {false && <PrivacyModal1 click={true} />}
 </div>    
  );
};

export default Home;
