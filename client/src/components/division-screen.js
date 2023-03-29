import './../styles/division-screen.scss';

export default function DivisionScreen(props) {

  const getComponent = () => {

    let component = 
      <div className='component division-screen'>
        <div className="image">
          <img src={props.imagePrimary} alt='article'/>
          <div className="image-overlay">
            <div className="image-container">
              <div className="image">
                <img src={props.imageSecondary} alt='article'/>
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="link-row">
              <a href={'#'+props.id[0]}><h4>I</h4></a>
              <a href={'#'+props.id[1]}><h4>II</h4></a>
              <a href={'#'+props.id[2]}><h4>III</h4></a>
              <a href={'#'+props.id[3]}><h4>IV</h4></a>
              <a href={'#'+props.id[4]}><h4>V</h4></a>
            </div>
            <h3 className='title'>{props.title}</h3>
            <div className="link-row">
              <a href={'#'+props.id[5]}><h4>VI</h4></a>
              <a href={'#'+props.id[6]}><h4>VII</h4></a>
              <a href={'#'+props.id[7]}><h4>VIII</h4></a>
              <a href={'#'+props.id[8]}><h4>IX</h4></a>
              <a href={'#'+props.id[9]}><h4>X</h4></a>
            </div>
          </div>
        </div>   
      </div>;

    return component;
  }

  return getComponent();
}