import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function TopBarLogo({ onClick }) {
    const { pathname } = useLocation();
    const isHome = pathname === "/" || /^\/about\/?$/i.test(pathname);
    return <Link className="topbarLogo" to="/About" onClick={onClick} aria-current={isHome ? "page" : undefined}>Habit and Behaviour</Link>;
}

TopBarLogo.propTypes = { onClick: PropTypes.func };
