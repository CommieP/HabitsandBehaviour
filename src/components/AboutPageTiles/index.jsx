import PropTypes from "prop-types";
import { imageContentType } from "../../types";
import ResponsiveImage from "../ResponsiveImage";
import "../../components/components.css";


export const AboutPageIntro = () => {
    return (
        <section className="aboutPageIntro">
            <h1 className="aboutPageHeader">
                Habit & Behaviour
            </h1>
            <p className="aboutPageSubHeader">
                A Trans Disciplinary Research Lab
            </p>
            <p className="aboutPageIntroText">
                The Transdisciplinary research (TDR) lab is dedicated to exploring the complex connections between habit and behavior. The lab brings the creativity of students in their respective domains and find applications into the areas of Behavioral Sciences.
                Projects specifically focus on understanding behavioral patterns, their psychological and environmental influences, and strategies to promote change. The TDR-lab aims to integrate the perspectives from design, psychology, technology, and social sciences. 
            </p>
        </section>
    );
};

export const AboutPageTile = ({reverse, data}) => {
    return (
        <section className={`aboutPageTile ${reverse ? 'reverse' : ''}`}>
            <div className="aboutPageContent">
                <h2 className="aboutPageTileTitle">{data.title}</h2>
                <p>{data.body}</p>
            </div>
            <div className="aboutPageImgCont">
                <ResponsiveImage src={data.imgSrc} alt={data.title} className="aboutPageImg" sizes="(max-width: 48rem) 100vw, 45vw" />
            </div>
        </section>
    )
}


AboutPageTile.propTypes = { reverse: PropTypes.bool, data: imageContentType.isRequired };
