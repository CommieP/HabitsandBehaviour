import "../../components/components.css";

const Tile = ({ title, author, url }) => {
    const handleClick = () => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="tile">
            <div className="tileAccent"></div>
            <div className="tileTitle">
                {title}
            </div>
            <div className="tileSubTitle">
                {author}
            </div>
            <button className="tileButton" onClick={handleClick}>
                View
            </button>
        </div>
    );
}

export default Tile;
