import { HiArrowDownTray } from "react-icons/hi2"
import "./styles.css";

const DownloadCV = () =>{
    const handleDounwload = () => {
        const pdfUrl = "/Santiago-Arias-CV.pdf";
        const link = document.createElement("a");

        link.href = pdfUrl;
        link.download = "Santiago Arias CV";
        link.click();
    }

    return(
        <button className="cv-button" type="button" onClick={() => handleDounwload()}>
            Download CV <HiArrowDownTray className="text-md"/>
        </button>
    );
}
export { DownloadCV };