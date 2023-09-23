import React from "react";
import Image from "next/image";
import Link from "next/link";
import {  useAddress, ConnectWallet } from "@thirdweb-dev/react";

//INTERNAL IMPORT
import Style from "./TokenList.module.css";
import images from "../../assets";

const TokenList = ({ tokenDate, setopenTokenBox }) => {
  const address = useAddress();
  
  return (
    <div className={Style.TokenList}>
      <p className={Style.TokenList_close}
        onClick={() => setopenTokenBox(false)}
        >
          <Image src="/close.png" alt="close" width={20} height={20} />
        </p>
        

        <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/" passHref role="button">
             Marketplace
          </Link>
          </div> 
              

        <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/stake" passHref role="button">
             Stake PMT
          </Link>
          </div>
          
          

          <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/BuyARTCC" passHref role="button">
          Buy PMT
          </Link>
          </div> 

          <div className={Style.mainButton2} onClick={() => setopenTokenBox(false)}>
        <Link href="/" passHref role="button">
             DAO Voting 
          </Link>
          <p></p>
          
          

          </div>
          <p></p>
          <div className={Style.mainButton1} onClick={() => setopenTokenBox(false)}>
          <ConnectWallet
        theme={"dark"}
        modalTitle={"Choose your Wallet"}
        
        auth={{ loginOptional: true }}
        switchToActiveChain={true}
        modalSize={"wide"}
      />
          </div>
<div className={Style.mainButton} onClick={() => setopenTokenBox(false)}>
          <p></p>
          
          </div>
          </div>
          
       
          
              
             
            
         
  );  
};

export default TokenList;
