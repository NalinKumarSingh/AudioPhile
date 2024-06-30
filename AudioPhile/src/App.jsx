import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import EarphoneSection from './Components/EarphoneSection';
import SpeakerSection from './Components/SpeakerSection';
import SpeakerProvider from './store/SpeakerStore';import HeadphonesSection from './Components/HeadPhonesSection';
import Cart from './Components/Cart';
function App() {
  const [currentstate, setcurrentstate] = useState("Home");
  const HandleCurrentState = (state)=>{
    setcurrentstate(state);
  };
  return (
    <SpeakerProvider>
      <Navbar HandleCurrentState = {HandleCurrentState} currentstate={currentstate}/>
      {currentstate==="Home" && <Home HandleCurrentState = {HandleCurrentState} currentstate={currentstate}></Home>}
      {currentstate === "Headphones" && <HeadphonesSection HandleCurrentState = {HandleCurrentState} currentstate={currentstate} />}
      {currentstate === "Speakers" && <SpeakerSection HandleCurrentState = {HandleCurrentState} currentstate={currentstate} />}
      {currentstate === "Earphones" && <EarphoneSection HandleCurrentState = {HandleCurrentState} currentstate={currentstate} />}
      {currentstate === "Cart" && <Cart/>}
    </SpeakerProvider>
  );
}

export default App;
