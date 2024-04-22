import React, {useState, useEffect} from 'react'
import advertLogo from "../assets/homeImages/advertLogo.png"
import AU from "../assets/homeImages/AU.png"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import data from "../../data/data.json";


const Fade = ({data})=>{
  const [slide, setSlide] = useState(0);
  const [isHovered, setIsHover] = useState(false);

  const nextSlide=()=>{
      setSlide( slide === data.length -1 ? 0 : slide + 1);

  }
  const previousSlide=()=>{
      setSlide(slide === 0 ? data.length -1 : slide - 1);
      
  }
  // useEffect to run once there is change
  useEffect(()=>{
      let intervalId;
      if (!isHovered){
           intervalId = setInterval(
              ()=>{
                  nextSlide();
      
              }, 3000
          ); 

      }

      
      return ()=> clearInterval(intervalId);
  }, [slide, isHovered]);

  const handleMouseEnter = ()=>{
      setIsHover(true);
  };
  const handleMouseLeave = ()=>{
      setIsHover(false);
  };

return (
  
  <div className='Carousel' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <BsArrowLeftCircleFill className='arrow arrow-left'onClick={previousSlide}/>
      {data.map((item, index)=>{
          return(<img 
              src={require(`../assets/homeImages/${item.src}`)} 
              alt={item.alt} key={index} 
              className={slide === index ? "slide": "slide-hidden"}
              style={{ transition: 'opacity 0.5s', opacity: slide === index ? 1 : 0 }}
              />)
      })}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      <span className='indicators'>
          {data.map((_, index)=>{
              return(<button key={index} onClick={()=> setSlide(index)} className={slide === index? "indication": "indicator-inactive"}></button>)
          })}
      </span>
    <style jsx>{`
    .Carousel{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 350px;
      width: 600px;
      transition: all 0.7s ease;
      margin-bottom: 30px;
    }
    .Carousel:hover .arrow{
      display: block;
      transform: scale(1.1);
      
    }
    .slide{
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
    .arrow{
      display: none;
      position: absolute;
      width: 2rem;
      height: 2rem;
      color: white; 
      filter: drop-shadow(0px 0px 5px #555);
    }
    .arrow:hover{
      cursor: pointer;
    }
    .arrow-left{
      left: 1rem;
    }
    .arrow-right{
      right: 1rem;

    }
   .Carousel  .indicators{
      display: flex;
      position: absolute;
      gap: 10px;
      bottom: 1rem;
    }
    .Carousel .indicators button{
      
      padding: 0.5rem;
      border-radius: 100%;
      border: none;
      outline: none;
      box-shadow: 0px 0px 5px #555;
      cursor: pointer;

    }
   .Carousel  .indication{
      background-color: white;
     
    }
    .slide-hidden{
      display: none;
    }
   .Carousel .indicator-inactive{
      background-color: grey;
     
    }
    @media(max-width: 600px){
      .Carousel{
        width: 550px;
        height: auto;
      }
    }
    @media(max-width: 500px){
      .Carousel{
        width: 380px;
        height: auto;
      }
    }
    @media(max-width: 400px){
      .Carousel{
        width: 340px;
        height: auto;
      }
    }
    `}</style>
  </div>
)
}



const Advert = ()=>{
  const {slides} =data;
    return (
        <>
        <section className="advertContainer">
            <div className="Image__container">
                <div className="advert-image__container"><img src={advertLogo} alt="advert"/></div>
                <div className="advert-image__container"><img src={AU} alt="advert"/></div>
                
            </div>
            <div className="divider"></div>
            
            <div><Fade data={slides}/></div>

        </section>
        <style jsx>{`
        .advertContainer{
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            gap: 20px;
            justify-content: space-between;
            align-items: center;
            
        }
        .divider{
           width: 2px;
           height: 300px;
           background-color: var( --second-primary-color);
        }
        .Image__container{
            display: flex;
            justify-content: space-between;
            gap: 20px;
            
        }
        .advert-image__container{
            width: 250px;
            height: 318px;

        }
        .advert-image__container img{
            width: 100%;
        }
        @media(max-width: 991px){
          .advertContainer{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            height: 670px;
            margin-bottom: 30px;
          }
          .divider{
            display: none;
            
          }
        }
        @media(max-width: 500px){
          .advert-image__container{
            width: 180px;
          }
          .advertContainer{
            height: 450px;
            margin: 10px 0;
          }

        }
        @media(max-width: 500px){
          .advert-image__container{
            width: 150px;
            height: 180px;
          }
          .advertContainer{
            height: 400px;
          }

        }

        `}</style>
        </>
    )
}
export default Advert;