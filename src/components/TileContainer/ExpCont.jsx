import PropTypes from "prop-types";
import Tile2 from "./Tile2";

export default function ExpCont({ data, headingLevel = 2, actionLabel = "View", className = "" }) {
    return <div className={`tileCont ${className}`}>
        {data.map(item => <Tile2 {...item} headingLevel={headingLevel} actionLabel={actionLabel} key={item.url ?? item.title} />)}
    </div>;
}

ExpCont.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(Tile2.propTypes)).isRequired,
    headingLevel: PropTypes.oneOf([2, 3]),
    actionLabel: PropTypes.string,
    className: PropTypes.string,
};
