import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
  } from "@thirdweb-dev/react";
  import type { FC } from "react";
  import {
    editionDropContractAddress,
    stakingContractAddress,
  } from "../const/contractAddresses1";
  import styles from "../styles/stakeNFT.module.css";
  
  interface NFTCardProps {
    tokenId: number;
  }
  
  const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
    const { contract } = useContract(editionDropContractAddress, "edition-drop");
    const { data: nft } = useNFT(contract, tokenId);
  
    return (
      <>
        {nft && (
          <div  className={styles.nftBox1}>
            {nft.metadata && (
              <ThirdwebNftMedia
                metadata={nft.metadata}
                className={styles.nftMedia}
                style={{ marginLeft:20 }}
              />
            )}
            <h3 style={{ marginLeft:90 }}>{nft.metadata.name}</h3>
            <Web3Button
            style={{ marginLeft:90 }}
              action={(contract) =>
                contract?.call("withdraw", [nft.metadata.id, 1])
              }
              contractAddress={stakingContractAddress}
            >
              Withdraw
            </Web3Button>
          </div>
        )}
      </>
    );
  };
  
  export default NFTCard;