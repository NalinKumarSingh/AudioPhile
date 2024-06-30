import styles from './HeadPhonesSection.module.css';
import HeadProduct from './HeadProduct';
import TopSection from './TopSection';
import { useContext } from 'react';
import { SpeakerContext } from '../store/SpeakerStore';
import Ending from './Ending';
import CardList from './CardList';
import Footer from './Footer';
const HeadphonesSection = ({HandleCurrentState, currentstate})=>{
  const { HeadPhonesList } = useContext(SpeakerContext);

  return <>
  <div>
    <div>
      <TopSection value='HEADPHONES'></TopSection>
    </div>
    <div>
    {HeadPhonesList.map((cat) => (
        <HeadProduct key={cat.id} cat={cat} />
      ))}
    </div>
    <div>
      <CardList HandleCurrentState = {HandleCurrentState} currentstate={currentstate}></CardList>
    </div>
    <div>
      <Ending></Ending>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
  </>
}
export default HeadphonesSection