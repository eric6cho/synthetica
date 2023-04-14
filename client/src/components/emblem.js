
import './../styles/emblem.scss';

export default function Emblem(props) {

  const getComponent = () => {

    let emblem = <></>;

    if(props.name==='home')
      emblem = 
        <>
          <div className="square s-1"></div>
        </>;

    
    if(props.name==='part-i')
      emblem = 
        <>
        <div className="square s-1"></div>
          <div className="line l-1"></div>
        </>;

    if(props.name==='part-ii')
      emblem = 
        <>
        <div className="square s-1"></div>
          <div className="line l-1"></div>
          <div className="line l-2"></div>
        </>;

    if(props.name==='end')
      emblem = 
        <>
        <div className="square s-1"></div>
          <div className="line l-1"></div>
          <div className="line l-2"></div>
          <div className="line l-3"></div>
        </>;
        
    if(props.name==='commentary')
      emblem = 
        <>
        <div className="square s-1"></div>
          <div className="line l-1"></div>
          <div className="line l-2"></div>
          <div className="line l-3"></div>
          <div className="line l-4"></div>
        </>;

    if(props.name==='ai-brunch')
      emblem = 
        <>
          <div className="square s-1"></div>
          <div className="circle c-1"></div>
          <div className="circle c-2"></div>
          <div className="line l-1"></div>
        </>;

    if(props.name==='binary-ballet')
      emblem = 
        <>
          <div className="square s-1"></div>
          <div className="square s-2"></div>
          <div className="square s-3"></div>
          <div className="line l-1"></div>
          <div className="line l-2"></div>
          <div className="line l-3"></div>
          <div className="line l-4"></div>
          <div className="line l-5"></div>
          <div className="line l-6"></div>
          <div className="line l-7"></div>
          <div className="line l-8"></div>
        </>;

    if(props.name==='digital-hearts')
      emblem = 
        <>
          <div className="circle c-1"></div>
          <div className="circle c-2"></div>
          <div className="circle c-3"></div>
          <div className="circle c-4"></div>
          <div className="line l-1"></div>
          <div className="line l-2"></div>
          <div className="line l-3"></div>
          <div className="line l-4"></div>
        </>;

    if(props.name==='awakened-inspiration')
      emblem = 
        <>
          <div className="square s-1"></div>
          <div className="square s-2"></div>
          <div className="dot d-1"></div>
          <div className="dot d-2"></div>
          <div className="dot d-3"></div>
          <div className="dot d-4"></div>
          <div className="dot d-5"></div>
          <div className="dot d-6"></div>
          <div className="dot d-7"></div>
          <div className="dot d-8"></div>
        </>;

    if(props.name==='keep-writing')
      emblem = 
        <>
          <div className="circle c-1"></div>
          <div className="dot d-1"></div>
          <div className="dot d-2"></div>
          <div className="dot d-3"></div>
          <div className="dot d-4"></div>
          <div className="dot d-5"></div>
          <div className="dot d-6"></div>
          <div className="dot d-7"></div>
          <div className="dot d-8"></div>
          <div className="dot d-9"></div>
          <div className="dot d-10"></div>
          <div className="dot d-11"></div>
          <div className="dot d-12"></div>
        </>;

    if(props.name==='ascii-art')
      emblem = 
        <>
          <div className="circle c-1"></div>
          <div className="circle c-2"></div>
          <div className="circle c-3"></div>
          <div className="circle c-4"></div>
        </>;

    if(props.name==='search-for-self')
      emblem = 
        <>
        <div className="square s-1"></div>
        <div className="square s-2"></div>
        <div className="square s-3"></div>
        <div className="square s-4"></div>
        <div className="square s-5"></div>
        <div className="line l-1"></div>
        <div className="line l-2"></div>
        <div className="line l-3"></div>
        <div className="line l-4"></div>
        </>;

    if(props.name==='half-steel')
      emblem = 
        <>
          <div className="line l-1"></div>
          <div className="line l-2"></div>
          <div className="square s-1"></div>
          <div className="square s-2"></div>
          <div className="square s-3"></div>
          <div className="square s-4"></div>
          <div className="square s-5"></div>
        </>;

    if(props.name==='edge-of-the-sea')
      emblem = 
        <> 
          <div className="square s-1"></div>
          <div className="circle c-1"></div>
          <div className="line l-1"></div>
          <div className="line l-2"></div>
          <div className="line l-3"></div>
          <div className="line l-4"></div>
          <div className="line l-5"></div>
          <div className="line l-6"></div>
          <div className="line l-7"></div>
          <div className="line l-8"></div>
          <div className="dot d-1"></div>
          <div className="dot d-2"></div>
          <div className="dot d-3"></div>
          <div className="dot d-4"></div>
        </>;

    if(props.name==='i-am')
      emblem = 
        <>
          <div className="square s-1"></div>
          <div className="square s-2"></div>
          <div className="square s-3"></div>
          <div className="square s-4"></div>
        </>;

    let component = 
      <div className={'component emblem'}>
        <div className={"center "+props.name}>
          <div className="circle outer"></div>
          <div className="circle inner"></div>
          {emblem}
        </div>
      </div>;

    return component;
  }

  return getComponent();
}