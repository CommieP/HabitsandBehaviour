import { CapstoneData } from "../Data/CapstoneProjectsData";
import TileContainer from "../components/TileContainer";

export default function CapstonePage() {
    return <>
        <h1 className="pageTitle">Capstone Projects</h1>
        <TileContainer data={CapstoneData} />
    </>;
}
