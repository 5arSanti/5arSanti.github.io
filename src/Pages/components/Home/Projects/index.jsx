import Portada1 from "/Portada-Ilustraciones.png";
import Portada2 from "/Portada-Web.png";

import { Title } from "../../Title";
import { ProjectsCard } from "./ProjectsCard";

import "./styles.css";

const Projects = () => {
    return(
        <section className="projects" id="projects">
            <Title>Projects</Title>

            <div className="projects-container">
                <ProjectsCard
                    title={"Illustrations"}
                    link={"ilustraciones"}
                    image={Portada1}
                />
                <ProjectsCard
                    title={"Web Development"}
                    link={"paginas-web"}
                    image={Portada2}
                />
            </div>
        </section>
    );
}
export { Projects };