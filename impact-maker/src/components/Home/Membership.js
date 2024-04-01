import QueenMany from "../assets/homeImages/QueenMany.png";
import Button from "../Shared/Button";
const Membership = ()=>{
    return(
        <>
        <section className="membership-wrapper">
            <div className="membership-container">
                <article className="membership-content">
                    <div className="imageWrapper">
                        <img src={QueenMany} alt="membership" className="Imagery"/>
                    </div>
                    <div className="textContent">
                        <div className="text-wrapper">
                            <h2>Membership</h2>
                            <div>
                                <p>
                                    Join The Africa Academy of Impact Makers, to nominate recipients for
                                    the Africa Impact Hall-of-Fame; represent Africa’s Voice on the global
                                    stage; lead impact projects for the AU Agenda 2063 in your locality; and
                                    participate at the annual Africa Humanitarian Festival and Awards – the
                                    largest gathering of Changemakers in Africa, all year long
                                </p>
                            </div>
                            <div className="button-section"><Button text="Join Us"/></div>
                        </div>
                    </div>

                </article>

            </div>

        </section>
        <style jsx>{`
        .membership-wrapper{
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FFF;
            margin-bottom: 80px;
        }
        .membership-content{
            gap: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

        }
        .imageWrapper{
            justify-content: center;
            display: flex;
            flex-grow: 1;
            max-width: 560px;
            height: max-content;
        }
        .textContent{
            display: flex;
            flex-direction: column;
            line-height: normal;
            max-width: 560px;
            height: 800px;
        }
        .Imagery{
            aspect-ratio: 0.76;
            object-fit: cover;
            width: 100%;
            border-radius: 8px;
            height: 800px;
        }
        .text-wrapper{
            border-radius: 12px;
            border: 1px solid var(--first-primary-color);
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            align-items: start;
            width: 100%;
            padding: 150px 20px;
        }
        .textContent .text-wrapper h2{
            color: var(--third-primary-color);
            letter-spacing: -3px;
            margin-top: -9px;
            font-size: var(--medium-font-size);
            font-weight: 700;
        }
        .textContent .text-wrapper p{
            color: var(--third-primary-color);
            margin-top: 49px;
            font-weight: 500;
            line-height: 2rem;
            font-size: var(--h3-font-size);
        }
        .button-section{
            margin-top: 50px;
        }
        @media (max-width: 991px){
            .membership-content{
                flex-direction: column;
            }
            .membership-wrapper{
                flex-direction: column;
                max-width: 1024px;
            }
            .imageWrapper{
                max-width: 760px;
                width: 100%;
            }
            .Imagery{
                width: 100%;
                height: 500px;
            }
            .textContent {
                flex-direction: row;
                height: 500px;
                max-width: 760px;
            }
            .text-wrapper{
                padding: 30px 17px;

            }

        }
        @media(max-width: 600px){
            .membership-wrapper{
                flex-direction: column;
                max-width: 700px;
            }
            .imageWrapper{
                width: 540px;
            }
            .textContent {
                max-width: 540px;
            }

        }
        @media(max-width: 500px){
            .textContent .text-wrapper p{
                font-size: 1rem;
            }
            .textContent {
                max-width: 364px;
            }
            .imageWrapper{
                max-width: 364px;
            }
            .button-section{
                margin-top: 20px;
            }

        }
        @media (max-width: 400px){
            .textContent {
                max-width: 326px;
                height: 563px;
            }
            .imageWrapper{
                max-width: 326px;
            }

        }

        `}</style>
        </>
    )
}
export default Membership;