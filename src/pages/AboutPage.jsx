import { AboutPageIntro, AboutPageTile } from "../components/AboutPageTiles";
import Gallery from "../components/Gallery";
import { AboutData } from "../Data/AboutData";

export default function AboutPage() {
    return <>
        <Gallery />
        <AboutPageIntro />
        {AboutData.map((item, index) => <AboutPageTile reverse={index % 2 === 1} data={item} key={item.title} />)}
    </>;
}
