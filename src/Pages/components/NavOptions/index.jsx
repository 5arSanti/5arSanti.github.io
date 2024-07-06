import React from "react";

import { HiChevronRight } from "react-icons/hi2";
import { DownloadCV } from "../DownloadCV";
import { PortfolioContext } from "../../../Context";
import { HashLink } from "react-router-hash-link";

import "./styles.css";

const NavOptions = () => {
    const context = React.useContext(PortfolioContext);

    const { home, illustrations, webPages } =  {
        "home": {
            "Home": "#home",
            "About Me": "#about-me",
            "Projects": "#projects",
            "Skills": "#skills",
            "Contact Me": "#contact-me"
        },
        "illustrations": {
            "Home": "ilustraciones/#illustrations-home",
            "Time Lapses": "ilustraciones/#time-lapses",
            "Illustrations": "ilustraciones/#illustrations",
        },
        "webPages": {
            "Home": "development/#web-pages-home",
            "Web Pages": "development/#web-pages",
            "Frontend Mentor": "development/#front-mentor",
        } 
    };

    const mapOptions = (options) => {
        const array = Object.keys(options) || [];

        return(
            array.map((item, index) => (
                <HashLink key={index} to={`/${options[item]}`} className="animacion">
                    {item} <HiChevronRight/>
                </HashLink>
            ))
        )
    }

    return(
        <div className="navbar-right">
            { context.isHomeActive && mapOptions(home) }

            { context.isIllustrationsActive &&  mapOptions(illustrations)}
            
            { context.isWebPagesActive && mapOptions(webPages) }

            <DownloadCV/>
        </div>
    )
}
export { NavOptions };