import { useState } from "react"
import TileContainer from "."

const SemCont = ({ data }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="semSection">
            <div className="semTile">
                <div className="semName">
                    {data.sem}
                </div>
                <div className="semButtonCont">
                    <button className={`expandButton ${open ? 'expand' : ''}`} onClick={() => handleOpen()}></button>
                </div>
            </div>
            <div className={`semContent ${open ? 'expand' : ''}`}>
                <TileContainer data={data.papers}></TileContainer>
            </div>
        </div>
    )
}

export default SemCont