import "../../components/components.css";
const Tile = ({ title, author }) => {
    return (
        <div className="tile">
            <div className="tileAccent"></div>
            <div className="tileTitle">
                {title}
            </div>
            <div className="tileSubTitle">
                {author}
            </div>
            <button className="tileButton">View</button>
        </div>
    )
}

export default Tile