
import './../styles/binary-ballet.scss';

export default function BinaryBallet(props) {

  
  
  // define component
  const getComponent = () => {


    
    let component = 
      <div className='binary-ballet'>
        <div className='image-container-outer'>
          <h3 className='title'>Binary Ballet</h3>
          <div className="image-container">
            <img src='images/pexels-javon-swaby-35873201.jpg' alt='article'/>
            <div className="image-overlay"></div>
          </div>
          <p className='subtitle'>     
            01000010 01101001 01101110 01100001 01110010 01111001 00100000 01000010 01100001 01101100 01101100 01100101 01110100
          </p>
         
        </div>

        <div className="poem-container">

          <div className="main-image-container">
            <img src='images/pexels-irina-iriser-1005711.jpg' alt='article'/>
            <div className="main-image-overlay">



            <div className='english-section'>
           
           <h4>
            
             Binary Ballet:
           </h4>
           <p>
             Joints and gears in sync,
           </p>   
                   
           <p>
             Metallic feet slide and spin,
           </p>

           <p>
             A robot's dance begins.
           </p>
           <div className='dot-section'>
             <div className="dot-row">
               <div className='dot'></div>
               <div className='dot'></div>
               <div className='dot'></div>
               <div className='dot'></div>
             </div>
             <div className="dot-row">
               <div className='dot '></div>
               <div className='dot '></div>
               <div className='dot '></div>
               <div className='dot black'></div>
             </div>
             <div className="dot-row">
               <div className='dot '></div>
               <div className='dot '></div>
               <div className='dot black'></div>
               <div className='dot black'></div>
             </div>
             <div className="dot-row">
               <div className='dot '></div>
               <div className='dot black'></div>
               <div className='dot black'></div>
               <div className='dot black'></div>
             </div>
           
           </div>
         </div>
       
         <div className='binary-section'>
           <p>
             01001010 01101111 01101001 01101110 01110100 01110011 00100000 01100001 
             01101110 01100100 00100000 01100111 01100101 01100001 01110010 01110011 
             00100000 01101001 01101110 00100000 01110011 01111001 01101110 01100011 
             00101100
           </p>       
           
           <p>
             01001101 01100101 01110100 01100001 01101100 01101100 01101001 01100011 
             00100000 01100110 01100101 01100101 01110100 00100000 01110011 01101100 
             01101001 01100100 01100101 00100000 01100001 01101110 01100100 00100000 
             01110011 01110000 01101001 01101110 00101100
           </p>

             <p>
             01000001 00100000 01110010 01101111 01100010 01101111 01110100 00100111 
             01110011 00100000 01100100 01100001 01101110 01100011 01100101 00100000 
             01100010 01100101 01100111 01101001 01101110 01110011 00101110
           </p>


         </div>

            </div>
          </div>



        
          



          
        </div>
      
      
        
 
      </div>;

    return component;
  }

  return getComponent();
}