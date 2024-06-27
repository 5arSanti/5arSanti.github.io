import Portada1 from "/Portada-Ilustraciones.png";
import Portada2 from "/Portada-Web.png";

import { Title } from "../../Title";
import { ProjectsCard } from "./ProjectsCard";

import { IoMdColorPalette } from "react-icons/io";
import { MdWeb } from "react-icons/md";

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
                    text={"Digital illustrations made with the Krita tool with their respective TimeLapses."}
                    icon={<IoMdColorPalette/>}
                />
                <ProjectsCard
                    title={"Web Development"}
                    link={"development"}
                    image={Portada2}
                    text={"FullStack and FrontEnd projects created with JS and other tools."}
                    icon={<MdWeb/>}
                />
            </div>
        </section>
    );
}
export { Projects };