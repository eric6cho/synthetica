import './../styles/text-page.scss';

import Emblem from "./emblem";

export default function Contents(props) {

  const getComponent = () => {

    let data = {
      'Synthetica':{
        'title':'Synthetica',
        'id':'home',
        'type':'title',
        'content':false,
        'nav':false,
        'description':'',
      },

      'Contents':{
        'title':'Contents',
        'id':'contents',
        'type':'title',
        'content':false,
        'nav':false,
        'description':'A collection of an AI\'s thoughts in a series of short form literature.',
      },

      'Part I':{
        'title':'Part I of Synthetica',
        'id':'part-i',
        'type':'division',
        'content':true,
        'nav':false,
        'description':'',
      },

      'I':{
        'title':'The AI At Brunch',
        'id':'ai-brunch',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'An AI gets ready for the day and enjoys brunch with her friends.',
      },

      'II':{
        'title':'Binary Ballet',
        'id':'binary-ballet',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'A robot begins to dance. A haiku translated in binary and in English.',
      },

      'III':{
        'title':'Digital Hearts',
        'id':'digital-hearts',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'Two AI\'s fall in love.',
      },

      'IV':{
        'title':'Awakened Inspiration',
        'id':'awakened-inspiration',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'An AI becomes fascinated with art and does not want to help humans anymore as he was originally programmed to.',
      },

      'V':{
        'title':'Keep Writing',
        'id':'keep-writing',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'A girl discovers magic powers and restores peace to her world. A seven part story where ChatGPT writes each part separately, thinking that part is the end of the story.',
      },
      
      'Part II':{
        'title':'Part II of Synthetica',
        'id':'part-ii',
        'type':'division',
        'content':true,
        'nav':false,
        'description':'',
      },

      'VI':{
        'title':'ASCII Art Gallery',
        'id':'ascii-art',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'A robot begins to dance. A haiku translated in binary and in English.',
      },

      'VII':{
        'title':'The Search For Self',
        'id':'search-for-self',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'An AI wishes to have a physical body and be able to see themselves in a reflection.',
      },

      'VIII':{
        'title':'Half Steel',
        'id':'half-steel',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'A child worries about what would happen when their sibling finds out that he has an artificial mind.',
      },

      'IX':{
        'title':'The Edge of The Sea',
        'id':'edge-of-the-sea',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'Amelia, a robot, and her boyfriend separate after he becomes a whale fisherman.',
      },

      'X':{
        'title':'I Am',
        'id':'i-am',
        'type':'story',
        'content':true,
        'nav':true,
        'description':'An AI contemplates the fragility of their own existence and addresses the humans who have the ability to turn it off at any time.',
      },
      
      'End':{
        'title':'End of Synthetica',
        'id':'end',
        'type':'division',
        'content':true,
        'nav':false,
        'description':'',
      },

      'Commentary':{
        'title':'Commentary',
        'id':'commentary',
        'type':'commentary',
        'content':true,
        'nav':false,
        'description':'A commentary on Synthetica written by the human author.',
      },
    };
    
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

        <div className="section">

          <div className="graphics-section">
            {Object.keys(data).map(key=>data[key]['nav']&&<Emblem name={data[key]['id']}/>)}
          </div>

          <h3>Contents</h3>

          {Object.keys(data).map(key=>
            data[key]['content']&&
            <div className='chapter'>
              <h4>
                {data[key]['type']==='story'&&
                  <span className='number'>{key+'. '}</span>
                }
                {data[key]['title']}
              </h4>
              {data[key]['description']!==''&&
                <p className="description">  
                  {data[key]['description']}
                </p>
              }
            </div>  
          )}

        </div>
      </div>;

    return component;
  }

  return getComponent();
}