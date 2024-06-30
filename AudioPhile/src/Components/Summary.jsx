import React from 'react';
import styles from './Summary.module.css';
const Summary = ({ cat }) => {
  return (
    <div className={`${styles.car} card`} style={{ width: '10rem' , height: '17rem' }}>
      <img src={cat.img} className="card-img-top" alt={cat.name} />
      <div className="card-body">
        <h5 className="card-title">{cat.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {cat.price}</li>
        {/* <li className="list-group-item">Tax: $50</li>
        <li className="list-group-item">Total: ${eval(3000 + 50)}</li> */}
      </ul>
    </div>
  );
};

export default Summary;
