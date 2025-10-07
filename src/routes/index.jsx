import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CapstonePage from "../pages/CapstonePage";
import ResearchPage from "../pages/ResearchPage";
import PeoplePage from "../pages/PeoplePage";

function RoutesHOC() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/About" Component={AboutPage} />
                <Route path="/CapstoneProjects" Component={CapstonePage}/>
                <Route path="/Research" Component={ResearchPage}/>
                <Route path="/People" Component={PeoplePage} />
                <Route exact path="/" Component={AboutPage} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesHOC;