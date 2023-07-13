import React from "react";

import { HiChevronRight } from "react-icons/hi2";
import { DownloadCV } from "../DownloadCV";
import { PortfolioContext } from "../../../Context";


const NavOptions = () => {
    const context = React.useContext(PortfolioContext);

    const RenderView = () => {
        if (context.isHomeActive){
            return(
                <div className="navbar-right flex gap-6 text-sm">
                    <a href="/" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Home</p>
                        <HiChevronRight/>
                    </a>
                    <a href="#about-me" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Sobre Mi</p>
                        <HiChevronRight/>
                    </a>
                    <a href="#projects" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Proyectos</p>
                        <HiChevronRight/>
                    </a>
                    <a href="#skills" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Habilidades</p>
                        <HiChevronRight/>
                    </a>
                    <a href="#contact-me" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Contacto</p>
                        <HiChevronRight/>
                    </a>
                    <div className="nav-button flex gap-1 items-center cursor-pointer">
                        <DownloadCV/>
                    </div>
                </div>
            );
        }
        else if (context.isIllustrationsActive){
            return(
                <div className="navbar-right flex gap-6 text-sm">
                    <a href="#illustrations-home" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Home</p>
                        <HiChevronRight/>
                    </a>
                    <a href="#time-lapses" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Time lapses</p>
                        <HiChevronRight/>
                    </a>
                    <a href="#illustrations" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Ilustraciones</p>
                        <HiChevronRight/>
                    </a>
                    <div className="nav-button flex gap-1 items-center cursor-pointer">
                        <DownloadCV/>
                    </div>
                </div>
            );
        }
        else if (context.isWebPagesActive){
            return(
                <div className="navbar-right flex gap-6 text-sm">
                    <a href="#web-pages-home" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Home</p>
                        <HiChevronRight/>
                    </a>
                    <a href="#web-pages" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Paginas web</p>
                        <HiChevronRight/>
                    </a>
                    <a href="#front-mentor" className="animacion flex gap-1 items-center cursor-pointer">
                        <p>Frontend Mentor</p>
                        <HiChevronRight/>
                    </a>
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