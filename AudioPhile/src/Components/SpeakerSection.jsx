import TopSection from "./TopSection"
import { useContext } from "react";
import { SpeakerContext } from "../store/SpeakerStore";
import HeadProduct from "./HeadProduct";
import CardList from "./CardList";
import Ending from "./Ending";
import Footer from "./Footer";
const SpeakerSection = ({HandleCurrentState, currentstate}) =>{
  const {SpeakerList} = useContext(SpeakerContext);
  return <>
  <div>
    <div>
      <TopSection value='SPEAKERS'></TopSection>
    </div>
    <div>
    {SpeakerList.map((cat) => (
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
export default SpeakerSection;