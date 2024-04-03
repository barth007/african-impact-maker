import chris from "../assets/homeImages/chris.jpg"
import award2 from "../assets/homeImages/award2.png"
import Button from "../Shared/Button";
const GuideSection = ()=>{
    return(
        <>
        <section className="guide-wrapper">
            <div className="guide-container">
                <article className="guide-content">
                   
                    <div className="guide__textContent">
                       <div className="guide_overlay">
                       <div className="guide__text-wrapper">
                            <h2>A Guide to the <br/><span>AFRICA IMPACT HALL OF FAME</span></h2>
                            <div>
                                <p>
                                The Africa Impact Hall-of-Fame is a class for the Best of the Best -
                                the Most Prestigious Recognition and Highest Global Honor for Impact
                                Makers in Africa. <br/> This program is designed in support of the
                                aspirations of the African Union (AU) Agenda 2063 – The Africa we
                                want. Nominees for the Hall-of-Fame are shortlisted across 54
                                African Countries for their excellent work and contribution to the
                                rising of Africa.
                                </p>
                            </div>
                            <div className="button-section"><Button text="Join Us"/></div>
                        </div>
                       </div>
                    </div>
                    <div className="guide__imageWrapper">
                        <img src={chris} alt="Chris Diamond" className="guide__imagery"/>
                    </div>

                </article>

            </div>

        </section>
        <style jsx>{`
        .guide-wrapper{
            max-width: 1200px;
            margin: 50px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FFF;
            margin-bottom: 80px;
        }
        .guide-content{
            gap: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

        }
        .guide__imageWrapper{
            justify-content: center;
            display: flex;
            flex-grow: 1;
            max-width: 560px;
            height: max-content;
        }
        .guide__textContent{
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 560px;
            height: 800px;
            position: relative;
            background-image: url(${award2});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            
        }
        .guide_overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            border: 1px solid var(--second-primary-color);
            border-radius: 20px;
        }
        .guide__imagery{
            aspect-ratio: 0.76;
            object-fit: cover;
            width: 100%;
            border-radius: 8px;
            height: 800px;
        }
        .guide__text-wrapper{
            border-radius: 12px;
            // border: 1px solid var(--first-primary-color);
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            align-items: start;
            width: 100%;
            padding: 150px 17px;
        }
        .guide__textContent .guide_overlay .guide__text-wrapper h2{
            font-size: var(--h3-font-size);
            font-weight: 700;
            color: var(--white);
            margin-bottom: 30px;
        }
        .guide__textContent .guide_overlay .guide__text-wrapper h2 span{
            font-size: var(--h2-font-size);
            color: var(--first-primary-color);
        }
        .guide__textContent .guide_overlay .guide__text-wrapper p{
            color: var(--white);
            margin-top: 49px;
            font-weight: 500;
            line-height: 2rem;
            font-size: var(--h3-font-size);
            text-align: justify;
            width: 94%;
        }
        .button-section{
            margin-top: 50px;
        }
        @media (max-width: 991px){
            .guide-content{
                flex-direction: column;
            }
            .guide-wrapper{
                flex-direction: column;
                max-width: 1024px;
            }
            .guide__imageWrapper{
                max-width: 760px;
                width: 100%;
            }
            .guide__imagery{
                width: 100%;
                height: 500px;
            }
            .guide__textContent {
                flex-direction: row;
                max-width: 760px;
                height: 654px;
            }
            .guide__text-wrapper{
                padding: 30px 17px;

            }
            .guide__textContent .guide_overlay .guide__text-wrapper p{
                width: 92%;
                
            }

        }
        @media(max-width: 600px){
            .guide-wrapper{
                flex-direction: column;
                max-width: 700px;
            }
            .guide__imageWrapper{
                width: 540px;
            }
            .guide__textContent {
                max-width: 540px;
            }
            


        }
        @media(max-width: 500px){
            .guide__textContent .guide_overlay .guide__text-wrapper p{
                font-size: 1rem;
            }
            .guide__textContent {
                max-width: 364px;
            }
            .guide__imageWrapper{
                max-width: 364px;
            }
            .button-section{
                margin-top: 20px;
            }
            .guide__textContent .guide_overlay .guide__text-wrapper h2 span {
                font-size: 1.3rem;
            }
            .guide__textContent .guide_overlay .guide__text-wrapper h2{
                width: 93%;
            }
            

        }
        @media (max-width: 400px){
            .guide__textContent {
                max-width: 326px;
                height: 696px;
            }
            .guide__imageWrapper{
                max-width: 326px;
            }
            
        }

        `}</style>
        </>
    )
}
export default GuideSection;