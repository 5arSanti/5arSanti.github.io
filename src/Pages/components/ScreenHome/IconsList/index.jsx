import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { FaDeviantart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

import { WrapperContainer2 } from "../../WrapperContainers";

import "./styles.css"

const IconsList = ({color="#FFFFFF", flexDirection="row", padding=20}) => {
    return(
        <WrapperContainer2 flexDirection={flexDirection} gap={30} className="icons" padding={padding}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/santiago-ariasb/">
                <FaLinkedin fill={color}/>
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://github.com/5arSanti">
                <FaGithub fill={color}/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.deviantart.com/santiari1">
                <FaDeviantart fill={color}/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/5ar_santi">
                <BsTwitterX fill={color}/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@5ar_santi">
                <FaYoutube fill={color}/>   
            </a>

        </WrapperContainer2>
    );
}
export { IconsList };