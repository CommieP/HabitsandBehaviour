import PropTypes from "prop-types";
import Tile from "./Tile";
import { paperType } from "../../types";

export default function TileContainer({ data, headingLevel = 2 }) {
    return <div className="tileCont">
        {data.map((item, index) => <Tile {...item} headingLevel={headingLevel} key={item.url ?? `${item.title}-${index}`} />)}
    </div>;
}

TileContainer.propTypes = { data: PropTypes.arrayOf(paperType).isRequired, headingLevel: PropTypes.oneOf([2, 3]) };
