import { HiArrowDownTray } from "react-icons/hi2"
import "./styles.css";
import { handleDownloadCV } from "../../../utils/handleDownload";

const DownloadCV = ({text=true}) =>{
    return(
        <button className="cv-button" type="button" onClick={handleDownloadCV}>
            {text ? "Download CV" : ""} <HiArrowDownTray className="text-md"/>
        </button>
    );
}
export { DownloadCV };