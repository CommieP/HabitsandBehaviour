import "../pages/pages.css"
import { ResearchData } from "../Data/ResearchProjectsData"
import TileContainer from "../components/TileContainer"
import SemCont from "../components/TileContainer/SemCont"
import TopBar from "../components/TopBar"

const ResearchPage = () => {
    return (
        <div className="page">
            <TopBar></TopBar>
            <div className="pageCont">
                <div className="pageTitle">Research</div>
                {ResearchData.map((item, index) => (
                    <SemCont data={item} key={index}></SemCont>
                ))}
            </div>
        </div>
    )
}

export default ResearchPage