import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function PendingPage({ title }) {
    return (
        <div className="statusPage">
            <h1 className="pageTitle">{title}</h1>
            <p>Content coming soon.</p>
            <Link className="tileButton" to="/About">Back to About</Link>
        </div>
    );
}

PendingPage.propTypes = { title: PropTypes.string.isRequired };
