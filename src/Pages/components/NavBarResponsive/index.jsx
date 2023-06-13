import React from "react";

import { HiChevronRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { PortfolioContext } from "../../../Context";

import "./styles.css"

const NavBarResponsive = () => {
    const context = React.useContext(PortfolioContext); 

    return(
        <aside className={`${context.isNavbarMenuOpen ? "flex" : "hidden"} z-10`}>
            <ul className="flex flex-col gap-6 text-sm">
                <li className="flex gap-2 items-center cursor-pointer">
                    <NavLink to="/">Home</NavLink>
                    <HiChevronRight/>
                </li>
                <li className="flex gap-2 items-center cursor-pointer">
                    <NavLink to="/">Sobre Mi</NavLink>
                    <HiChevronRight/>
                </li>
                <li className="flex gap-2 items-center cursor-pointer">
                    <NavLink to="/">Proyectos</NavLink>
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