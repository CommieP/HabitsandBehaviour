import "../pages/pages.css"
import { CapstoneData } from "../Data/CapstoneProjectsData"
import TileContainer from "../components/TileContainer"

const CapstonePage = () => {
    return(
        <div className="page">
            <div className="pageTitle">Capstone Projects</div>
            <TileContainer data={CapstoneData}></TileContainer>
        </div>
    )
}

export default CapstonePage