import "../pages/pages.css"
import People from "../components/People"
import TopBar from "../components/TopBar"

const PeoplePage = () => {
    return (
        <div className="page">
            <TopBar></TopBar>
            <div className="pageCont">
                <People></People>
            </div>
        </div>
    )
}

export default PeoplePage