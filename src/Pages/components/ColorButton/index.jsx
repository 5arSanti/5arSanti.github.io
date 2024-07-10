import React from "react";
import { PortfolioContext } from "../../../Context"

import { LuMoon } from "react-icons/lu";
import { FiSun } from "react-icons/fi";

import { handleColorsByFilters } from "../../../utils/handleColors";

import "./styles.css";

const ColorButton = ({text=false, icon=true}) => {
    const context = React.useContext(PortfolioContext);

    const { activeHighContrast, setActiveHighContrast } = context;

    React.useEffect(() => {
        localStorage.setItem('night', activeHighContrast);
        handleColorsByFilters(activeHighContrast);
    }, [activeHighContrast]);

    return(
        <button title={activeHighContrast ? "Day mode" : "Night mode"} className="color-button" onClick={() => {setActiveHighContrast(prevMode => !prevMode);}}>
            {icon ? (activeHighContrast ? <FiSun/> : <LuMoon/>) : ""} 
            {text ? (activeHighContrast ? " Day mode" : " Night mode") : ""}
        </button>
    ); 
}

export { ColorButton };