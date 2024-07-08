import React from "react";
import {NavLink} from "react-router-dom"

import { HiBars3BottomRight } from "react-icons/hi2"
import { HiXMark } from "react-icons/hi2"

import "./styles.css"
import { PortfolioContext } from "../../../Context";
import { NavOptions } from "../NavOptions";




const Navbar = () => {
    const context = React.useContext(PortfolioContext);

    const { isNavbarMenuOpen, setIsNavbarMenuOpen} = context;

    return (
        <nav className="nav-container animacion-nav">
            <NavLink to="/" className="animacion">
                Santiago Arias
            </NavLink>

            {context.windowWidth <= 800 ?
                <div className="icon-responsive" onClick={() => {setIsNavbarMenuOpen(!isNavbarMenuOpen)}}>
                    {isNavbarMenuOpen ?
                        <HiXMark className="close-button"/>
                        :
                        <HiBars3BottomRight className="h-6 w-6"/>
                    }
                </div>
                :
                <NavOptions/>
            }
        </nav>
    );
}
export { Navbar };