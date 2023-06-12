import "./styles.css";
import Logo from "../../../public/Logo-Profesional-Santiago-V3.png";


const AboutMe = () => {
    return(
        <main>
            <section className="aboutMeContainer">
                <div className="aboutMeInfoContainer">
                    <figure className="logoContainer">
                        <img src={Logo} alt="Logo de mi Blog"></img>
                    </figure>
                    <div className="aboutMeInfo">
                        <h1 className="text-white font-bold">Hi! I&apos;m <a className="underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/santiago-ariasb/">Santiago Arias</a></h1>
                        <p>Diseñador UX/UI, ilustrador digital y FrontEnd Developer en Colombia</p>
                    </div>
                </div>
            </section>
            <figure className="gradientFigure"></figure>
        </main>
    );
}

export {AboutMe};