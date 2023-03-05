import React, { useState, useEffect, useRef } from "react";

import BinaryBallet from "./components/binary-ballet";
import DigitalHearts from "./components/digital-hearts";
import * as u from './scripts/utils'; 
import './styles/main.scss';
import EdgeOfTheSea from "./components/edge-of-the-sea";
import MayonnaiseRant from "./components/mayonnaise-rant";
import AIBrunch from "./components/ai-brunch";
import HalfSteel from "./components/half-steel";
import IAm from "./components/i-am";
import SearchForSelf from "./components/search-for-self";
import KeepWriting from "./components/keep-writing";
import IntermissionScreen from "./components/intermission-screen";
import EndScreen from "./components/end-screen";
import AwakenedInspiration from "./components/awakened-inspiration";
import StartScreen from "./components/start-screen";
import Contents from "./components/contents";
import Home from "./components/home";
import Nav from "./components/nav";
export default function App() {
  
  
  // define useEffect
  useEffect(() => {
    

    u.fetchGet('/api/test').then(data=>{
      console.log(data);
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const getComponent = () => {
  
    let app = 
      <div className="App">
        <Nav/>
        <Home/>
        <Contents/>

        <StartScreen/>

        <AIBrunch/>
        <BinaryBallet/>
        <AwakenedInspiration/>
        <SearchForSelf/>
        <KeepWriting/>

        <IntermissionScreen/>

        <HalfSteel/>
        <MayonnaiseRant/>
        <DigitalHearts/>
        <EdgeOfTheSea/>
        <IAm/>

        <EndScreen/>
      </div>;

    return app;
  };

  return getComponent();
}




/*





Intro                 .
Contents              .

Part 1                DONE

The AI at Brunch      DONE  L
Binary Ballet         DONE  S
Awakened Inspiration  DONE  M
Keep Writing          DONE  L
The Search for Self   DONE  M

Part 2                DONE

Half Steel            DONE  S
Mayonnaise Rant       DONE  M
Digital Hearts        DONE  S
The Edge of the Sea   DONE  L
I Am                  DONE  M

End                   DONE







*/