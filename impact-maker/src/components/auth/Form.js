import flags from "../assets/homeImages/flags.jpeg"
import award2 from "../assets/homeImages/award2.png"
import React from 'react';
import Button from "../Shared/Button";
import {Link} from "react-router-dom";


const Form=({
    children,
    text,
    button_text,
    isSignIn=false,


})=>{
    const date = new Date;
  
    return(
        <>
        <section className="form__container">
            <div className="form__background">
                <div className="form__background--overlay"></div>
            </div>
            <div className="form__wrapper">
                <h1>NOMINATION PORTAL {date.getFullYear()-1}/{date.getFullYear()} CLASS</h1>
                <h3>{text} to submit an entry for the Hall-of-Fame</h3>
                <div className="main__form--background">
                    <div className="main__background">
                        <form>
                            {React.Children.map(children, (child, index)=>{
                                return <div key={index} className="input__field">{child}</div>
                            })}
                            {isSignIn ? <div className="forgot__password"><a href>Forgot Password?</a></div> : null}
                           <div className="form__button"> <Button text={button_text}/></div>
                           {isSignIn ? <div className="signup__account"><p>Don't have an account? </p><Link to="/register">Sign UP</Link></div>: <div className="signup__account"><p>I have an account? </p><Link to="/login">Sign In</Link></div>}
                        </form>
                        
                    </div>
                    
                </div>
            </div>

        </section>
        <style jsx>{`
        .form__container{
            width: 100%;
            margin: 0 auto;
        }
        .form__background{
            position: relative;
            background-image: url(${flags});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 150px;

        }
        .form__background--overlay{
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
        }
        .form__wrapper{
            max-width: 1200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items; center;
            height: auto;
            margin: 0 auto;
        }
        .form__wrapper h1{
            font-size: var(--h1-font-size);
            font-weight: 700;
            color: var( --third-primary-color);
            text-align: center;
            padding: 50px 0;

        }
        .form__wrapper h3{
            font-size: var(--h3-font-size);
            color: var( --third-primary-color);
            text-align: center;
            font-weight: 400;
        }
        .main__form--background{
            max-width: 800px;
            width: 100%;
            height: 700px;
            margin: 50px auto;
            
            position: relative;
            background-image: url(${award2});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;

        }
        .main__background{
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            height: 100%;
            backdrop-filter: blur(10px);
            box-shadow: -10px 0 10px rba(0, 0, 0, 0.1);
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 8px;
            border: 1px solid var(--second-primary-color);
        
        }
        .input__field{
            width: 100%;
            // height: 500px;
            max-width: 500px;
            // background: #fff;
            margin: 0 auto;
        }
        .main__background form{
            margin: 20px 10px 50px 10px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            max-width: 700px;
            margin: 0 auto;
            height: 550px;
            gap: 35px;
           

        }
        .form__button{
            bottom: -20px;
        }
        .forgot__password { 
            font-size: var(--normal-font-size);
            color: var(--white);
            text-align: right;
            cursor: pointer;
            width: 72%;
        }
        
        .forgot__password:hover{
            color: var(--first-primary-color);
        }
        .signup__account {
            display: flex;
            gap: 10px;
        }
        .signup__account p{
            font-size: var(--normal-font-size);
            color: var(--white);
            text-align: right;

        }
        .signup__account a{
            font-weight: 700;
            font-size: var(--normal-font-size);
            color: var(--white);
            cursor: pointer;
            text-decoration: none;
        }
        .signup__account a:hover{
            color: var(--first-primary-color);

        }
        @media (max-width: 991px){
            .form__container{
                
            }
            .main__form--background{
                max-width: 700px;
            }
            .form__wrapper h1 {
                padding: 18px 0;
            }
            .main__form--background {
                margin: 27px auto;
            }

        }
        @media (max-width: 640px){
            .form__container{
                
            }
            .main__form--background{
                max-width: 550px;
            }
            .form__wrapper h1{
                font-size: 1.5rem;

            }
            .forgot__password {
                width: 90%;
            }

        }
        @media (max-width: 500px){
            .form__container{
                
            }
            .main__form--background{
                max-width: 380px;
                height: 600px;
            }
            .form__wrapper h1{
                font-size: 1rem;

            }
            .form__wrapper h3{
                font-size: 1rem;

            }
            .input__field{
                max-width: 350px;
            }

        }
        @media (max-width: 400px){
            .form__container{
                
            }
            .main__form--background{
                max-width: 360px;
               
            }
         
            .input__field{
                max-width: 330px;
            }

        }
        @media (max-width: 360px){
            .form__container{
                
            }
            .main__form--background{
                max-width: 340px;
                
            }
            .form__wrapper h1{
                font-size: .9rem;

            }
            .form__wrapper h3{
                font-size: .9rem;

            }
            .input__field{
                max-width: 320px;
            }

        }



        `}</style>
        </>
    )
}
export default Form;