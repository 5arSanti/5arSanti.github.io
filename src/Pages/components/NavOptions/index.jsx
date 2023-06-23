import React from "react";

import { HiChevronRight } from "react-icons/hi2";
import { DownloadCV } from "../DownloadCV";
import { PortfolioContext } from "../../../Context";
import { NavLink } from "react-router-dom";


const NavOptions = () => {
    const context = React.useContext(PortfolioContext);

    const RenderView = () => {
        if (context.isHomeActive){
            return(
                <ul className="navbar-right flex gap-6 text-sm">
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="/">Home</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#about-me">Sobre Mi</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#projects">Proyectos</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#skills">Habilidades</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#contact-me">Contacto</a>
                        <HiChevronRight/>
                    </li>
                    <li className="nav-button flex gap-1 items-center cursor-pointer">
                        <DownloadCV/>
                    </li>
                </ul>
            );
        }
        else if (context.isIllustrationsActive){
            return(
                <ul className="navbar-right flex gap-6 text-sm">
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#illustrations-home">Home</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#illustrations">Ilustraciones</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#projects">Proyectos</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#skills">Habilidades</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#contact-me">Contacto</a>
                        <HiChevronRight/>
                    </li>
                    <li className="nav-button flex gap-1 items-center cursor-pointer">
                        <DownloadCV/>
                    </li>
                </ul>
            );
        }
        else if (context.isWebPagesActive){
            return(
                <ul className="navbar-right flex gap-6 text-sm">
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <NavLink to="/">Home</NavLink>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#about-me">Paginas web</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#projects">Proyectos</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#skills">Habilidades</a>
                        <HiChevronRight/>
                    </li>
                    <li className="animacion flex gap-1 items-center cursor-pointer">
                        <a href="#contact-me">Contacto</a>
                        <HiChevronRight/>
                    </li>
                    <li className="nav-button flex gap-1 items-center cursor-pointer">
                        <DownloadCV/>
                    </li>
                </ul>
            );
        }
    }

    return(
        RenderView()
    );
}
export { NavOptions };