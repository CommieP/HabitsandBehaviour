import { AboutPageIntro, AboutPageTile } from "../components/AboutPageTiles"
import Gallery from "../components/Gallery"
import "../pages/pages.css"
import { AboutData } from "../Data/AboutData"
import TopBar from "../components/TopBar"

const AboutPage = () => {
    return (
        <div className="page">
            <TopBar></TopBar>
            <div className="pageCont">
                <Gallery></Gallery>
                <AboutPageIntro></AboutPageIntro>
                {AboutData.map((item, index) => (
                    <AboutPageTile reverse={index % 2 === 1 ? true : false} data={item} key={index}></AboutPageTile>
                ))}
            </div>
        </div>
    )
}

export default AboutPage