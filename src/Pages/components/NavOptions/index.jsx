import React from "react";

import { HiChevronRight } from "react-icons/hi2";
import { DownloadCV } from "../DownloadCV";
import { PortfolioContext } from "../../../Context";
import { HashLink } from "react-router-hash-link";

import "./styles.css";
import { ColorButton } from "../ColorButton";
import { navOptions } from "../../../utils/navOptions";

const NavOptions = () => {
    const context = React.useContext(PortfolioContext);

    const { home, illustrations, webPages } = navOptions;

    const mapOptions = (options) => {
        const array = Object.keys(options) || [];

        return(
            array.map((item, index) => {

                return(
                    <HashLink key={index} to={`/${options[item].link}`} className="animacion">
                        {item} <HiChevronRight/>
                    </HashLink>
                );
            })
        )
    }

    return(
        <div className="navbar-right">
            { context.isHomeActive && mapOptions(home) }

            { context.isIllustrationsActive &&  mapOptions(illustrations)}
            
            { context.isWebPagesActive && mapOptions(webPages) }

            <ColorButton/>

            <DownloadCV/>
        </div>
    )
}
export { NavOptions };