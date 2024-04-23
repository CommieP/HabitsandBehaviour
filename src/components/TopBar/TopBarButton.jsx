import React from "react";

const TopBarButton = ({ text, active, onClick }) => {
    return (
        <button className={`topbarButton ${active ? 'active' : ''}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default TopBarButton;
