import React, { useContext } from "react";
import { SpeakerContext } from "../store/SpeakerStore";
import styles from "./Bill.module.css";

const Bill = () => {
  const { BoughtList, calculateTotalPrice } = useContext(SpeakerContext);

  return (
    <div className={styles.billContainer}>
      <h2 className={styles.billTitle}>Checkout</h2>
      <div className={styles.billDetails}>
        {BoughtList.map((item, index) => (
          <div key={index} className={styles.billItem}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemPrice}>{item.price}</span>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <span>Total Price:</span>
        <span>${calculateTotalPrice()}</span>
      </div>
    </div>
  );
};

export default Bill;
