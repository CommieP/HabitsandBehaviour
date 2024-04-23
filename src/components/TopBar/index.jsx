import React, { useState } from "react";
import TopBarButton from "./TopBarButton";
import TopBarLogo from "./TopBarLogo";
import "../../components/components.css";
import { Pages } from "../../Data/Pages";

const TopBar = ({ onPageSelect }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        console.log(index);
        setActiveIndex(index);
        onPageSelect(index);
    };

    return (
        <div className="topbar">
            <div className="topbarButtons">
                <TopBarLogo onClick={() => handleClick(0)} /> {/* Corrected onClick prop */}
                <div className="topbarButtonsCont">
                    {Pages.map((item, index) => (
                        index !== 0 && (
                            <TopBarButton
                                key={index}
                                text={item}
                                active={index === activeIndex}
                                onClick={() => handleClick(index)}
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
