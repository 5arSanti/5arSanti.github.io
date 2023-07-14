import React from "react";

import { HiChevronRight } from "react-icons/hi2";
import { DownloadCV } from "../DownloadCV";
import { PortfolioContext } from "../../../Context";
import { HashLink } from "react-router-hash-link";


const NavOptions = () => {
    const context = React.useContext(PortfolioContext);

    const RenderView = () => {
        if (context.isHomeActive){
            return(
                <div className="navbar-right flex gap-6 text-sm">
                    <HashLink to="/#home" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Home</p>
                        <HiChevronRight/>
                    </HashLink>
                    <HashLink to="/#about-me" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Sobre Mi</p>
                        <HiChevronRight/>
                    </HashLink>
                    <HashLink to="/#projects" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Proyectos</p>
                        <HiChevronRight/>
                    </HashLink>
                    <HashLink to="/#skills" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Habilidades</p>
                        <HiChevronRight/>
                    </HashLink>
                    <HashLink to="/#contact-me" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Contacto</p>
                        <HiChevronRight/>
                    </HashLink>
                    <div className="nav-button flex gap-1 items-center cursor-pointer">
                        <DownloadCV/>
                    </div>
                </div>
            );
        }
        else if (context.isIllustrationsActive){
            return(
                <div className="navbar-right flex gap-6 text-sm">
                    <HashLink to="/ilustraciones/#illustrations-home" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Home</p>
                        <HiChevronRight/>
                    </HashLink>
                    <HashLink to="/ilustraciones/#time-lapses" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Time lapses</p>
                        <HiChevronRight/>
                    </HashLink>
                    <HashLink to="/ilustraciones/#illustrations" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Ilustraciones</p>
                        <HiChevronRight/>
                    </HashLink>
                    <div className="nav-button flex gap-1 items-center cursor-pointer">
                        <DownloadCV/>
                    </div>
                </div>
            );
        }
        else if (context.isWebPagesActive){
            return(
                <div className="navbar-right flex gap-6 text-sm">
                    <HashLink to="/paginas-web/#web-pages-home" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Home</p>
                        <HiChevronRight/>
                    </HashLink>
                    <HashLink to="/paginas-web/#web-pages" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Paginas web</p>
                        <HiChevronRight/>
                    </HashLink>
                    <HashLink to="/paginas-web/#front-mentor" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Frontend Mentor</p>
                        <HiChevronRight/>
                    </HashLink>
                    <div className="nav-button flex gap-1 items-center cursor-pointer">
                        <DownloadCV/>
                    </div>
                </div>
            );
        }
    }

    return(
        RenderView()
    );
}
export { NavOptions };