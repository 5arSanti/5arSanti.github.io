import Portada1 from "/Portada-Ilustraciones.png";
import Portada2 from "/Portada-Web.png";

import { Title } from "../../Title";
import { ProjectsCard } from "./ProjectsCard";

import { IoMdColorPalette } from "react-icons/io";
import { MdWeb } from "react-icons/md";

import "./styles.css";
import { SectionWrapper, WrapperContainer2 } from "../../WrapperContainers";

const Projects = () => {
    return(
        <SectionWrapper id="projects">
            <WrapperContainer2>
                <Title>Projects</Title>

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

            </WrapperContainer2>
        </SectionWrapper>
    );
}
export { Projects };