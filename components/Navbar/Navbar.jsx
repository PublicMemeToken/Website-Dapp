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
import { Binance } from "@thirdweb-dev/chains";



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
            
          <Link href="https://market.publicmemetoken.xyz/"  className={styles.link}>
              Market
              place
            </Link>
            
            <Link href="/stake" className={styles.link}>
              Stake NFT
            </Link>
            
           
            <Link href="/" className={styles.link}>
              DAO Voting
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
          subtitle: "Where Meme Meets RWA's",
          img: {
            src: "https://i.ibb.co/cbxC2h7/PMT-Frog-Dog.png",
            width: 150,
            height: 150,
          },
        }}
        modalTitleIconUrl={
          "https://i.ibb.co/cbxC2h7/PMT-Frog-Dog.png"
        }
          supportedTokens={{
          
          [Binance.chainId]: [
            {
              address: "0x68Ae2F202799be2008c89e2100257e66F77DA1f3",
              name: "Public Meme Token",
              symbol: "PMT",
              icon: "https://i.ibb.co/9wh8qpy/favicon-apple-180x189.png",
            },
            // ...etc
          ],
        }}
      />
      
          
          
        </div>

      </nav>
    </div>
  );
}
