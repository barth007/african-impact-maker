import React, {useState, useEffect} from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";
import menu from "../assets/icon/nav/menu.svg";
import logo from "../assets/logos/logo.png";
import Button from '../Shared/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ()=>{
    const [isShow, setShow] = useState(false);
    const showSideBar=(event)=>{
        event.stopPropagation();
        setShow(!isShow);
        if (!isShow){
            document.body.classList.add('no-scroll');
        } else{
            document.body.classList.remove('no-scroll')
        }
    }
    const closeSideBar = ()=>{
        setShow(false);
        document.body.classList.remove('no-scroll');
    }
  
    const navigate = useNavigate();
    const handleclick = ()=>{
        navigate('/login')
    }
    useEffect(() => {
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);
    return(
        <>
        <header>
            <nav>
        
    {isShow && (<ul className="sidebar"> 
                    <li onClick={closeSideBar}><a><FontAwesomeIcon  className='timesIcon' icon={faTimes} /></a></li>  
                     <li><NavLink to="/about" className='sidebar-color'>About</NavLink></li>
                     <li><NavLink to="/hall_of_fame" className='sidebar-color'>Hall of Fame</NavLink></li>
                     <li><NavLink to="/membership" className='sidebar-color'>Membership</NavLink></li>
                     <li><NavLink to="/social_impact" className='sidebar-color'>Social Impact</NavLink></li>
                     <li><NavLink to="/stories" className='sidebar-color'>Stories</NavLink></li>
                     <li ><a href=""><Button  onClick={handleclick} text="Take action" backgroundColor="var(--first-primary-color)" hoverColor="rgba(255,102,0,.5803921568627451)" border="none"/></a></li>
                 </ul>)
                }
                <ul>
                    <li ><Link to="/"><img className="impact-logo" src={logo} alt="Impact makers"/></Link></li>
                    <li className='hideOnMobile'><NavLink  to="/about">About</NavLink></li>
                    <li className='hideOnMobile'><NavLink  to="/hall_of_fame">Hall of Fame</NavLink></li>
                    <li className='hideOnMobile'><NavLink  to="/membership">Membership</NavLink></li>
                    <li className='hideOnMobile'><NavLink  to="/social_impact">Social Impact</NavLink></li>
                    <li className='hideOnMobile'><NavLink to="/stories">Stories</NavLink></li>
                    <li className='hideOnMobile'><a href=""><Button  onClick={handleclick} text="Take action" backgroundColor="var(--first-primary-color)" hoverColor="rgba(255,102,0,0.5803921568627451)" border="none"/></a></li>
                    <li className='MenuButton' onClick={showSideBar }><a><img src={menu}/></a></li>
                </ul>
                
            </nav>
        </header>
      

            <style jsx>{`
            header{
                top: 0;
                position: sticky;   
                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
                background-color: rgba(255, 255, 255, 0.5);
                backdrop-filter: blur(16px);
                z-index: 9999;

            }
            header nav ul{
                width: 100%;
                list-style: none;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
            header nav li{
                height: 80px;
            }
            nav a{
                height: 100%;
                padding: 0 30px;
                text-decoration: none;
                display: flex;
                align-items: center;
                color: var(--third-primary-color);
                font-size: var(--normal-font-size);
            }
            header nav a:hover{
                color: var(--first-primary-color);
            }
            .active{
                color: var(--first-primary-color);
            }
            nav li:first-child{
                margin-right: auto;
            }
            .sidebar{
                position: fixed;
                top: 0;
                right: 0;
                height: 100vh;
                width: 250px;
                z-index: 999;
                background-color: var(--sidebar-background-color);
                backdrop-filter: blur(10px);
                box-shadow: -10px 0 10px rba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
            }
            .siderbar li{
                width: 100%;
            }
            .MenuButton{
                display: none;
            }
            .impact-logo{
                width: 100%;
                height: 100%;
            }
            .sidebar-color:hover{
                color: var(--first-primary-color);
            }
            .sidebar-color{
                color: white;
            }
            @media (max-width: 991px){
                .hideOnMobile{
                    display:none;
                }
                .MenuButton{
                    display: block;
                }
                .timesIcon{
                    font-size: 2.5rem;
                    color: var(--white);
                }
                .no-scroll {
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                    height: 100%;
                }
            }
            @media (max-width: 500px){
                .sidebar{
                    width: 100%;
;                }
                header nav li{
                    height: 70px;
                }
            }
            
            `}</style>
        </>
    )

}
export default Navbar;