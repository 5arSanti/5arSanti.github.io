import React from "react";

import { HiChevronRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { PortfolioContext } from "../../../Context";

import "./styles.css"

const NavBarResponsive = () => {
    const context = React.useContext(PortfolioContext); 

    if(!context.isNavbarMenuOpen){
        setTimeout(() =>{
            context.setNavbarTimer(true);
        }, 750);
    }
    else{
        context.setNavbarTimer(false);
    }

    return(
            <aside className={`${context.isNavbarMenuOpen ? "menu-open" : ""} z-10`} 
                hidden={context.navbarTimer}
            >
                <ul className="flex flex-col gap-6 text-sm">
                    <li className="flex gap-2 items-center cursor-pointer">
                        <NavLink to="/">Home</NavLink>
                        <HiChevronRight/>
                    </li>
                    <li className="flex gap-2 items-center cursor-pointer">
                        <a href="/#about-me">Sobre Mi</a>
                        <HiChevronRight/>
                    </li>
                    <li className="flex gap-2 items-center cursor-pointer">
                        <a href="#projects">Proyectos</a>
                        <HiChevronRight/>
                    </li>
                    <li className="flex gap-2 items-center cursor-pointer">
                        <NavLink to="/">Habilidades</NavLink>
                        <HiChevronRight/>
                    </li>
                    <li className="flex gap-2 items-center cursor-pointer">
                        <NavLink to="/">Descargar CV</NavLink>
                        <HiChevronRight/>
                    </li>
                </ul>
            </aside>
    );
}
export {NavBarResponsive};