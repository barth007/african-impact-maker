import award from "../assets/homeImages/award.png";
import Button from "../Shared/Button";

const HomeBanner = ()=>{
    return (
        <>
        <section className="banner-section">
            <div className="banner-section__wrapper">
                <div className="banner-text__content">
                    <div className="banner-bold__text">
                        <h1>AFRICA IMPACT <br/>HALL OF FAME</h1>

                    </div>
                    <div className="banner-regular__text">
                        <p>
                            The Highest Global Honor for Impact Makers
                            in Africa - designed in the most elite style
                            to spotlight top performing Changemakers
                        </p>
                    </div>
                    <div className="banner-button">
                        <Button text="Learn More"/>
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
        .banner-bold__text, .banner-regular__text{
            width: 100%;
        }
        .banner-bold__text h1{
            font-size: var(--biggest-font-size);
            font-weight: 700;
            color: var(--first-primary-color);
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
                max-width: 800px;
                margin: 0 auto;
                padding: 0 20px;
                align-items: center;
            }
            .banner-bold__text h1{
                text-align: center;
                font-size: 2.5rem;
            }
            .banner-regular__text p{
                text-align: center;
                font-size: 1.4rem;
            }
            .banner-button{
                justify-content: center;
                align-items: center;
                padding-bottom: 30px;
            }
        }
        @media (max-width: 400px){
            .banner-bold__text h1{
                font-size: 2rem;
            }
            .banner-regular__text p{
                font-size: 1.2rem;
            }

        }

        `}</style>
        </>
    )
}
export default HomeBanner;