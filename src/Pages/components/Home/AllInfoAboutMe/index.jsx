import { DownloadCV } from "../../DownloadCV";
import { IconsList } from "../IconsList";
import "./styles.css"

const AllInfoAbboutMe = () => {
    const date = new Date();
    const year = date.getFullYear();

    let expTime = year - 2020;

    return (
        <section id="about-me" className="about-me">
            <div className="about-me-container">
                <div>
                    <img className="w-full" src="https://images.pexels.com/photos/11843706/pexels-photo-11843706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen AboutMe" />
                </div>
                <div className="about-me-info-container">
                    <h1>Sobre M&iacute;</h1>
                    <p>
                        Soy un desarrollador Front End Junior y Diseñador UX/UI; con gran capacidad creativa, 
                        y habilidad en diseño visual, con conocimiento en lenguajes 
                        de programación como: JavaScript, Python, C++, Java, HTML, CSS, y algunos frameworks 
                        o librerias como ReactJS y TailwindCSS, al igual que desarrollo y mantenimiento de c&oacute;digos 
                        en aplicaciones y programas inform&aacute;ticos.
                        <br/>
                        <br/>
                        Cuento con {expTime} años de experiencia como Ilustrador digital, diseñador de p&aacute;ginas web, logotipos 
                        corporativos, animaci&oacute;n 2D y edici&oacute;n de videos con Adobe Premiere. Comprometido con brindar resultados 
                        de alta capacidad y eficiencia.
                    </p>
                    <DownloadCV/>
                    <IconsList/>
                </div>
            </div>
        </section>
    );
}
export { AllInfoAbboutMe };