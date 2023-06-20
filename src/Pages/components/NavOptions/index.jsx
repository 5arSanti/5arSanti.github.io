import { HiChevronRight } from "react-icons/hi2";
import { DownloadCV } from "../DownloadCV";

const NavOptions = () => {
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
export { NavOptions };