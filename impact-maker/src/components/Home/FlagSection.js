import flags from "../assets/homeImages/flags.jpeg";
import Button from "../Shared/Button";

const FlagSection = () =>{
    return (
        <>
        <section className="about-section__wrapper">
            <div className="background-wrapper ">
                <div className="overlay"></div>
                <div className="about-header">
                    <h1>About <span>THE AFRICA ACADEMY</span></h1>
                </div>
                
                
                
            </div>
            <div className="about-description">
                    <p>The Africa Academy of Impact Makers, also called The Africa Academy, is a spotlight Community that
                        represents a diversity of Impact Makers - the voices of Humanitarian Stakeholders; African Visionaries;
                        CSR Funders, and other Development Partners working to achieve the Africa we want. Membership comes
                        with its benefits; joining The Africa Academy opens all kinds of doors.
                    </p>
                    <div className="about-button"><Button text="View More" backgroundColor="var(--first-primary-color)" hoverColor="rgba(255,102,0,.5803921568627451)" border="none"/></div>
                </div>
               

        </section>
        <style jsx>{`
            .about-section__wrapper{
                background-color: #e3e3e3;
                max-width: 100%;
                height: auto;
                margin: 10% 0;
            }
            .background-wrapper{
                background-image: url('${flags}');
                background-size: cover;
                background-position: center;
                height: 150px;
                position: relative;
                display: flex;
                justify-content: center; 
                align-items: center; 
                

            }
            .overlay{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 150px;
                background-color: rgba(0, 0, 0, 0.6);
                
                display: flex;
                justify-content: center; 
                align-items: center; 
                
            }
            .about-header{
                
                max-width: 1200px;
                margin: 0 auto;
                width: 100%;
                z-index: 999;
                // text-align: center;
                
        
            }
            .about-header h1{
                color: var(--white);
                
                font-size: var(--h1-font-size);
                font-weight: 700;
            }
            .about-header h1 span{
                color: var(--first-primary-color);
            }
            .about-description{
                background-color: #e3e3e3;
                max-width: 1200px;
                margin: 20px auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-bottom: 50px;
            }
            .about-description p{
                font-size: var(--h3-font-size);
                color: var( --third-primary-color);
            }
            .about-button{
                margin-top: 20px;

            }
            @media (max-width: 991px){
                .about-header{
                    padding: 0 20px;
                }
                .about-header h1{
                    font-size: 1.5rem;
                }
                .about-description{
                    padding: 0 20px;
                    padding-bottom: 20px;
                }
                .background-wrapper, .overlay{
                    height: 100px;
                }
                  
               

            }
            @media (max-width: 600px){
                .about-description p{
                    font-size: 1rem;
                }
                .about-header h1{
                    font-size: 1.2rem;
                }
                

            }

        `}</style>
        </>
    )
}
export default FlagSection;