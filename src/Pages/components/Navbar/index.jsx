import React from "react";
import {NavLink} from "react-router-dom"

import {HiChevronRight} from "react-icons/hi2";
import { HiBars3BottomRight } from "react-icons/hi2"
import { HiXMark } from "react-icons/hi2"

import "./styles.css"
import { PortfolioContext } from "../../../Context";




const Navbar = () => {
    const context = React.useContext(PortfolioContext);

    const renderView = () => {
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
                <li>
                    <NavLink to="/">Santiago Arias</NavLink>
                </li>
            </ul>
            
            <ul className="icon-responsive cursor-pointer" onClick={() => {context.toggleNavbarMenuResponsive()}}>
                <li>{renderView()}</li>
            </ul>

            <ul className="navbar-right flex gap-6 text-sm">
                <li className="flex gap-1 items-center cursor-pointer">
                    <NavLink to="/">Home</NavLink>
                    <HiChevronRight/>
                </li>
                <li className="flex gap-1 items-center cursor-pointer">
                    <NavLink to="/">Sobre Mi</NavLink>
                    <HiChevronRight/>
                </li>
                <li className="flex gap-1 items-center cursor-pointer">
                    <NavLink to="/">Proyectos</NavLink>
                    <HiChevronRight/>
                </li>
                <li className="flex gap-1 items-center cursor-pointer">
                    <NavLink to="/">Habilidades</NavLink>
                    <HiChevronRight/>
                </li>
                <li className="flex gap-1 items-center cursor-pointer">
                    <NavLink to="/">Descargar CV</NavLink>
                    <HiChevronRight/>
                </li>
            </ul>
        </nav>
    );
}
export {Navbar};