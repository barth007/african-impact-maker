import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import menu from "../assets/icon/nav/menu.svg";
import close from "../assets/icon/nav/close.svg";
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
    return(
        <>
        <header>
            <nav>
        
    {isShow && (<ul className="sidebar"> 
                    <li onClick={closeSideBar}><a><FontAwesomeIcon  className='timesIcon' icon={faTimes} /></a></li>  
                     <li><Link to="/about" className='sidebar-color'>About</Link></li>
                     <li><Link to="/hall_of_fame" className='sidebar-color'>Hall of Fame</Link></li>
                     <li><Link to="/membership" className='sidebar-color'>Membership</Link></li>
                     <li><Link to="/social_impact" className='sidebar-color'>Social Impact</Link></li>
                     <li><Link to="/stories" className='sidebar-color'>Stories</Link></li>
                     <li><Link to="/about" className='sidebar-color'>Take Action</Link></li>
                 </ul>)
                }
                <ul>
                    <li ><Link to="/"><img className="impact-logo" src={logo} alt="Impact makers"/></Link></li>
                    <li className='hideOnMobile'><Link ClassName="active" to="/login">About</Link></li>
                    <li className='hideOnMobile'><Link activeClassName="active" to="/hall_of_fame">Hall of Fame</Link></li>
                    <li className='hideOnMobile'><Link activeClassName="active" to="/membership">Membership</Link></li>
                    <li className='hideOnMobile'><Link activeClassName="active" to="/social_impact">Social Impact</Link></li>
                    <li className='hideOnMobile'><Link to="/stories">Stories</Link></li>
                    <li className='hideOnMobile'><a href=""><Button  onClick={handleclick} text="Take action"/></a></li>
                    <li className='MenuButton' onClick={showSideBar }><a><img src={menu}/></a></li>
                </ul>
                
            </nav>
        </header>
      

            <style jsx>{`
            header{
                top: 0;
                position: sticky;   
                // background-color: var(--white);
                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(10px);
                box-shadow: -10px 0 10px rba(0, 0, 0, 0.1);
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
                    height: 50px;
                }
            }
            
            `}</style>
        </>
    )

}
export default Navbar;