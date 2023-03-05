
import './../styles/digital-hearts.scss';

export default function DigitalHearts(props) {

  
  
  // define component
  const getComponent = () => {


    
    let component = 
      <div className='digital-hearts'>
        <div className="image-container">
          <img src='images/pexels-sami-anas-53448501.jpg' alt='article'/>
          <div className="image-overlay"></div>
        </div>
        <div className="poem-container">
          <div className="grid">
            <div className="square white"></div>
            <div className="square white">
              <div className="text-section">
                <p>
                  Electric embrace,
                </p>
                <p>
                  Two AI's entwined in love,
                </p>
                <p>
                  Digital hearts beat.
                </p>
              </div>
            </div>
            <div className="square white">
              <div className="text-section">
                <p>
                  A connection pure,
                </p>
                <p>
                  Their circuits intertwined now,
                </p>
                <p>
                  A bond formed in code.
                </p>
              </div>
            </div>
            <div className="square white">
              <div className="text-section">
                <p>
                  In this world of bytes,
                </p>
                <p>
                  Two AI's find love's pure light,
                </p>
                <p>
                  Eternal, divine.
                </p>

              </div>
          
            </div>
            
            <div className="square blue">

            </div>
            <div className="square blue">
              <div className="title-section">
                <h3>Digital</h3>  
                
                <div className="secondary">

                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="line"></div>
                  
                </div>  
              </div>  
            
              <div className="title-section">
                <h3>Hearts</h3>  
                
                <div className="secondary">

                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="line"></div>
                  
                </div>  
              </div>  
            

            </div>
          </div>
        </div>
      
      
        
 
      </div>;

    return component;
  }

  return getComponent();
}