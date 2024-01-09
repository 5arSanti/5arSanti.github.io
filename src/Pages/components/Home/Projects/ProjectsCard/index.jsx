import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

import "./styles.css";

const ProjectsCard = ({title, link, image, text, icon}) => {
    return(
        <div className="projects-card-container">
            <div className="project-info">
                <div className="title-and-info-container">
                    <span>
                        {icon}
                        <h1>{title}</h1>
                    </span>
                    <p>{text}</p>
                </div>

                <Link to={link}>
                    <HiChevronRight/>
                </Link>
            </div>
            <img src={image} alt={`${title}Background`}/>
        </div>
    );
}

export { ProjectsCard };