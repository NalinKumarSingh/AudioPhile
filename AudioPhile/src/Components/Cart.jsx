import React from 'react';
import styles from './Cart.module.css'; // Importing CSS module for styling
import Summary from './Summary';
import { useContext } from 'react';
import { SpeakerContext } from '../store/SpeakerStore';
import Footer from './Footer'
import Bill from './Bill';
const Cart = () => {
  const {BoughtList} = useContext(SpeakerContext);


  return (
    <div>
      <div className={styles.outer}>
      <div className={styles.left}>
        <form action="">
          <div className={styles.bill}>
            <Bill></Bill>
          </div>
          <div className={styles.section}>
            <h3>BILLING DETAILS</h3>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Field cannot be empty" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Field cannot be empty" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>
          </div>
          
          <div className={styles.section}>
            <h3>SHIPPING INFO</h3>
            <div className={styles.field}>
              <label htmlFor="address">Your Address</label>
              <input type="text" id="address" placeholder="Enter your address" />
            </div>
            <div className={styles.field}>
              <label htmlFor="zip">ZIP Code</label>
              <input type="text" id="zip" placeholder="Enter your ZIP code" />
            </div>
            <div className={styles.field}>
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="Enter your city" />
            </div>
            <div className={styles.field}>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" placeholder="Enter your country" />
            </div>
          </div>
          
          <div className={styles.section}>
            <h3>PAYMENT DETAILS</h3>
            <div className={styles.field}>
              <label htmlFor="payment">Payment Method</label>
              <select id="payment">
                <option value="e-money">e-Money</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="e-money-number">e-Money Number</label>
              <input type="text" id="e-money-number" placeholder="Enter e-Money number" />
            </div>
            <div className={styles.field}>
              <label htmlFor="e-money-pin">e-Money PIN</label>
              <input type="password" id="e-money-pin" placeholder="Enter e-Money PIN" />
            </div>
          </div>
          
          <div className={styles.section}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      
      <div className={styles.right}>
      {BoughtList.map((cat) => (
        <Summary key={cat.id} cat={cat} />
      ))}
      </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default Cart;
