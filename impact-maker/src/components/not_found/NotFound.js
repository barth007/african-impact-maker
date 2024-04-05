import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import notFound from "../assets/not_found/notFound.gif"



const NotFound = ()=>{
    
  
    return(
        <>
          <Navbar/>
            <section  className="notFound" style={{ backgroundImage: `url(${notFound})` }}>
                {/* <img src={notFound}/>
                */}

            </section>
           <Footer/>
            <style jsx>{`
            .notFound{
                width: 100wh;
                height: 100vh;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }
           

            `}</style>
        </>
    );
}

export default NotFound;