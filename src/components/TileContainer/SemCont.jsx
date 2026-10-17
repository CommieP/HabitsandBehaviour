import PropTypes from "prop-types";
import TileContainer from ".";
import { paperType } from "../../types";

export default function SemCont({ data }) {
    return (
        <details className="semSection">
            <summary className="semTile">
                <h2 className="semName">{data.sem}</h2>
                <span className="expandButton" aria-hidden="true" />
            </summary>
            <div className="semContent"><TileContainer data={data.papers} headingLevel={3} /></div>
        </details>
    );
}

SemCont.propTypes = { data: PropTypes.shape({ sem: PropTypes.string.isRequired, papers: PropTypes.arrayOf(paperType).isRequired }).isRequired };
