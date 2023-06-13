import "./styles.css";
import Logo from "../../../public/Logo-Profesional-Santiago-V3.png";


const AboutMe = () => {
    return(
        <main className="relative">
            <section className="aboutMeContainer">
                <div className="aboutMeInfoContainer">
                    <figure className="logoContainer">
                        <img src={Logo} alt="Logo"></img>
                    </figure>
                    <div className="aboutMeInfo">
                        <h1 className="text-white font-bold">Hola! soy <a className="underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/santiago-ariasb/">Santiago Arias</a></h1>
                        <p>Frontend Developer, ilustrador digital y Diseñador UX/UI en Colombia.</p>
                    </div>
                </div>
            </section>
            <figure className="gradientFigure"></figure>
        </main>
    );
}

export {AboutMe};