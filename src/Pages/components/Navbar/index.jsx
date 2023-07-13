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
                <HiXMark className="close-button"/>
            );
        }
    }

    return (
        <nav className="navbar animacion-nav w-full h-16 fixed top-0 z-20 bg-none flex justify-between items-center px-10 text-white font-bold">
            <NavLink to="/">
                <ul className="flex">
                    <li className="animacion">Santiago Arias</li>
                </ul>
            </NavLink>

            
            <ul className="icon-responsive cursor-pointer" onClick={() => {context.toggleNavbarMenuResponsive()}}>
                <li>{renderIconView()}</li>
            </ul>

            <div className="navbar-right">
                <NavOptions/>
            </div>
        </nav>
    );
}
export {Navbar};