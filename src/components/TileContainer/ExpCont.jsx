import "../../components/components.css";
import Tile2 from "./Tile2";

const ExpCont = ({ data }) => {

    return (
        <div className="tileCont">
            {data.map((item, index) => (
                <Tile2 title={item.title} subTitle={item.subTitle} src = {item.src} key={index}></Tile2>
            ))}
        </div>
    );
};

export default ExpCont;
