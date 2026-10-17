import { ResearchData } from "../Data/ResearchProjectsData";
import SemCont from "../components/TileContainer/SemCont";

export default function ResearchPage() {
    return <>
        <h1 className="pageTitle">Research</h1>
        {ResearchData.map((item, index) => <SemCont data={item} key={`${item.sem}-${index}`} />)}
    </>;
}
