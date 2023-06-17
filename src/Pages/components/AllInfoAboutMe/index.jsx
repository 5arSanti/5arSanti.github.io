import { IconsList } from "../IconsList";
import "./styles.css"

const AllInfoAbboutMe = () => {
    return (
        <section id="about-me" className="about-me">
            <div className="about-me-container">
                <div>
                    <img className="w-full" src="https://images.pexels.com/photos/11843706/pexels-photo-11843706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen AboutMe" />
                </div>
                <div className="about-me-info-container">
                    <h1>Sobre M&iacute;</h1>
                    <p>
                        Soy un programador y desarrollador Front End Junior; con gran capacidad creativa, 
                        manejo de sistemas operativos y habilidad en diseño visual, con conocimiento en lenguajes 
                        de programación como: Python, C++, Java, HTML, CSS, JavaScript, desarrollo y mantenimiento de 
                        códigos en aplicaciones y programas informáticos.
                        <br/>
                        <br/>
                        Cuento con 4 años de experiencia como Ilustrador digital, diseñador de páginas web, logotipos 
                        corporativos, edición y animación de videos con Adobe Premiere. Comprometido con brindar resultados 
                        de alta capacidad y eficiencia.
                    </p>
                    <IconsList/>

                </div>
            </div>
        </section>
    );
}
export { AllInfoAbboutMe };