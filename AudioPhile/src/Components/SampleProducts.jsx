import React from 'react';
import styles from './SampleProducts.module.css';
import exampleImage from '../images/image.png';
const SampleProducts = ({ hm }) => {
  return (
   <div className={styles['outer-div']}>
     <div className={styles['home-section']}>
      <div className={styles['home-image']}>
        <img src={exampleImage} alt={hm.subtitle} />
      </div>
      <div className={styles['home-description']}>
        <h1>{hm.title}</h1>
        <h2>{hm.subtitle}</h2>
        <p>{hm.body}</p>
      </div>
    </div>
   </div>
  );
};

export default SampleProducts;
