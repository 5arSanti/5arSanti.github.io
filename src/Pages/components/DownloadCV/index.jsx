import { HiArrowDownTray } from "react-icons/hi2"
import "./styles.css";

const DownloadCV = () =>{
    const handleDounwload = () => {
        // const pdfUrl = "public/Portada-Ilustraciones.png";
        const pdfUrl = "/placeholder.txt";
        const link = document.createElement("a");

        link.href = pdfUrl;
        link.download = "placeholder";
        link.click();
    }

    return(
        <button className="cv-button" onClick={() => handleDounwload()}>
            Descargar CV <HiArrowDownTray className="text-md"/>
        </button>
    );
}
export { DownloadCV };  