import AU from "../assets/homeImages/AU.png"
import AIM from "../assets/homeImages/AIM.png"
import award2 from "../assets/homeImages/award2.png"
import elder from "../assets/homeImages/elder.jpeg"
import bar from "../assets/homeImages/bar.png"

const HighlightCards = ({ image, text }) => {
    const images = {
        "AU": AU,
        "AIM": AIM,
        "award2": award2,
        "elder": elder
    };


    return (
        <>
            <div className="card-container" style={{ backgroundImage: `url(${images[image]})`, backgroundSize: "contain" }}>
                <div className="card-inner">
                    <div className="overlays">
                        <p>{text}</p>
                    </div>

                </div>
            </div>
           
            <style jsx>{`
        .card-container{
            width: 200px;
            height: 200px;
            border: 1px solid var( --first-primary-color);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            position: relative;
            cursor: pointer;
            
            

        }
        
        // .card-inner{
        //     background-image: url(${image});
        //     background-repeat: no-repeat;
        //     position: center;
        //     background-size: contain;
        //     position: relative;
        //     height: 200px;
        }
        .overlays{
            position: absolute;
            top: 30%;
            left: 0;
            max-width: 100%;
            height: auto;
            background-color: rgba(0, 0, 0, 0.6);
            display: none;
            opacity: 0;
            transition: opacity 0.5s;
        }
        .card-container .overlays {
            // transition: all .5s ease;
            display: flex; 
            justify-content: center; 
            align-items: center; 
            opacity: 1;
            
        }
        .overlays p{
            font-size: var(--normal-font-size);
            color: var(--white);
            padding: 10px;
        }
        @media (max-width: 500px){
            .card-container {
                width: 180px;
                height: 180px;
            }
            .overlays{
                height: 120px;
                top: 20%;
            }
        }
        @media (max-width: 400px){
            .card-container {
                width: 165px;
                height: 165px;
            }
        }

        `}</style>
        </>
    )
}




const Hightlight = () => {
    const content = [
        {
            text: "AU adopts Agenda 2063 as Africa’s roadmap",
            src: "AU",
        },
        {
            text: "The Africa Academy pioneers the Africa Humanitarian Hall of Fame in support of AU Agenda 2063",
            src: "AIM",
        },
        {
            text: "Africa Must be built by Africans – P.L.O Lumumba",
            src: "elder",
        },
        {
            text: "Road to Africa Humanitarian Hall of Fame, 2023 Class",
            src: "award2",
        },
    ]
    
    return (
        <>
            <div className="highlight-container">
                <div className="heading"><h1>Highlights</h1></div>
                <div className="highlight-wrapper">
                    <div className="card-list">{content.map((element, index) =>{
                        return(<div className="image__bar">
                            <HighlightCards key={index} text={element.text} image={element.src} />
                            <img src={bar} alt="bar.png"/>
                        </div>)
                    })}</div>

                </div>
            </div>
            <style jsx>{`
        .heading{
            margin: 30px 0;
        }
        .heading h1{
            font-size: var(--h1-font-size);
            font-weight: 700;
            text-align: center;
            color: var(--third-primary-color);

        }
        .image__bar{
            
            width: 203px;
            height: auto;
        }
        .image__bar img{
            width: 100%;
        }
        .highlight-container{
            width: 100%;
            background-color: #e3e3e3;
            padding: 30px 0;
        }
        .highlight-wrapper{
            max-width: 1200px;
            margin: 0 auto;
        }
        .card-list{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            // padding: 0px 10px;
        }
        @media(max-width: 500px){
            .image__bar{
                width:183px;
            }
        }
        @media (max-width: 400px){
            .image__bar{
                width: 168px;
            }
            .image__bar img{
                width: 100%;
            }
        }
        `}</style>
        </>
    )
}
export default Hightlight;