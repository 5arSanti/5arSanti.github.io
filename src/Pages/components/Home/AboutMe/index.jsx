import "./styles.css";
import Logo from "/Logo-Profesional-Santiago-V3.png";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const AboutMe = () => {
    return(
        <section id="home" className="relative bg-black">
            <div className="about-me-home-container">
                <div className="about-me-home-info-container">
                    <figure className="logo-container">
                        <img className="animacion-logo" src={Logo} alt="Logo"></img>
                    </figure>
                    <div className="about-me-home-info animacion-texto">
                        <h1>Hi! I&apos;m 
                            <span className="ml-2">
                                <a className="gap-2 animacion" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/santiago-ariasb/">
                                    Santiago Arias <HiArrowTopRightOnSquare className="text-md inline-block"/>
                                </a>
                            </span>
                        </h1>
                        <p>Frontend Developer, ilustrador digital y Diseñador UX/UI in Colombia.</p>
                    </div>
                </div>
            </div>
            <figure className="about-me-home-gradient-figure"></figure>
        </section>
    );
}

export {AboutMe};