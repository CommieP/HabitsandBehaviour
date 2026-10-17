import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="statusPage">
            <h1 className="pageTitle">Page not found</h1>
            <p>This page could not be found. Use the navigation above or return to About.</p>
            <Link className="tileButton" to="/About">Back to About</Link>
        </div>
    );
}
