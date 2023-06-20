import React from "react";

import { PortfolioContext } from "../../../Context";

import "./styles.css"
import { NavOptions } from "../NavOptions";

const NavBarResponsive = () => {
    const context = React.useContext(PortfolioContext);

    return(
            <aside className={`${context.isNavbarMenuOpen ? "menu-open" : ""} z-10`} hidden={context.navbarTimer}>
                <NavOptions/>
            </aside>
    );
}
export {NavBarResponsive};