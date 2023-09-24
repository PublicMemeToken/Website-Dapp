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
              src="/logo1.png"
              width={48}
              height={48}
              alt="logo"
            />
          </Link>
          

          <div className={styles.navMiddle}>
            
          <Link href="https://publicmemetoken.gitbook.io/public-meme-token-docs/" target="_blank" className={styles.link}>
              Docs
            </Link>
            
            <Link href="/stakeNFT" className={styles.link}>
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
        theme={"dark"}
        modalTitle={"PMT Wallet"}
        
        auth={{ loginOptional: true }}
        switchToActiveChain={true}
        modalSize={"wide"}
      />
      
          </div>
          
        </div>

      </nav>
    </div>
  );
}
