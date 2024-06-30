import React from 'react';
import styles from './SampleProduct1.module.css';
import backgroundImage from '../images/xyz.jpg';

const SampleProduct1 = () => {
  return (
    <div className={styles['outer-div']} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles['text-container']}>
        <h1>ZX7 SPEAKER</h1>
      </div>
    </div>
  );
};

export default SampleProduct1;


