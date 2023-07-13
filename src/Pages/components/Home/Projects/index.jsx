import { Link } from "react-router-dom";

import Portada1 from "/Portada-Ilustraciones.png";
import Portada2 from "/Portada-Web.png";

import "./styles.css"
import { HiChevronRight } from "react-icons/hi2";

const Projects = () => {
    return(
        <section className="projects" id="projects">
            <h1 className="titulo">Proyectos</h1>
            <div className="projects-container">
                <div className="projects-illustrations-Web">
                    <div className="project-info">
                        <h1>Ilustraciones</h1>
                        <Link to="ilustraciones">
                            <button type="button">
                                Ver mas <HiChevronRight className="text-white ml-1"/>
                            </button>
                        </Link>
                    </div>
                    <img src={Portada1} alt=""/>
                </div>
                <div className="projects-illustrations-Web">
                    <div className="project-info">
                        <h1>Paginas Web</h1>
                        <Link to="paginas-web">
                            <button type="button">
                                Ver mas <HiChevronRight className="text-white ml-1"/>
                            </button>
                        </Link>
                    </div>
                    <img src={Portada2} alt=""/>
                </div>
            </div>

        </section>
    );
}
export { Projects };