import Footer from "../Footer/Footer"
import Membership from "./Membership"
import Navbar from "../Header/Navbar"
import AboutSection from "./AboutSection"
import HallFame from "./HallFame"
import HomeBanner from "./HomeBanner"
import Hightlight from "./Highlight"
import GuideSection from "./GuideSection"

const HomePage = () =>{
    return(
        <>
        <Navbar/>
        <HomeBanner/>
        <section className="HallFame-frame"><HallFame/></section>
        <AboutSection/>
        <Membership/>
        <Hightlight/>
        <GuideSection/>
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