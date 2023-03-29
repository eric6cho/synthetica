import React, { useState, useEffect, useRef } from "react";

import * as u from './scripts/utils'; 
import './styles/main.scss';

import Nav from "./components/nav";
import Home from "./components/home";
import Contents from "./components/contents";
import DivisionScreen from "./components/division-screen";
import AIBrunch from "./components/ai-brunch";
import BinaryBallet from "./components/binary-ballet";
import AwakenedInspiration from "./components/awakened-inspiration";
import SearchForSelf from "./components/search-for-self";
import KeepWriting from "./components/keep-writing";
import HalfSteel from "./components/half-steel";
import MayonnaiseRant from "./components/mayonnaise-rant";
import DigitalHearts from "./components/digital-hearts";
import EdgeOfTheSea from "./components/edge-of-the-sea";
import IAm from "./components/i-am";
import Commentary from "./components/commentary";
import ASCIIArt from "./components/ascii-art";

export default function App() {
  
  useEffect(() => {
    
    u.fetchGet('/api/test').then(data=>{
      console.log(data);
    });

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getId = title => 
    title!=='Synthetica'?'home':
      title.toLowerCase()
        .replaceAll(' ','-')
        .replaceAll('synthetica','')
        .replaceAll('of','')
        .replaceAll('at','')
        .replaceAll('the','');

  const getShortTitle = title =>
    title!=='Synthetica'?'Home':
      title.replaceAll('Of Synthetica','');

  const getData = (title,type) => (
    {
      'title':title,
      'short-title':getShortTitle(title),
      'id':getId(title),
      'type':type,
    }
  );

  const stories = [
    'ai-brunch',
    'binary-ballet',
    'awakened-inspiration',
    'search-for-self',
    'keep-writing',
    'half-steel',
    'ascii-art',
    'digital-hearts',
    'edge-of-the-sea',
    'i-am',
  ];

  const getComponent = () => {
  
    let app = 
      <div className="App">

        <Nav id={stories}/>
        <Home/>
        <Contents id={stories}/>

        <DivisionScreen 
          id={stories} 
          title={'Part I of Synthetica'}
          imagePrimary={'images/pexels-david-geib-3220850.jpg'}
          imageSecondary={'images/pexels-quang-nguyen-vinh-2131828.jpg'}
          />

        <AIBrunch name={stories[0]}/>
        <BinaryBallet name={stories[1]}/>
        <AwakenedInspiration name={stories[2]}/>
        <SearchForSelf name={stories[3]}/>
        <KeepWriting name={stories[4]}/>

        <DivisionScreen 
          id={stories} 
          title={'Part II of Synthetica'}
          imagePrimary={'images/pexels-shvets-anna-2570059.jpg'}
          imageSecondary={'images/pexels-anni-roenkae-2317742.jpg'}
          />

        <HalfSteel name={stories[5]}/>
        <ASCIIArt name={stories[6]}/>
        <DigitalHearts name={stories[7]}/>
        <EdgeOfTheSea name={stories[8]}/>
        <IAm name={stories[9]}/>
        
        <DivisionScreen 
          id={stories} 
          title={'End of Synthetica'}
          imagePrimary={'images/pexels-ivan-bertolazzi-2681405.jpg'}
          imageSecondary={'images/pexels-george-desipris-753619.jpg'}
          />

        <Commentary/>

      </div>;

    return app;
  };

  return getComponent();
}

