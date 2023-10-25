import { Web3Button } from "@thirdweb-dev/react";
import Image from "next/image";
import { CHARACTERS_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";



export default function MintContainer() {
    const router = useRouter();

  return (
    <div className={styles.collectionContainer}>
      <h1>Edition Drop</h1>

      <p>You have already Minted! Enter Game Below!</p>

      <div className={`${styles.nftBox} ${styles.spacerBottom}`}>
        <img src="/mine.gif" style={{ height: 200 }} alt="mine" />
      </div>

      <div className={styles.smallMargin}>
        <button
            className={`${styles.mainButton} ${styles.spacerBottom}`}
            onClick={() => router.push("/play")}
        >
            Play Game
        </button>
      </div>
    </div>
  );
}