import './../styles/contents.scss';

export default function Contents(props) {

  const getComponent = () => {

    let component = 
      <div className='component contents'>

        <div className='content-container'>

          <h3>Contents</h3>

          <div className='content-section'>
            <h4>Start</h4>
            <div className='content-list'>
              <p><span className='chapter-number'>-</span>Synthetica</p>
            </div>
          </div>

          <div className='content-section'>
            <h4>Part I</h4>
            <div className='content-list'>
              <p><span className='chapter-number'>I</span>The AI at Brunch </p>
              <p><span className='chapter-number'>II</span>Binary Ballet </p>
              <p><span className='chapter-number'>III</span>Awakened Inspiration </p>
              <p><span className='chapter-number'>IV</span>Keep Writing </p>
              <p><span className='chapter-number'>V</span>The Search for Self </p>
            </div>
          </div>

          <div className='content-section'>
            <h4>Part II</h4>
            <div className='content-list'>
              <p><span className='chapter-number'>VI</span>Half Steel </p>
              <p><span className='chapter-number'>VII</span>ASCII Art Gallery </p>
              <p><span className='chapter-number'>VIII</span>Digital Hearts </p>
              <p><span className='chapter-number'>IX</span>The Edge of the Sea </p>
              <p><span className='chapter-number'>X</span>I Am </p>
            </div>
          </div>

          <div className='content-section'>
            <h4>End</h4>
            <div className='content-list'>
              <p><span className='chapter-number'>-</span>End of Synthetica</p>
            </div>
          </div>
          
          <div className='content-section'>
            <h4>Post</h4>
            <div className='content-list'>
              <p><span className='chapter-number'>-</span>A Human Commentary</p>
            </div>
          </div>
      
        </div>
      </div>;

    return component;
  }

  return getComponent();
}