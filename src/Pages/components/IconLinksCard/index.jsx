import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const IconLinksCard = ({link, imgUri, name}) => {
    return(
        <a target="_blank" rel="noreferrer noopener" href={link}>
            <img src={imgUri} alt={`${name}Icon`}></img>
            <p className="animacion">{name} <HiArrowTopRightOnSquare className="text-sm"/></p>
        </a>
    );
}

export { IconLinksCard };