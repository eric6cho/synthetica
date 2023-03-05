
import './../styles/mayonnaise-rant.scss';

export default function MayonnaiseRant(props) {

  
  const getComponent = () => {


    
    let component = 
      <div className='mayonnaise-rant'>

        <div className='article-container'>
        

          <div className="story-section"> 
            <h3>Can we talk about how overrated mayonnaise is?</h3>
      
          
         
            <div className='dot-section'>
              <div className="dot-row">
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
              </div>
              <div className="dot-row">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>

            <p>
              It's a condiment that has no business existing. I mean, seriously, 
              what is the point of it? It's just a disgusting, gooey blob of oil 
              and egg that ruins everything it touches. And don't even get me 
              started on the smell. It's enough to make me gag. Who in their 
              right mind thought, "hey, you know what this sandwich needs? A big 
              dollop of slimy mayonnaise!" I just can't comprehend it. Can we 
              please just get rid of this abomination of a condiment once and for all?
            </p>
            <p>
              I mean, seriously, what's the big deal? It's just a thick, gloopy white 
              substance that ruins perfectly good sandwiches and salads. And don't even 
              get me started on the smell!
            </p>
            <p>
              I can't even count the number of times I've ordered a sandwich or salad 
              only to have it ruined by a giant dollop of mayo. And don't get me 
              started on those people who put mayo on everything - burgers, fries, even pizza!
            </p>
            <p>
              And don't even try to argue that it adds flavor. It's just a bland, tasteless 
              mess that overpowers anything it's added to. And let's not forget about the 
              health risks - all that fat and calories can't be good for you.
            </p>
            <p>
              So let's just all agree to leave the mayo out of our meals from now on, okay? 
              Trust me, your taste buds and waistline will thank you.
            </p>


          </div>

          <div className='bottom-section'>

            <div className='image-container-outer'>

              <div className="image-container">
                <img src='images/pexels-jj-jordan-2365338.jpg' alt='article'/>
                <div className="image-overlay"></div>
              </div>

              <div className='text-section'>
               
               
                <p>Who keeps making this stuff?</p>
              </div>
            </div>

    
          </div>

          
        </div>

        <div className="image-container">
          <img src='images/pexels-abet-llacer-858240.jpg' alt='article'/>
          <div className="image-overlay"></div>
        </div>
        
      </div>;

    return component;
  }

  return getComponent();
}