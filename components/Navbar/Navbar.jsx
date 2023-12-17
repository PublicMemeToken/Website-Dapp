import { 
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  smartWallet,
  localWallet,
  paperWallet,
  trustWallet,
  zerionWallet,
  bloctoWallet,
  magicLink,
  frameWallet,
  rainbowWallet,
  darkTheme,
  phantomWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";



export function Navbar() {
  const address = useAddress();

  return (
    
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="logo"
            />
          </Link>
          

          <div className={styles.navMiddle}>
            
          <Link href="/" target="_blank" className={styles.link}>
              Market
              place
            </Link>
            
            <Link href="/stake" className={styles.link}>
              Stake NFT
            </Link>
            
           
            <Link href="/BuyPMT" className={styles.link}>
              Buy PMT
            </Link>
          
          </div>
          
        </div>

        <div className={styles.navRight}>
        
          
            
            
        <ConnectWallet
        theme={({
          accentText: "#ffffff",
          modalBg: "#4B2D0DDB",
          dropdownBg: "#4B2D0DDB",
          borderColor: "#ffcc94",
          separatorLine: "#ffcc94",
        })}
        modalTitle={"PMT WALLET"}
        modalSize={"wide"}
        welcomeScreen={{
          title: "Public Meme Token | $PMT",
          img: {
            src: "https://i.ibb.co/cbxC2h7/PMT-Frog-Dog.png",
            width: 150,
            height: 150,
          },
        }}
        modalTitleIconUrl={
          "https://i.ibb.co/cbxC2h7/PMT-Frog-Dog.png"
        }
      />
      
          
          
        </div>

      </nav>
    </div>
  );
}
