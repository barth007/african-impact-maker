import React from 'react'
import flags from "../assets/homeImages/flags.jpeg";
import Button from '../Shared/Button';

 const HumanitaranSection = ()=> {
  return (
    <>
     <section className="humanitaran-section__wrapper">
            <div className="humanitaran-background-wrapper ">
                <div className="humanitaran-overlay"></div>
                <div className="humanitaran-header">
                    <h1>Join <span> THE AFRICAN ACADEMY</span></h1>
                </div>
                        
            </div>
            <div className="humanitaran-frame__container">
                <div className='frame__wrapper'>
                    <div className='humanitaran-text__bold'>
                        <h1>AFRICAN HUMANITARIAN<br/>FESTIVAL AND AWARDS</h1>
                    </div>
                    <div className='humanitaran-text__container'>
                    <div className='humanitaran-text__regular'>
                    <p>Join <span> THE AFRICAN ACADEMY</span></p>
                        <p>to participate at the biggest 
                            annual Humanitarian Festival
                            for Impact Makers in Africa.
                            </p>
                            <p><span>NOMINATE</span> | <span>VOTE</span> | <span>PARTICIPATE</span></p>
                    </div>
                    <Button text="Membership" backgroundColor="var(--first-primary-color)" hoverColor="rgba(255,102,0,.5803921568627451)" border="none"/>
                    </div>
                    
                    
                </div>
            </div>
           
               

        </section>
        <style jsx>{`
            .humanitaran-section__wrapper{
                background-color: var(--white);
                max-width: 100%;
                height: auto;
                margin: 10% 0;
            }
            .humanitaran-background-wrapper{
                position: relative;
                background-image: url('${flags}');
                background-size: cover;
                background-position: center;
                height: 150px;
                display: flex;
                align-items: center;
                
                

            }
            .humanitaran-overlay{
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
            .humanitaran-header{
                
                max-width: 1200px;
                margin: 0 auto;
                width: 100%;
                display: flex;
                align-items: center;
                z-index: 999;
                
        
            }
            .humanitaran-header h1{
                color: var(--white);
                
                font-size: var(--h1-font-size);
                font-weight: 700;
            }
            .humanitaran-header h1 span{
                color: var(--first-primary-color);
            }
            .humanitaran-frame__container{
                max-width: 1200px;
                height: auto;
                margin: 0 auto;
                border: 1px solid var(--first-primary-color);
                border-radius:  10px 10px 0 0;
                background-color: var(--white);
                margin-bottom: 40px;
                margin-top: -1px;
            }
            .frame__wrapper{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                
            }
            .humanitaran-text__bold{
                
            }
            .humanitaran-text__bold h1{
                color: var(--third-primary-color);
                font-size: var(--biggest-font-size);
                font-weight: 700;

            }
            .humanitaran-text__container{
                width: 300px;
                height: 200px;
                padding: 10px;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
                background-color: #000;
            }
            .humanitaran-text__regular{

            }
            .humanitaran-text__regular p{
                font-size: var(--normal-font-size);
                color: var(--white);
                text-align: center;
            }
            .humanitaran-text__regular p span{
                color: var(--first-primary-color);
                font-weight: 700;
            }
            @media (max-width: 991px){
                .humanitaran-background-wrapper, .humanitaran-overlay {
                    height: 100px;
                }
                .humanitaran-header{
                    padding: 0 20px;
                }
                .humanitaran-header h1{
                    font-size: 1.5rem;
                }
               
                .humanitaran-text__bold h1{
                    font-size: 1.5rem;
                }
                .humanitaran-frame__container{
                    max-width: 760px;
                }
                

            }
            @media (max-width: 640px){
                
                .humanitaran-header h1{
                    font-size: 1.2rem;
                }
                
                .frame__wrapper{
                    flex-direction: column;
                    gap: 20px;
                }
                .humanitaran-frame__container{
                   max-width: 540px;
                }
            }
            @media (max-width: 500px){
                .humanitaran-frame__container{
                    max-width: 364px;
                    margin-bottom: 75px;
                 }
                 .humanitaran-text__bold h1{
                    font-size: 20px;
                }
            }
            @media (max-width: 400px){
                .humanitaran-frame__container{
                    max-width: 326px;
                   
                 }
                 .humanitaran-text__bold h1{
                    font-size: 20px;
                }
                .humanitaran-text__container {
                    width: 280px;
                }
            }

        `}</style>
      
    </>
  )
}
export default HumanitaranSection;