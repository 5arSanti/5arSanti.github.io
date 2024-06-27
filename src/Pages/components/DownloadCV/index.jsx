import { HiArrowDownTray } from "react-icons/hi2"
import "./styles.css";
import { handleDownloadCV } from "../../../utils/handleDownload";

const DownloadCV = () =>{
    return(
        <button className="cv-button" type="button" onClick={handleDownloadCV}>
            Download CV <HiArrowDownTray className="text-md"/>
        </button>
    );
}
export { DownloadCV };