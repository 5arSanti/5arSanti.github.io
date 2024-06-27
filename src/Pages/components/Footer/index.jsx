import { IconsList } from "../ScreenHome/IconsList";
import logo from "/Logo-Profesional-Santiago-V3.png";
import "./styles.css";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer">
            <div>
                <div className="footer-info">
                    <Link to="/">
                        <p className="animacion">Santiago Arias</p>    
                    </Link>

                    <Link to="/" className="footer-info-image-container">
                        <img src={logo} alt="Logo" />
                    </Link>

                    <a href="mailto:santiari05@hotmail.com">
                        <p className="animacion">
                            santiari05@hotmail.com 
                            <HiOutlineArrowTopRightOnSquare className="text-sm inline-block ml-2"/>
                        </p>  
                    </a>

                </div>
                <div className="footer-repo-container">
                    <a className="animacion" target="_blank" rel="noreferrer noopener" href="https://github.com/5arSanti/5arSanti.github.io">
                        GitHub Repository 
                        <HiOutlineArrowTopRightOnSquare className="text-sm inline-block ml-2"/>
                    </a>
                </div>
            </div>

            <div className="footer-copy-container">
                <p>&copy; {date.getFullYear()} Santiago Arias</p>
                <div className="footer-icons">
                    <IconsList/>
                </div>
            </div>
        </footer>
    );
}
export {Footer};