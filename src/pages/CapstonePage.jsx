import "../pages/pages.css"
import { CapstoneData } from "../Data/CapstoneProjectsData"
import TileContainer from "../components/TileContainer"
import TopBar from "../components/TopBar"

const CapstonePage = () => {
    return (
        <div className="page">
            <TopBar></TopBar>
            <div className="pageCont">
                <div className="pageTitle">Capstone Projects</div>
                <TileContainer data={CapstoneData}></TileContainer>
            </div>
        </div>
    )
}

export default CapstonePage