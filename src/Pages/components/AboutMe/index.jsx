import "./styles.css";
import Logo from "/Logo-Profesional-Santiago-V3.png";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const AboutMe = () => {
    return(
        <section id="home" className="relative">
            <section className="aboutMeContainer">
                <div className="aboutMeInfoContainer">
                    <figure className="logoContainer">
                        <img src={Logo} alt="Logo"></img>
                    </figure>
                    <div className="aboutMeInfo">
                        <h1 className="text-white font-bold flex gap-2">Hola! soy 
                            <a className="flex items-center gap-2 animacion" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/santiago-ariasb/">
                                Santiago Arias
                                <HiArrowTopRightOnSquare className="text-md"/>
                            </a>
                        </h1>
                        <p>Frontend Developer, ilustrador digital y Diseñador UX/UI en Colombia.</p>
                    </div>
                </div>
            </section>
            <figure className="gradientFigure"></figure>
        </section>
    );
}

export {AboutMe};