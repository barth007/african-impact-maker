import award from "../assets/homeImages/award.png";
import Button from "../Shared/Button";
import {ReactTyped} from 'react-typed';


const HomeBanner = ()=>{
    return (
        <>
        <section className="banner-section">
            <div className="banner-section__wrapper">
                <div className="banner-text__content">
                    <div className="banner_overlay"></div>
                    <div className="banner-bold__text">
                        <h1>
                            {/* AFRICA {" "}
                            <ReactTyped strings={["IMPACT<br/> HALL OF FAME"]} 
                            typeSpeed={100} 
                            loop
                            backSpeed={10}
                            showCursor={true}
                            /> */}
                            AFRICA IMPACT<br/> HALL OF FAME

                        </h1>

                    </div>
                    <div className="banner-regular__text">
                        <p>
                            The Highest Global Honor for Impact Makers
                            in Africa - designed in the most elite style
                            to spotlight top performing Changemakers
                        </p>
                    </div>
                    <div className="banner-button">
                        <Button text="Learn More" backgroundColor="var(--first-primary-color)" hoverColor="rgba(255,102,0,.5803921568627451)" border="none"/>
                    </div>
                    
                </div>
                <div className="banner-image__container">
                    <img src={award} alt="Africa Impact Makers"/>
                </div>
            </div>

        </section>
        <style jsx>{`
        .banner-section{
            width: 100%;
            height: auto;
            background-color: var(--coffee-brown);
        }
        .banner-section__wrapper{
            max-width: 1200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: auto;
            margin-left: auto;
            padding: 60px 0;
        }
        .banner-text__content{
            max-width: 500px;
            display: flex;
            flex-direction: column;
            gap: 70px;
        }
        .banner-bold__text{
            height: 100px;
        }
        .banner-bold__text, .banner-regular__text{
            width: 100%;
        }
        .banner-bold__text h1{
            font-size: var(--biggest-font-size);
            font-weight: 700;
            color: var(--white);
        }
        .banner-regular__text p{
            font-size: var(--medium-font-size);
            font-weight: 400;
            color: var(--white);


        }
        .banner-image__container{
            // width: 500px;
        }
        .banner-image__container img{
            // width: 100%;
        }
        @media (max-width: 991px){
            
         
            .banner-image__container{
                display: none;
            }
            .banner-text__content{
                position: relative;
                background-image: url(${award});
                background-size: contain;
                background-position: right top;
                background-repeat: no-repeat;
                max-width: 800px;
                margin: 0 auto;
                padding: 0 20px;
                align-items: left;
            }
            .banner_overlay{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.6);
                backdrop-filter: blur(2px);
            }
            .banner-bold__text{
                height: 30px;
                
            }
            .banner-bold__text, .banner-regular__text, .banner-button{
                z-index:999;

            }
            .banner-regular__text{
                width: 60%;
            }
            .banner-bold__text h1{
                text-align: left;
                font-size: 22px;
            }
            .banner-regular__text p{
                text-align: left;
                font-size: 16px;
            }
            .banner-button{
                justify-content: start;
                align-items: left;
                padding-bottom: 30px;
            }
        }
        @media (max-width: 700px){
            .banner-regular__text{
                width: 70%;
            }

        }
        @media (max-width: 500px){
            .banner-regular__text{
                width: 100%;
            }

        }
        
        `}</style>
        </>
    )
}
export default HomeBanner;