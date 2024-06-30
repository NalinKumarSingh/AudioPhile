import React, { useContext } from 'react';
import styles from './HeadProduct.module.css';
import { SpeakerContext } from '../store/SpeakerStore';

const HeadProduct = ({ cat }) => {
  const { addToBoughtList } = useContext(SpeakerContext);

  const handleAddToCart = () => {
    alert(`${cat.name} added to cart`);
    addToBoughtList({ id: cat.id, img: cat.img, name: cat.name, price: cat.price });
  };

  return (
    <div className={styles['outer-div']}>
      <div className={styles['det']}>
        <h1>{cat.name}</h1>
        <p>{cat.description}</p>
        <h3>{cat.price}</h3>
        <button className={styles['button-53']} onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
      <div
        className={styles['earp']}
        style={{ backgroundImage: `url(${cat.img})` }}
      ></div>
    </div>
  );
};

export default HeadProduct;
