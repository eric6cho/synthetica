
import './../styles/division-screen.scss';

export default function IntermissionScreen(props) {

  
  
  // define component
  const getComponent = () => {


    
    let component = 
      <div className='screen'>

         
        <div className="image-container">
              <img src='images/pexels-shvets-anna-2570059.jpg' alt='article'/>
          <div className="image-overlay">
            
            <div className="image-container">
          <img src='images/pexels-anni-roenkae-2317742.jpg' alt='article'/>
              <div className="image-overlay"></div>
            </div>
                
                
            <div className="link-row">
              <a href=''><h4>I</h4></a>
              <a href=''><h4>II</h4></a>
              <a href=''><h4>III</h4></a>
              <a href=''><h4>IV</h4></a>
              <a href=''><h4>V</h4></a>
            </div>
            <div className='title'>
              <h3>Part II of Synthetica</h3>
            </div>
            <div className="link-row">
              <a href=''><h4>VI</h4></a>
              <a href=''><h4>VII</h4></a>
              <a href=''><h4>VIII</h4></a>
              <a href=''><h4>IX</h4></a>
              <a href=''><h4>X</h4></a>
            </div>
      
          </div>

        </div>
        
      </div>;

    return component;
  }

  return getComponent();
}