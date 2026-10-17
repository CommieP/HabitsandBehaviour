import React, { useState } from "react";
import "../../components/components.css";


export const AboutPageIntro = () => {
    return (
        <div className="aboutPageIntro">
            <div className="aboutPageHeader">
                Habit & Behaviour
            </div>
            <div className="aboutPageSubHeader">
                A Trans Disciplinary Research Lab
            </div>
            <div className="aboutPageIntroText">
                The Transdisciplinary research (TDR) lab is dedicated to exploring the complex connections between habit and behavior. The lab brings the creativity of students in their respective domains and find applications into the areas of Behavioral Sciences.
                Projects specifically focus on understanding behavioral patterns, their psychological and environmental influences, and strategies to promote change. The TDR-lab aims to integrate the perspectives from design, psychology, technology, and social sciences. 
            </div>
        </div>
    );
};

export const AboutPageTile = ({reverse, data}) => {
    return (
        <div className={`aboutPageTile ${reverse ? 'reverse' : ''}`}>
            <div className="aboutPageContent">
                <div className="aboutPageTileTitle">{data.title}</div>
                {data.body}
            </div>
            <div className="aboutPageImgCont">
                <img src={data.imgSrc} className="aboutPageImg"></img>
            </div>
        </div>
    )
}

