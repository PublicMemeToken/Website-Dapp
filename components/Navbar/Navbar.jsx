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
  darkTheme,
  rainbowWallet,
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
            
          <Link href="https://docs.publicmemetoken.xyz/" target="_blank" className={styles.link}>
              Docs
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
        
          <div className={styles.navConnect}>
            
            
          <ConnectWallet
        theme={darkTheme({
          accentText: "",
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
          "https://i.ibb.co/5vy5cXF/favicon.png"
        }
      />
      
          </div>
          
        </div>

      </nav>
    </div>
  );
}
