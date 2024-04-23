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
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitu
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

