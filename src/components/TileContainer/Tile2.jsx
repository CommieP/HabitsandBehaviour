import "../../components/components.css";
const Tile2 = ({ title, subTitle, src }) => {
    return (
        <div className="tile">
            <div className="tileAccent"></div>
            <div className="tileImageCont">
                <img src={src} alt="" className="tileImage"/>
            </div>
            <div className="tileTitle">
                {title}
            </div>
            <div className="tileSubTitle">
                {subTitle}
            </div>
            <button className="tileButton">View</button>
        </div>
    )
}

export default Tile2