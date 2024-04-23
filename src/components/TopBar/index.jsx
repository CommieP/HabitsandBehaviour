import React, { useState } from "react";
import TopBarButton from "./TopBarButton";
import TopBarLogo from "./TopBarLogo";
import "../../components/components.css";
import { Pages } from "../../Data/Pages";

const TopBar = ({ onPageSelect }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (index) => {
        setActiveIndex(index);
        onPageSelect(index);
        handleMenuOpen(!menuOpen);
    };

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="topbar">
            <div className="topbarButtons">
                <TopBarLogo onClick={() => handleClick(0)} /> {/* Corrected onClick prop */}
                <div className={`topbarButtonsCont ${menuOpen ? 'menuOpen' : ''}`}>
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
                <div className="burgerMenuCont">
                    <button className={`burgerMenu ${menuOpen ? 'menuOpen' : ''}`} onClick={() => handleMenuOpen()}></button>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
