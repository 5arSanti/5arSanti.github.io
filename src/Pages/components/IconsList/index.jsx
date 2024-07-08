import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { FaDeviantart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const IconsList = ({white=false, flexDirection="row", padding=20}) => {
    const icons = [
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/santiago-ariasb/",
            icon: <FaLinkedin className={white ? "white-color" : "lines-color" }/>,
        },
        {
            name: "GitHub",
            link: "https://github.com/5arSanti",
            icon: <FaGithub className={white ? "white-color" : "lines-color" }/>,
        },
        {
            name: "DeviantArt",
            link: "https://www.deviantart.com/santiari1",
            icon: <FaDeviantart className={white ? "white-color" : "lines-color" }/>,
        },
        {
            name: "X - (Antes Twitter)",
            link: "https://twitter.com/5ar_santi",
            icon: <BsTwitterX className={white ? "white-color" : "lines-color" }/>,
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/@5ar_santi",
            icon: <FaYoutube className={white ? "white-color" : "lines-color"}/>,
        },
    ]

    return(
        <WrapperContainer2 flexDirection={flexDirection} gap={30} className={`icons`} padding={padding}>
            {icons?.map((item, index) => (
                <a key={index} target="_blank" rel="noopener noreferrer" href={item?.link} title={item?.name}>
                    {item?.icon}
                </a>
            ))}
        </WrapperContainer2>
    );
}
export { IconsList };