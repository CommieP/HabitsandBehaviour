import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function TopBarButton({ text, to, onClick }) {
    return <NavLink to={to} end className={({ isActive }) => `topbarButton ${isActive ? "active" : ""}`} onClick={onClick}>{text}</NavLink>;
}

TopBarButton.propTypes = { text: PropTypes.string.isRequired, to: PropTypes.string.isRequired, onClick: PropTypes.func };
