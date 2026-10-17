import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CapstonePage from "../pages/CapstonePage";
import ResearchPage from "../pages/ResearchPage";
import ContactPage from "../pages/ContactPage";
import ExperimentsPage from "../pages/ExperimentsPage";
import PendingPage from "../pages/PendingPage";
import NotFoundPage from "../pages/NotFoundPage";
import SiteLayout from "../components/SiteLayout";

export function SiteRoutes() {
    return (
        <Routes>
            <Route element={<SiteLayout />}>
                <Route index element={<AboutPage />} />
                <Route path="About" element={<AboutPage />} />
                <Route path="CapstoneProjects" element={<CapstonePage />} />
                <Route path="Research" element={<ResearchPage />} />
                <Route path="experiments" element={<ExperimentsPage />} />
                <Route path="ExperimentsandExplorations" element={<Navigate to="/experiments" replace />} />
                <Route path="People" element={<PendingPage title="People" />} />
                <Route path="Contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default function RoutesHOC() {
    return <BrowserRouter><SiteRoutes /></BrowserRouter>;
}
