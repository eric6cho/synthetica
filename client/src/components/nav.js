import './../styles/nav.scss';

export default function Nav(props) {

  const getComponent = () => {

    let component = 
      <div className='component nav'>
        <a href={'#home'} className={'link title'}>
          <div className="blue-dot"></div>
          <h3 className='title'>Synthetica</h3>
        </a>
        
        <a href={'#'+props.id[0]} className={'link link-'+props.id[0]}>I</a>
        <a href={'#'+props.id[1]} className={'link link-'+props.id[1]}>II</a>
        <a href={'#'+props.id[2]} className={'link link-'+props.id[2]}>III</a>
        <a href={'#'+props.id[3]} className={'link link-'+props.id[3]}>IV</a>
        <a href={'#'+props.id[4]} className={'link link-'+props.id[4]}>V</a>
        <a href={'#'+props.id[5]} className={'link link-'+props.id[5]}>VI</a>
        <a href={'#'+props.id[6]} className={'link link-'+props.id[6]}>VII</a>
        <a href={'#'+props.id[7]} className={'link link-'+props.id[7]}>VIII</a>
        <a href={'#'+props.id[8]} className={'link link-'+props.id[8]}>IX</a>
        <a href={'#'+props.id[9]} className={'link link-'+props.id[9]}>X</a>
      </div>;

    return component;
  }

  return getComponent();
}