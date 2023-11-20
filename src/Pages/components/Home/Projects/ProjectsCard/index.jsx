import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

import "./styles.css";

const ProjectsCard = ({title, link, image}) => {
    return(
        <div className="projects-card-container">
            <div className="project-info">
                <h1>{title}</h1>
                <Link to={link}>
                    <button type="button">
                        Ver mas <HiChevronRight className="text-white ml-1"/>
                    </button>
                </Link>
            </div>
            <img src={image} alt={`${title}Background`}/>
        </div>
    );
}

export { ProjectsCard };