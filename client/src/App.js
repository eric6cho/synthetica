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
import DigitalHearts from "./components/digital-hearts";
import EdgeOfTheSea from "./components/edge-of-the-sea";
import IAm from "./components/i-am";
import Commentary from "./components/commentary";
import ASCIIArt from "./components/ascii-art";

export default function App() {
  

  const stories = [
    'ai-brunch',
    'binary-ballet',
    'digital-hearts',
    'awakened-inspiration',
    'keep-writing',

    'ascii-art',
    'search-for-self',
    'half-steel',
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
          name={'part-i'}
          id={stories} 
          title={'Part I of Synthetica'}
          imageSecondary={'images/pexels-david-geib-3220850.jpg'}
          imagePrimary={'images/pexels-quang-nguyen-vinh-2131828.jpg'}
          />

        <AIBrunch name={stories[0]}/>
        <BinaryBallet name={stories[1]}/>
        <DigitalHearts name={stories[2]}/>
        <AwakenedInspiration name={stories[3]}/>
        <KeepWriting name={stories[4]}/>

        <DivisionScreen 
          name={'part-ii'}
          id={stories} 
          title={'Part II of Synthetica'}
          imageSecondary={'images/pexels-shvets-anna-2570059.jpg'}
          imagePrimary={'images/pexels-anni-roenkae-2317742.jpg'}
          />

        <ASCIIArt name={stories[5]}/>
        <SearchForSelf name={stories[6]}/>
        <HalfSteel name={stories[7]}/>
        <EdgeOfTheSea name={stories[8]}/>
        <IAm name={stories[9]}/>
        
        <DivisionScreen 
          name={'end'}
          id={stories} 
          title={'End of Synthetica'}
          imageSecondary={'images/pexels-ivan-bertolazzi-2681405.jpg'}
          imagePrimary={'images/pexels-george-desipris-753619.jpg'}
          />

        <Commentary/>

      </div>;

    return app;
  };

  return getComponent();
}

/*

clean up components stylesheets

clean up mixins stylesheets

clean up components

clean up app component

create data to send from app to nav and components

clean up backend

*/