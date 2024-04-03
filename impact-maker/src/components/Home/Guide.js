
import chris from "../assets/homeImages/chris.jpg"
import award2 from "../assets/homeImages/award2.png"
const Guide = ()=>{
    return(
        <>
        <section className="guide-container">
            <div className="guide-wrapper">
                <div className="text__container">
                    <div className="background__overlay">
                        <div className="text__wrapper">
                            <h2>A Guide to the <br/><span>AFRICA IMPACT HALL OF FAME</span></h2>
                            <p>
                                The Africa Impact Hall of Fame is a class for the Best of the Best -
                                the Most Prestigious Recognition and Highest Global Honor for Impact
                                Makers in Africa. This program is designed in support of the
                                aspirations of the African Union (AU) Agenda 2063 – The Africa we
                                want. Nominees for the Hall-of-Fame are shortlisted across 54
                                African Countries for their excellent work and contribution to the
                                rising of Africa.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="idol__container">
                    <img src={chris} alt="Chris Diamond"/>
                </div>
            </div>

        </section>
        <style jsx>{`
        .guide-container{
            width: 100%;
            background-color: var(--white);
        }
        .guide-wrapper{
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
        }
        .text__container{
            position: relative;
            width: 550px;
            height: 650px;
            
            background-image: url(${award2});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
        .background__overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            border: 1px solid var(--second-primary-color);
            border-radius: 20px;
        }
        .text__wrapper{
            padding: 30px 20px;



        }
        .text__container .background__overlay .text__wrapper h2{
            font-size: var(--h3-font-size);
            font-weight: 700;
            color: var(--white);
            margin-bottom: 30px;
        }
        .text__container .background__overlay .text__wrapper h2 span{
            font-size: var(--h2-font-size);
            color: var(--first-primary-color);
        }
        .text__container .background__overlay .text__wrapper p{
            font-size: var(--h3-font-size);
            color: var(--white);
            font-weight: 400;

        }
        .idol__container {
            width: 550px;
            height: max-content;
        }
        .idol__container img{
            aspect-ratio: 0.76;
            object-fit: cover;
            width: 100%;
            border-radius: 8px;
            height: 670px;

        }
        `}</style>
        </>
    )
}
export default Guide;
