import "../../components/components.css";
import Tile from "./Tile";


const TileContainer = ({ data }) => {

    return (
        <div className="tileCont">
            {data.map((item, index) => (
                <Tile title={item.title} author={item.title} url = {item.url} key={index}></Tile>
            ))}
        </div>
    );
};

export default TileContainer;
