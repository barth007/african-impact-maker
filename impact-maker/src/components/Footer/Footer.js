import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube,  faFacebook, faXTwitter, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import footerLogo from "../assets/logos/footerLogo.png";

const Footer=( )=>{
    const year = new Date();
    return (
        <>
            <footer>
                <div className="footer-wapper">
                    <div className="section-footer-wrapper">
                        <div>
                            <div className='round-div'>
                                <img className="footer-logo" src={footerLogo}/>
                            </div>
                            <div className='footer-about'>
                                <p>Africa Impact Hall-of-Fame honors the most impactful changemakers in Africa, celebrating their contributions to the continent's rise.</p>
                            </div>
                           
                        </div>
                        <div className='socials-wrapper'>
                            <div className='social-media-icon'><FontAwesomeIcon icon={faLinkedin} className="icon" /></div>
                            <div className='social-media-icon'><FontAwesomeIcon icon={faXTwitter} className="icon" /></div>
                            <div className='social-media-icon'><FontAwesomeIcon icon={faInstagram} className="icon" /></div>
                            <div className='social-media-icon'><FontAwesomeIcon icon={faFacebook} className="icon" /></div>
                            <div className='social-media-icon'><FontAwesomeIcon icon={faYoutube} className="icon" /></div>
                        </div>

                    </div>
                    <div className='horizontal-line'></div>
                    <div className='footer-links-wrapper'>
                        <div className='footer-links'>
                            <h2>THE AFRICA ACADEMY</h2>
                            <ul>
                                <li>About</li>
                                <li>Faculty</li>
                                <li>AU Agenda 2063</li>
                                <li>Africa Humanitarian Hall of Fame</li>
                                <li>Africa Humanitarian Festival and Awards</li>
                                <li>Frequently Asked Questions (FAQs)</li>
                            </ul>
                        </div>
                        <div className='footer-links'>
                            <h2>MEMBERSHIP</h2>
                            <ul>
                                <li>Join</li>
                                <li>Voting Member</li>
                                <li>Associate Member</li>
                                <li>Professional Member</li>
                                
                            </ul>
                        </div>
                        <div className='footer-links'>
                            <h2>OPPORTUNITIES</h2>
                            <ul>
                                <li>Donate</li>
                                <li>Volunteer</li>
                                <li>Adopt a Campaign</li>
                                <li>Share Your Story</li>
                                <li>Partner with Us</li>
                                <li>Awards and Categories</li>
                            </ul>
                        </div>
                        <div className='footer-links'>
                            <h2>QUICK LINKS</h2>
                            <ul>
                                <li>Speeches</li>
                                <li> Highlights</li>
                                <li>News</li>
                                <li>Contact Us</li>
                                
                            </ul>
                        </div>
                        
                    </div>
                    <div className='horizontal-line'></div>
                    <div className='copyright__section'>
                        <div className='round-div-small'><img src={footerLogo}/></div>
                        <div className='copyright'><small>Copyright &copy;2023 - {year.getFullYear()} Africa Impact Makers. | All Rights Reserved</small></div>
                    </div>

                </div>

            </footer>
            <style jsx>{`
            footer {
                position: relative;
                bottom: 0;
                width: 100%;
                height: auto;
                // margin-bottom: -90%;
                background-color: var(--second-primary-color);
                z-index: 999;
            }
            .footer-wapper{
            //    max-width: 1200px;
                 
            }
            .section-footer-wrapper{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 10px;
                padding: 0 70px;

            }
            .section-footer-wrapper div:first-child{
                margin-right: auto;
            }
            .round-div{
                width: 130px;
                height: 130px;
                background-color: var(--white);
                border-radius: 50%;
            }
            .footer-logo{
                width: 100%;
                height: 100%;
            }
            .footer-about{
                max-width: 300px; 
            }
            .footer-about p{
                font-size: var(--normal-font-size);
                color: var(--white);
                padding: 10px 0;
            }
            .social-media-icon{
                display: flex;
                justify-content: center; 
                align-items: center;
                width: 60px;
                height: 60px;
                background-color: var(--white);
                border-radius: 50%;
                border: 1px solid var(--first-primary-color);
                cursor: pointer;
            }
           
            .icon{
                font-size: var(--font-size-icon);
                color: var(--second-primary-color);
                transition: transform 0.3s ease;
               
            }
            .icon:hover{
                color: var(--first-primary-color);
                transform: scale(1.2); 
               
            }
            .socials-wrapper{
                display: flex;
                gap: 10px;
            }
            .horizontal-line{
                border: 0.01rem solid var(--first-primary-color);
            }
            .footer-links-wrapper{
                display: flex;
                justify-content: space-between;
                padding: 10px 70px;
                margin-top: 10px;

            }
            .footer-links{
                display: flex;
                flex-direction: column;
                gap: 50px;
            }
            .footer-links h2, .footer-links ul li{
                color: var(--white);
            }
            .footer-link h2{
                font-size: var(--h2-font-size);
            }
            .footer-links ul li{
                cursor: pointer;
                list-style: none;
                transition: transform 0.3s ease;
                font-size: (--normal-font-size);
            }
            .footer-links ul li:hover{
                color: var(--first-primary-color);
                transform: scale(1.2); 
            }
            .copyright__section{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 20px;
                padding: 20px 70px;
            }
            .round-div-small{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: var(--white);
            }
            .round-div-small img{
                width: 100%;
                height: 100%;
            }
            .copyright small{
                font-size: var(--small-font-size);
                color: var(--white);
                
            }
            @media (max-width: 991px){
                .round-div{
                    width: 60px;
                    height: 60px;
                    
                }
                .footer-about p{
                    font-size: 12px;
                }
                .section-footer-wrapper{
                   
                    padding: 10px 20px;
                    justify-content: flex-end;
                   
                }
                
                .social-media-icon{
                    width: 30px;
                    height: 30px;
                }
                .icon{
                    font-size: var(--font-icon-mobile-size);
                    transition: transform 0.3s ease;

                }
                .icon:hover{
                    color: var(--first-primary-color);
                    transform: scale(1.2); 
                   
                }
                .footer-links-wrapper{
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding: 10px 20px;
                    gap: 30px;

                }
                .footer-links{
                    gap: 25px;
                }
                .footer-links ul li{
                    font-size: 12px;
                }
                .footer-links h2{
                    font-size: var(--normal-font-size);
                }
                .copyright__section{
                    justify-content: space-around;
                    gap: 0;
                }
                .copyright small{
                    font-size: 0.5rem;
                }
                .footer-links ul li:hover{
                   
                    transform: scale(1.1); 
                }
                
            }
            @media (max-width: 500px){
                .section-footer-wrapper{
                    display: flex;
                    flex-direction: column;
                    padding: 10px 20px;
                    justify-content: flex-end;
                    align-items: start;
                }
                .footer-links-wrapper{
                    flex-wrap: no-wrap;
                    flex-direction: column;
                }
                .copyright__section{
                    justify-content: flex-start;
                    gap: 10px;
                    padding: 10px 20px;
                }
                .copyright small{
                    font-size: 0.5rem;
                }
            }
            

            `}</style>
        </>
    )
}
export default Footer;