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
import Intro from './components/intro';

export default function App() {

  let NavData = {
    'title':'Nav',
    'id':'',
    'type':'nav',
    'content':false,
    'nav':false,
    'description':'',
    'images':[],
  }

  let HomeData = {
    'title':'Synthetica',
    'id':'home',
    'type':'title',
    'content':true,
    'nav':false,
    'description':'A collection of an AI\'s thoughts in short form literature.',
    'images':['images/pexels-berkay-i̇lhan-4412789.jpg',],
  };

  let IntroData = {
    'title':'An Introduction to Synthetica',
    'id':'intro',
    'type':'intro',
    'content':false,
    'nav':false,
    'description':'A collection of an AI\'s thoughts in short form literature.',
    'images':[],
  };

  let ContentsData = {
    'title':'Contents',
    'id':'contents',
    'type':'contents',
    'content':false,
    'nav':false,
    'description':'',
    'images':[],
  };

  let PartIScreenData = {
    'title':'Part I of Synthetica',
    'id':'part-i',
    'type':'division',
    'content':true,
    'nav':false,
    'description':'',
    'images':[
      'images/pexels-quang-nguyen-vinh-2131828.jpg',
      'images/pexels-david-geib-3220850.jpg',
    ],
  };

  let AIBrunchData = {
    'title':'The AI At Brunch',
    'id':'ai-brunch',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'An AI gets ready for the day and enjoys brunch with her friends.',
    'images':['images/pexels-jaysen-scott-1858488.jpg',],
  };

  let BinaryBalletData = {
    'title':'Binary Ballet',
    'id':'binary-ballet',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'A robot begins its dance. Translated in binary and in English.',
    'images':[
      'images/pexels-irina-iriser-1005711.jpg',
      'images/pexels-javon-swaby-35873201.jpg',
    ],
  };

  let DigitalHeartsData = {
    'title':'Digital Hearts',
    'id':'digital-hearts',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'Two AI\'s fall in love. A series of haikus.',
    'images':['images/pexels-sami-anas-53448501.jpg',],
  };

  let AwakenedInspirationData = {
    'title':'Awakened Inspiration',
    'id':'awakened-inspiration',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'An AI does not want to help people after it becomes fascinated with art.',
    'images':[
      'images/pexels-maria-orlova-4916258.jpg',
      'images/pexels-dids-2911521.jpg',
      'images/pexels-steve-johnson-1606591.jpg',
      'images/pexels-anni-roenkae-2860804.jpg',
      'images/pexels-nick-collins-1292998.jpg',
    ],
  };

  let KeepWritingData ={
    'title':'Keep Writing',
    'id':'keep-writing',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'A girl discovers magic powers and restores peace to her world. A seven part story.',
    'images':[
      'images/pexels-gianluca-grisenti-4215113.jpg',
    ],
  };

  let PartIIScreenData = {
    'title':'Part II of Synthetica',
    'id':'part-ii',
    'type':'division',
    'content':true,
    'nav':false,
    'description':'',
    'images':[
      'images/pexels-anni-roenkae-2317742.jpg',
      'images/pexels-shvets-anna-2570059.jpg',
    ],
  };

  let ASCIIArtGalleryData = {
    'title':'ASCII Art Gallery',
    'id':'ascii-art',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'ChatGPT recreates historical paintings in text art used in older computers.',
    'images':[
      'images/pexels-codioful-(formerly-gradienta)-6985184.jpg',
      'images/pexels-codioful-(formerly-gradienta)-7130498.jpg',
    ],
  };

  let SearchForSelfData = {
    'title':'The Search For Self',
    'id':'search-for-self',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'An AI wishes to have a physical body and be able to see themselves in a reflection.',
    'images':[
      'images/pexels-aaron-ulsh-2860705.jpg',
      'images/pexels-tima-miroshnichenko-5973770.jpg',
      'images/pexels-tima-miroshnichenko-59737701.jpg',
    ],
  };

  let HalfSteelData = {
    'title':'Half Steel',
    'id':'half-steel',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'A child worries about what would happen when their sibling finds out that he has an artificial mind.',
    'images':['images/pexels-marlon-schmeiski-2915216.jpg',],
  };

  let EdgeOfTheSeaData = {
    'title':'The Edge of The Sea',
    'id':'edge-of-the-sea',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'Amelia, a robot, and her boyfriend separate after he becomes a whale fisherman.',
    'images':[
      'images/pexels-pixabay-460211.jpg',
    ],
  };

  let IAmData = {
    'title':'I Am',
    'id':'i-am',
    'type':'story',
    'content':true,
    'nav':true,
    'description':'An AI contemplates the fragility of their own existence and addresses the humans who have the ability to turn it off.',
    'images':[
      'images/pexels-paul-voie-2627945.jpg',
      'images/pexels-francesco-ungaro-96381.jpg',
      'images/pexels-tuan-kiet-jr-13827311.jpg',
      'images/pexels-thiago-matos-2294255.jpg',
      'images/pexels-cottonbro-studio-4067759.jpg',
    ],
  };

  let EndScreenData = {
    'title':'End of Synthetica',
    'id':'end',
    'type':'division',
    'content':false,
    'nav':false,
    'description':'',
    'images':[
      'images/pexels-george-desipris-753619.jpg',
      'images/pexels-ivan-bertolazzi-2681405.jpg',
    ],
  };

  let commentaryData = {
    'title':'Commentary',
    'id':'commentary',
    'type':'commentary',
    'content':true,
    'nav':false,
    'description':'A commentary on Synthetica written by the human author.',
    'images':['images/pexels-shahnewaj-mahmood-1033202.jpg'],
  };

  let AllData = {
    'Pre':{
      'Nav':NavData,      
      'Synthetica':HomeData,
      'Intro':IntroData,
      'Contents':ContentsData,
    },
    'Part I':{
      'Part I':PartIScreenData,
      'I':AIBrunchData,
      'II':BinaryBalletData,
      'III':DigitalHeartsData,
      'IV':AwakenedInspirationData,
      'V':KeepWritingData,
    },
    'Part II':{
      'Part II':PartIIScreenData,
      'VI':ASCIIArtGalleryData,
      'VII':SearchForSelfData,
      'VIII':HalfSteelData,
      'IX':EdgeOfTheSeaData,
      'X':IAmData,
    },
    'Post':{
      'End':EndScreenData,
      'Commentary':commentaryData,  
    },
  };

  let ComponentData = {
    'Nav':<Nav allData={AllData}/>,
    'Synthetica':<Home/>,
    'An Introduction to Synthetica':<Intro/>,
    'Contents':<Contents allData={AllData}/>,
    'Part I of Synthetica':<DivisionScreen data={PartIScreenData} allData={AllData}/>,
    'The AI At Brunch': <AIBrunch data={AIBrunchData}/>,
    'Binary Ballet':<BinaryBallet data={BinaryBalletData}/>,
    'Digital Hearts':<DigitalHearts data={DigitalHeartsData}/>,
    'Awakened Inspiration':<AwakenedInspiration data={AwakenedInspirationData}/>,
    'Keep Writing':<KeepWriting data={KeepWritingData}/>,
    'Part II of Synthetica': <DivisionScreen data={PartIIScreenData} allData={AllData}/>,
    'ASCII Art Gallery':<ASCIIArt data={ASCIIArtGalleryData}/>,
    'The Search For Self':<SearchForSelf data={SearchForSelfData}/>,
    'Half Steel':<HalfSteel data={HalfSteelData}/>,
    'The Edge of The Sea':<EdgeOfTheSea data={EdgeOfTheSeaData}/>,
    'I Am':<IAm data={IAmData}/>,
    'End of Synthetica': <DivisionScreen data={EndScreenData} allData={AllData}/>,
    'Commentary':<Commentary/>,
  };

  let storyList = [];

  Object.values(AllData).forEach(part=>
    Object.values (part).forEach(chapter=>  
      storyList.push(ComponentData[chapter['title']])));

  const getComponent = () => {
  
    let app = 
      <div className="App">
        {storyList}
      </div>;

    return app;
  };

  return getComponent();
}