import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import { Pages } from "../Data/Pages";
import "./components.css";
import "../pages/pages.css";

export default function SiteLayout() {
    const { pathname } = useLocation();
    const mainRef = useRef(null);
    const previousPath = useRef(pathname);

    useEffect(() => {
        const path = pathname.replace(/\/$/, "").toLowerCase();
        const page = Pages.find(item => item.path.toLowerCase() === path);
        document.title = `${page?.title ?? (path === "" ? "About" : "Page not found")} | Habit & Behaviour`;
        if (previousPath.current !== pathname) {
            window.scrollTo(0, 0);
            mainRef.current?.focus({ preventScroll: true });
            previousPath.current = pathname;
        }
    }, [pathname]);

    return (
        <>
            <a className="skipLink" href="#main-content">Skip to content</a>
            <TopBar key={pathname} />
            <main id="main-content" className="pageCont" ref={mainRef} tabIndex={-1}>
                <Outlet />
            </main>
        </>
    );
}
