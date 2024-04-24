import Footer from "../Footer/Footer"
import Membership from "./Membership"
import Navbar from "../Header/Navbar"
import HallFame from "./HallFame"
import HomeBanner from "./HomeBanner"
import Hightlight from "./Highlight"
import GuideSection from "./GuideSection"
import Advert from "./Advert"
import FlagSection from "./FlagSection"
import HumanitaranSection from "./HumanitaranSection"

const HomePage = () =>{
    return(
        <>
        <Navbar/>
        <HomeBanner/>
        <section className="HallFame-frame"><HallFame/></section>
        <FlagSection/>
        <Membership/>
        <Hightlight/>
        <GuideSection/>
        <HumanitaranSection/>
        <Advert/>
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