import React, { useContext, useEffect, useState } from 'react';
import HomeSection from './HomeSection';
import { SpeakerContext } from '../store/SpeakerStore';
import styles from './Home.module.css';
import CardList from './CardList';
import SampleProducts from './SampleProducts';
import SampleProduct1 from './SampleProduct1';
import SampleProduct2 from './SampleProduct2';
import Ending from './Ending';
import Footer from './Footer';
const Home = ({HandleCurrentState, currentstate}) => {
  const { NewArrivalList, HomeSpeaker1 } = useContext(SpeakerContext);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === NewArrivalList.length - 1 ? 0 : prevIndex + 1
    );
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextProduct();
    }, 5000); 
    
    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
    <div className={styles.carousel}>
      {NewArrivalList.map((product, index) => (
        <div
          key={product.id}
          className={`${styles.slide} ${
            index === currentProductIndex ? styles.active : ''
          }`}
        >
          <HomeSection
            title={product.title}
            subtitle={product.subtitle}
            description={product.body}
            imageUrl={product.img}
          />
        </div>
      ))}
    </div>
    <div>
      <CardList HandleCurrentState = {HandleCurrentState} currentstate={currentstate}></CardList>
    </div>
    <div>
    {HomeSpeaker1.map((hm) => (
        <SampleProducts key={hm.id} hm={hm} />
      ))}
    </div>
    <div>
      <SampleProduct1></SampleProduct1>
    </div>
    <div>
      <SampleProduct2></SampleProduct2>
    </div>
    <div>
      <Ending></Ending>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;

