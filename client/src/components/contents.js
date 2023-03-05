
import './../styles/contents.scss';

export default function Contents(props) {

  
  
  // define component
  const getComponent = () => {


    
    let component = 
      <div className='contents'>

        <div className='article-section'>



          <h3>Contents</h3>

          <div className='content-section'>
            <h4>Part I</h4>
            <div className='content-list'>
              <p><span className='chapter-number'>I : </span>The AI at Brunch </p>
              <p><span className='chapter-number'>II : </span>Binary Ballet </p>
              <p><span className='chapter-number'>III : </span>Awakened Inspiration </p>
              <p><span className='chapter-number'>IV : </span>Keep Writing </p>
              <p><span className='chapter-number'>V : </span>The Search for Self </p>

            </div>
          </div>


          <div className='content-section'>
            <h4>Part II</h4>
            <div className='content-list'>
              <p><span className='chapter-number'>VI : </span>Half Steel </p>
              <p><span className='chapter-number'>VII : </span>Mayonnaise Rant </p>
              <p><span className='chapter-number'>VIII : </span>Digital Hearts </p>
              <p><span className='chapter-number'>IX : </span>The Edge of the Sea </p>
              <p><span className='chapter-number'>X : </span>I Am </p>

            </div>
          </div>

        </div>

         
        
        
        
      </div>;

    return component;
  }

  return getComponent();
}