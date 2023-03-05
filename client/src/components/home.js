
import './../styles/home.scss';

export default function Home(props) {

  
  
  // define component
  const getComponent = () => {


    
    let component = 
      <div className='home'>
      
         
        <div className="image-container">
          <img src='images/pexels-berkay-i̇lhan-4412789.jpg' alt='article'/>
          <div className="image-overlay">


             
      
          </div>

        </div>
          <div className='top-section'> 
  
            <div className='title'>
              <h3>Synthetica</h3>
              
              <h4 className='subtitle'>a collection of an AI's thoughts in short form literature</h4>
            </div>
           
        </div>

      </div>;

    return component;
  }

  return getComponent();
}