import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeSection.module.css';

const HomeSection = ({ title, subtitle, description, imageUrl }) => {
  return (
    <div className={styles['home-section']}>
      <div className={styles['home-description']}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
      <div className={styles['home-image']}>
        <img src={imageUrl} alt={subtitle} />
      </div>
    </div>
  );
};

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default HomeSection;

