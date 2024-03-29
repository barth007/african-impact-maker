import Footer from "../Footer/Footer"
import Navbar from "../Header/Navbar"
import AboutSection from "./AboutSection"
import HallFame from "./HallFame"
import HomeBanner from "./HomeBanner"

const HomePage = () =>{
    return(
        <>
        <Navbar/>
        <HomeBanner/>
        <section className="HallFame-frame"><HallFame/></section>
        <AboutSection/>
        <Footer/>
        <style jsx>{`
        .HallFame-frame{
            margin-top: -49px;
        }

        `}</style>
        </>
    )
}
export default HomePage;