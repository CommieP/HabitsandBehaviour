import { ExperimentsData } from "../Data/ExperimentsData";
import ExpCont from "../components/TileContainer/ExpCont";

export default function ExperimentsPage() {
    return <>
        <h1 className="pageTitle">Experiments and Explorations</h1>
        {ExperimentsData.map(section => (
            <section key={section.id} className="experimentSection" aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`} className="experimentSectionTitle">{section.title}</h2>
                <ExpCont data={section.items} headingLevel={3} actionLabel="Try it" className="experimentGrid" />
            </section>
        ))}
    </>;
}
