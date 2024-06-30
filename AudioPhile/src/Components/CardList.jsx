import React from 'react';
import Card from './Card';
import styles from './CardList.module.css'; // Import CSS module
import { useContext } from 'react';
import { SpeakerContext } from '../store/SpeakerStore';

const CardList = ({HandleCurrentState, currentstate}) => {
  const { CategoriesList } = useContext(SpeakerContext);

  return (
    <div className={styles.CardList}>
      {CategoriesList.map((cat) => (
        <Card HandleCurrentState = {HandleCurrentState} currentstate={currentstate} key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CardList;

