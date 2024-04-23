import "../pages/pages.css"
import { ResearchData } from "../Data/ResearchProjectsData"
import TileContainer from "../components/TileContainer"
import SemCont from "../components/TileContainer/SemCont"

const ResearchPage = () => {
    return(
        <div className="page">
            <div className="pageTitle">Research</div>
            {ResearchData.map((item, index) => (
                <SemCont data={item} key={index}></SemCont>
            ))}
            
        </div>
    )
}

export default ResearchPage