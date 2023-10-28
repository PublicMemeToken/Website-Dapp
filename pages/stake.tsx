import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/stake.module.css";

const stake1: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Choose Your NFT Type! </h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake721`)}
        >
         
          
          <h2 className={styles.selectBoxTitle}>  "???? x PMT" NFT</h2>
          <p className={styles.selectBoxDescription}>
             <b>???% APY</b>
          </p>
          <p className={styles.selectBoxDescription1}>
             <b>ERC721</b>
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake1155`)}
        >
          
          
          <h2 className={styles.selectBoxTitle}> "??? x PMT" Loyalty NFTs</h2>
          <p className={styles.selectBoxDescription}>
            <b>???% APY</b>
          </p>
          <p className={styles.selectBoxDescription1}>
             <b>ERC721</b>
          </p>
        </div>
      </div>
      <Image style={{ marginTop:150 }}
              src="/logo.png"
              width={320}
              height={320}
              alt="Home"
              quality={100}
              
            />
    </div>
  );
};

export default stake1;
