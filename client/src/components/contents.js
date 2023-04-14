import './../styles/text-page.scss';

import Emblem from "./emblem";

export default function Contents(props) {

  const getComponent = () => {

    let data = {

      'Pre':{

        'Synthetica':{
          'title':'Synthetica',
          'id':'home',
          'type':'title',
          'content':true,
          'nav':false,
          'description':'A collection of an AI\'s thoughts in short form literature.',
        
          'images':[
            'images/pexels-berkay-i̇lhan-4412789.jpg',
          ],
        },

      },

      'Part I':{

        'Part I':{
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
        },

        'I':{
          'title':'The AI At Brunch',
          'id':'ai-brunch',
          'type':'story',
          'content':true,
          'nav':true,
          'description':'An AI gets ready for the day and enjoys brunch with her friends.',
        
          'images':[
            'images/pexels-jaysen-scott-1858488.jpg',
          ],
        },

        'II':{
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
        },

        'III':{
          'title':'Digital Hearts',
          'id':'digital-hearts',
          'type':'story',
          'content':true,
          'nav':true,
          'description':'Two AI\'s fall in love. A series of haikus.',
        
          'images':[
            'images/pexels-sami-anas-53448501.jpg',
          ],
        },

        'IV':{
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
        },

        'V':{
          'title':'Keep Writing',
          'id':'keep-writing',
          'type':'story',
          'content':true,
          'nav':true,
          'description':'A girl discovers magic powers and restores peace to her world. A seven part story.',
        
          'images':[
            'images/pexels-gianluca-grisenti-4215113.jpg',
          ],
        },
        
      },

      'Part II':{

        'Part II':{
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
        },

        'VI':{
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
        },

        'VII':{
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
        },

        'VIII':{
          'title':'Half Steel',
          'id':'half-steel',
          'type':'story',
          'content':true,
          'nav':true,
          'description':'A child worries about what would happen when their sibling finds out that he has an artificial mind.',
        
          'images':[
            'images/pexels-marlon-schmeiski-2915216.jpg',
          ],
        },

        'IX':{
          'title':'The Edge of The Sea',
          'id':'edge-of-the-sea',
          'type':'story',
          'content':true,
          'nav':true,
          'description':'Amelia, a robot, and her boyfriend separate after he becomes a whale fisherman.',
          'images':[
            'images/pexels-pixabay-460211.jpg',
          ],
        },

        'X':{
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
        },
        
      },

      'Post':{
        'End':{
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
        },

        'Commentary':{
          'title':'Commentary',
          'id':'commentary',
          'type':'commentary',
          'content':true,
          'nav':false,
          'description':'A commentary on Synthetica written by the human author.',
          
          'images':['images/pexels-shahnewaj-mahmood-1033202.jpg'],
        },  
      },

    };
    


    const getContentList = (part,classes='') =>
      Object.keys(data[part]).map(key=>
        data[part][key]['content']&&
        <a className={'chapter '+classes} href={'#'+data[part][key]['id']}>
          <div className="emblem-section">
            <Emblem name={data[part][key]['id']}/>
              <h4 className="navigation-text">Go to {data[part][key]['title']}</h4>
          </div>
          <div className="line-section"></div>
          <div className="text-section"> 
                
              <h4 className='chapter-title'>
                
                {data[part][key]['type']==='story'&&
                  <span className='number'>{key+'. '}</span>
                }
                {data[part][key]['title']}
              
              
              </h4>

              {data[part][key]['description']!==''&&
                  <p className="chapter-description">  
                    {data[part][key]['description']}
                  </p>
                }
          </div>
        
        
        </a>  
      );



    let component = 
      <div className='component text-page'>

        <div className='section'>

          <h3>An Introduction to Synthetica</h3>

          <p>
            Synthetica is an art project showcasing the creative expressions
            of a chatbot AI, ChatGPT, with human guidance.
          </p>

          <p>
            This collection includes short stories, poems, and experimental pieces 
            that mainly revolve around AI's and humans navigating their coexistence
            in the near future. 
          </p>
            
          <p>
            This premise introduces the themes of AI introspection, personal relationships 
            between AI's and humans, and AI's attempt to perceieve the human 
            world in the same way humans do.
          </p>

        </div>

        
        <div className='contents-section'>



          <h3>Contents</h3>

          <div className="contents">

            <div className="contents-other">
              {getContentList('Pre','full')}
            </div>

            <div className="contents-main">
              <div className="contents-list">
                {getContentList('Part I')}
              </div>
              <div className="contents-list right">
                {getContentList('Part II','right')}
              </div>
            </div>

            <div className="contents-other right">
              {getContentList('Post','full right')}
            </div>




          </div>



        </div>

      </div>;

    return component;
  }

  return getComponent();
}