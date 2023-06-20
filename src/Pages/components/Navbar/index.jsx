import React from "react";
import {NavLink} from "react-router-dom"

import { HiBars3BottomRight } from "react-icons/hi2"
import { HiXMark } from "react-icons/hi2"

import "./styles.css"
import { PortfolioContext } from "../../../Context";
import { NavOptions } from "../NavOptions";




const Navbar = () => {
    const context = React.useContext(PortfolioContext);

    const renderIconView = () => {
        if(!context.isNavbarMenuOpen){
            return(
                <HiBars3BottomRight className="h-6 w-6"/>
            );
        }
        else{
            return(
                <HiXMark className="h-6 w-6"/>
            );
        }
    }

    return (
        <nav className="navbar w-full h-16 fixed top-0 z-20 bg-none flex justify-between items-center px-10 text-white font-bold">
            <ul className="flex">
                <li className="animacion">
                    <NavLink to="/">Santiago Arias</NavLink>
                </li>
            </ul>
            
            <ul className="icon-responsive cursor-pointer" onClick={() => {context.toggleNavbarMenuResponsive()}}>
                <li>{renderIconView()}</li>
            </ul>

            <div className="navbar-right">
                <NavOptions/>
                {/* <li className="animacion flex gap-1 items-center cursor-pointer">
                    <NavLink to="/">
                        <a href="#home">Home</a>
                    </NavLink>
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
                </li> */}
            </div>
        </nav>
    );
}
export {Navbar};