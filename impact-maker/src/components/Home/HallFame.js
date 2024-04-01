import au from "../assets/homeImages/au.png";

const HallFame = ()=>{
    return(
        <>
            <section className="fame-container">
                <div className="fame-wrapper">
                    <div className="agenda-container">
                        <img src={au} alt="Au Agenda"/>
                    </div>
                    <div className="africa-container">
                        <h3>AFRICA IMPACT <br/>HALL-OF-FAME</h3>
                        <div className="fine-text">
                            <p>
                               <marquee behaviour="scroll" direction="left" scrollamount="5">
                               A Class for The Best of the Best
                               </marquee>
                            </p>
                        </div>
                    </div>
                    <div className="au-description">
                    <p>
                        A Program for the
                        African Union (AU)
                        Agenda 2063 with
                        participation across
                        54 African
                        Countries
                    </p>
                    </div>

                </div>
            </section>
            <style jsx>{`
            .fame-container{
                max-width: 1200px;
                height: auto;
                margin: 0 auto;
                border: 1px solid var(--first-primary-color);
                border-radius:  10px 10px 0 0;
                background-color: var(--white);
            }
            .fame-wrapper{
                display: flex;
                justify-content: space-around;
                gap: 50px;
                padding: 50px 30px;
                align-items: center;

            }
            .agenda-container, .africa-container, .au-description{
                max-width: 350px;
                padding: 10px;
            }
            .agenda-container, .au-description{
                border: 1px solid #000;
            }
            .agenda-container img{
                width: 100%;
            }
            .africa-container h3{
                font-size: var(--medium-font-size);
                color: var(--third-primary-color);
                font-weight: 700;
                text-align: center;

            }
            .fine-text{
                width:235px;
                margin: 0 auto;
                padding: 10px 5px;
                background-color: #73706F;
            }
            .fine-text p{
                font-size: var(--normal-font-size);
                font-style: italic;
                color: var(--white);
                text-align: center;
            }
            .au-description p{
                width: 200px;
                padding: 30px;
                color: var(--third-primary-color);
                font-size: var(--normal-font-size);
                font-weight: 700;
                text-align: center;
            }
            @media (max-width: 991px){
                .fame-wrapper{
                    flex-wrap: wrap;
                }
                .fame-container{
                    max-width: 800px;
                }

            }
            @media (max-width: 640px){
                .fame-container{
                    max-width: 550px;
                }
            }
            @media (max-width: 500px){
                .fame-container{
                    max-width: 366px;
                }

            }
            @media (max-width: 400px){
                .fame-container{
                    max-width: 324px;
                }
                .africa-container h3 {
                    font-size: 1.6rem;
                }


            }

            `}</style>
        </>
    )
}
export default HallFame;