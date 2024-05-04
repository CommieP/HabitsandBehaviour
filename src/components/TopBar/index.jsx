import React, { useState } from "react";
import TopBarButton from "./TopBarButton";
import TopBarLogo from "./TopBarLogo";
import "../../components/components.css";
import { Pages } from "../../Data/Pages";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { topBarNavActions } from "../../store/reducers/topBarNavSlice";

const TopBar = () => {
    const activeIndex = useSelector(state => state.topBarNav.value);
    console.log(activeIndex);
    const [menuOpen, setMenuOpen] = useState(false);
    let navigate = useNavigate()
    let dispatch = useDispatch();

    const handleClick = (index) => {
        handleMenuOpen(!menuOpen);
        dispatch(topBarNavActions.navigateTopBar(index))
        navigate("/" + Pages[index].replace(/\s/g, '')); 
    };

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    // onPa

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
