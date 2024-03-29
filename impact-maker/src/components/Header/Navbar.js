import React, {useState} from 'react'
import menu from "../assets/icon/nav/menu.svg";
import close from "../assets/icon/nav/close.svg";
import logo from "../assets/logos/logo.png";


const Navbar = ()=>{
    const [isShow, setShow] = useState(false);
    const showSideBar=(event)=>{
        event.stopPropagation();
        setShow(!isShow);
    }
    const closeSideBar = ()=>{
        setShow(isShow);
    }
    return(
        <>
        <header>
            <nav>
        
    {isShow && (<ul className="sidebar"> 
                    <li onClick={closeSideBar}><a href=""><img src={close}/></a></li>  
                     <li><a href="">About</a></li>
                     <li><a href="">Hall of Fame</a></li>
                     <li><a href="">Membership</a></li>
                     <li><a href="">Social Impact</a></li>
                     <li><a href="">Take Action</a></li>
                     <li><a href="">Stories</a></li>
                 </ul>)
                }
                <ul>
                    <li ><a href=""><img className="impact-logo" src={logo} alt="Impact makers"/></a></li>
                    <li className='hideOnMobile'><a href="">About</a></li>
                    <li className='hideOnMobile'><a href="">Hall of Fame</a></li>
                    <li className='hideOnMobile'><a href="">Membership</a></li>
                    <li className='hideOnMobile'><a href="">Social Impact</a></li>
                    <li className='hideOnMobile'><a href="">Take Action</a></li>
                    <li className='hideOnMobile'><a href="">Stories</a></li>
                    <li className='MenuButton' onClick={showSideBar }><a href=""><img src={menu}/></a></li>
                </ul>
                
            </nav>
        </header>
      

            <style jsx>{`
            header{
                background-color: var(--white);
                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);

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
                color: black;
                font-size: var(--normal-font-size);
            }
            header nav a:hover{
                background-color: var(--nav-hover-color);
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
            @media (max-width: 991px){
                .hideOnMobile{
                    display:none;
                }
                .MenuButton{
                    display: block;
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