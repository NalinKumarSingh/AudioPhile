import TopSection from "./TopSection"
import { useContext } from "react";
import { SpeakerContext } from "../store/SpeakerStore";
import CardList from "./CardList";
import Ending from "./Ending";
import Footer from "./Footer";
import HeadProduct from "./HeadProduct";
const EarphoneSection = ({HandleCurrentState, currentstate}) =>{
  const {EarphoneList} = useContext(SpeakerContext);
  return <>
  <div>
    <div>
      <TopSection value='EARPHONES'></TopSection>
    </div>
    <div>
    {EarphoneList.map((cat) => (
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
export default EarphoneSection;