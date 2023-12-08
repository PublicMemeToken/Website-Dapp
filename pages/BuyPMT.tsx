import {
    useActiveClaimConditionForWallet,
    useAddress,
    useClaimConditions,
    useClaimerProofs,
    useClaimIneligibilityReasons,
    useContract,
    useContractMetadata,
    useTokenSupply,
    Web3Button,
    
  } from "@thirdweb-dev/react";
  import { BigNumber, utils } from "ethers";
  import { useMemo, useState, useEffect, useReducer } from "react";
  import styles from "../styles/buyerc.module.css";
  import { parseIneligibility } from "../util/parseIneligibility";
  import React from "react";
  import { Line } from 'rc-progress';
  import Image from "next/image";
  import Countdown from "../components/countdown"
  
  const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
   
  
  const BuyPMT = () => {
    const tokenAddress = "0x68Ae2F202799be2008c89e2100257e66F77DA1f3";
    const { contract } = useContract(tokenAddress, "token-drop");
    const address = useAddress();
    const [quantity, setQuantity] = useState(1);
    const { data: contractMetadata } = useContractMetadata(contract);
  
    const claimConditions = useClaimConditions(contract);
    const activeClaimCondition = useActiveClaimConditionForWallet(
      contract,
      address
    );
    const claimerProofs = useClaimerProofs(contract, address || "");
    const claimIneligibilityReasons = useClaimIneligibilityReasons(contract, {
      quantity,
      walletAddress: address || "",
    });
  
    const claimedSupply = useTokenSupply(contract);
  
    const totalAvailableSupply = useMemo(() => {
      try {
        return BigNumber.from(activeClaimCondition.data?.availableSupply || 0);
      } catch {
        return BigNumber.from(1_000_000_000);
      }
    }, [activeClaimCondition.data?.availableSupply]);
  
    const numberClaimed = useMemo(() => {
      return BigNumber.from(claimedSupply.data?.value || 0).toString();
    }, [claimedSupply]);
  
    const numberTotal = useMemo(() => {
      const n = totalAvailableSupply.add(
        BigNumber.from(claimedSupply.data?.value || 0)
      );
      if (n.gte(1_000_000_000)) {
        return "";
      }
      return n.toString();
    }, [totalAvailableSupply, claimedSupply]);
  
    const priceToMint = useMemo(() => {
      if (quantity) {
        const bnPrice = BigNumber.from(
          activeClaimCondition.data?.currencyMetadata.value || 0
        );
        return `${utils.formatUnits(
          bnPrice.mul(quantity).toString(),
          activeClaimCondition.data?.currencyMetadata.decimals || 18
        )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
      }
    }, [
      activeClaimCondition.data?.currencyMetadata.decimals,
      activeClaimCondition.data?.currencyMetadata.symbol,
      activeClaimCondition.data?.currencyMetadata.value,
      quantity,
    ]);
  
    const maxClaimable = useMemo(() => {
      let bnMaxClaimable;
      try {
        bnMaxClaimable = BigNumber.from(
          activeClaimCondition.data?.maxClaimableSupply || 0
        );
      } catch (e) {
        bnMaxClaimable = BigNumber.from(1_000_000_000);
      }
  
      let perTransactionClaimable;
      try {
        perTransactionClaimable = BigNumber.from(
          activeClaimCondition.data?.maxClaimablePerWallet || 0
        );
      } catch (e) {
        perTransactionClaimable = BigNumber.from(1_000_000_000);
      }
  
      if (perTransactionClaimable.lte(bnMaxClaimable)) {
        bnMaxClaimable = perTransactionClaimable;
      }
  
      const snapshotClaimable = claimerProofs.data?.maxClaimable;
  
      if (snapshotClaimable) {
        if (snapshotClaimable === "0") {
          // allowed unlimited for the snapshot
          bnMaxClaimable = BigNumber.from(1_000_000_000);
        } else {
          try {
            bnMaxClaimable = BigNumber.from(snapshotClaimable);
          } catch (e) {
            // fall back to default case
          }
        }
      }
  
      let max;
      if (totalAvailableSupply.lt(bnMaxClaimable)) {
        max = totalAvailableSupply;
      } else {
        max = bnMaxClaimable;
      }
  
      if (max.gte(1_000_000_000)) {
        return 1_000_000_000;
      }
      return max.toNumber();
    }, [
      claimerProofs.data?.maxClaimable,
      totalAvailableSupply,
      activeClaimCondition.data?.maxClaimableSupply,
      activeClaimCondition.data?.maxClaimablePerWallet,
    ]);
  
    const isSoldOut = useMemo(() => {
      try {
        return (
          (activeClaimCondition.isSuccess &&
            BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
              0
            )) ||
          numberClaimed === numberTotal
        );
      } catch (e) {
        return false;
      }
    }, [
      activeClaimCondition.data?.availableSupply,
      activeClaimCondition.isSuccess,
      numberClaimed,
      numberTotal,
    ]);
  
    const canClaim = useMemo(() => {
      return (
        activeClaimCondition.isSuccess &&
        claimIneligibilityReasons.isSuccess &&
        claimIneligibilityReasons.data?.length === 0 &&
        !isSoldOut
      );
    }, [
      activeClaimCondition.isSuccess,
      claimIneligibilityReasons.data?.length,
      claimIneligibilityReasons.isSuccess,
      isSoldOut,
    ]);
  
    const isLoading = useMemo(() => {
      return activeClaimCondition.isLoading || !contract;
    }, [activeClaimCondition.isLoading, contract]);
  
    const buttonLoading = useMemo(
      () => isLoading || claimIneligibilityReasons.isLoading,
      [claimIneligibilityReasons.isLoading, isLoading]
    );
    const buttonText = useMemo(() => {
      if (isSoldOut) {
        return "Sold Out";
      }
  
      if (canClaim) {
        const pricePerToken = BigNumber.from(
          activeClaimCondition.data?.currencyMetadata.value || 0
        );
        if (pricePerToken.eq(0)) {
          return "Mint (Free)";
        }
        return `Buy (${priceToMint})`;
      }
      if (claimIneligibilityReasons.data?.length) {
        return parseIneligibility(claimIneligibilityReasons.data, quantity);
      }
      if (buttonLoading) {
        return "Checking eligibility...";
      }
  
      return "Claiming not available";
    }, [
      isSoldOut,
      canClaim,
      claimIneligibilityReasons.data,
      buttonLoading,
      activeClaimCondition.data?.currencyMetadata.value,
      priceToMint,
      quantity,
    ]);

    
    
    
    return (
      <div >
       <div className={styles.container2}>
        <Image  style={{ margin:25  }}
              src="/phases5.png"
              width={420}
              height={380}
              alt="Phase4"
              quality={100}
              
            />
        </div>
      <div className={styles.container}>
        
        {(claimConditions.data &&
          claimConditions.data.length > 0 &&
          activeClaimCondition.isError) ||
          (activeClaimCondition.data &&
            activeClaimCondition.data.startTime > new Date() && (
              <p>Sell is starting soon. Please check back later.</p>
            ))}
  
        {claimConditions.data?.length === 0 ||
          (claimConditions.data?.every((cc) => cc.maxClaimableSupply === "0") && (
            <p>
              This Sale is not ready to be minted yet. (Please check back later)
            </p>
          ))}
  
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {contractMetadata?.image && (
              
              <img
                src="/logo.png"
                alt={contractMetadata?.name!}
                width={300}
                height={100}
                style={{objectFit: "contain" }}
                
              />
            )}
  
            <h1 className={styles.title}>Public Meme Token </h1>
            <h3 className={styles.title1}>Pre-Sale Phase 5 ends soon! </h3>
            <p className={styles.explain}>
              Pre-sale Phase 5 of 10  {" "}
              
              
              
            </p>
            
            <p className={styles.explain}>
            <span >Sold </span> 0%
              
            </p>
           

            <Line  percent={0} strokeWidth={1} strokeColor="green" className={styles.blink_me}  trailColor="grey" trailWidth={1} />
            
          </>
          
        )}
  
        <hr className={styles.divider} />
  
        <div className={styles.claimGrid}>
          <input
            type="number"
            placeholder="Enter amount to claim"
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value > maxClaimable) {
                setQuantity(maxClaimable);
              } else if (value < 1) {
                setQuantity(1);
              } else {
                setQuantity(value);
              }
            }}
            value={quantity}
            className={`${styles.textInput} ${styles.noGapBottom}`}
          />
          
          <Web3Button 
            
            
            contractAddress={tokenAddress}
            action={(contract) => contract.erc20.claim(quantity)}
            onSuccess={() => alert("Successful buy!")}
            onError={(err) => alert(err)}
          >
            
            {buttonText}
          </Web3Button>
            <div className={styles.txt1}>
          100.000 $PMT MAX per Wallet
          </div>
        </div>
        
            
         
          
      </div>
      <h2 className={styles.container1}>
        <p className={styles.text}>
      If you are one of the first 1000 pre-sale buyers with at least 10,000 $PMT, you will be among the first lucky ones to be rewarded with exclusive LOYALTY NFTs for FREE. Get ready for a truly remarkable statement of ours Appreciation captured!  {" "}
      </p> 
              
              
            </h2>
            <h1 style={{ color:"#fbbe7c"  }}>PHASE 5 ENDS IN</h1>
           <Countdown date={`${year}-12-13T13:00:00`} />
      <div className={styles.dog}>
      
      <Image  style={{ margin:25  }}
              src="/logo.png"
              width={320}
              height={320}
              alt="Home"
              quality={100}
              
            />
            
            </div>
            
            <div >
           
        </div>
            
            
      </div>
      
    );
  };
  
  export default BuyPMT;
