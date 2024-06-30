import React from 'react';
import styles from './Card.module.css';

const Card = ({ cat, HandleCurrentState, currentstate }) => {
  return (
    <div className={styles.card}>
      <img src={cat.img} className={styles.cardImgTop} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cat.title}</h5>
        <p className="card-text">{cat.body}</p>
        <a href="#" className="btn btn-primary" onClick={()=>HandleCurrentState(cat.x)}>SHOP</a>
      </div>
    </div>
  );
};

export default Card;
