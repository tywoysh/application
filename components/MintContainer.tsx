import { Web3Button, contractType } from "@thirdweb-dev/react";
import Image from "next/image";
import { CHARACTERS_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";
import { ClaimConditions } from "@thirdweb-dev/sdk/dist/declarations/src/solana/classes/claim-conditions";


export default function MintContainer() {

  return (
    <div className={styles.collectionContainer}>
      <h1>Edition Drop</h1>

      <p>Claim your Character NFT to start playing!</p>

      <div className={`${styles.nftBox} ${styles.spacerBottom}`}>
        <img src="/mine.gif" style={{ height: 200 }} alt="mine" />
      </div>

      <div className={styles.smallMargin}>
        <Web3Button
          theme="dark"
          contractAddress={CHARACTERS_ADDRESS}
          action={(contract) => contract.erc1155.claim(0, 1)}
        >
          Mint 0.05 MATIC
        </Web3Button>
      </div>
    </div>
  );
}