import { handleNotifications } from "./handleNotifications";

const handleDownloadCV = () => {
    const pdfUrl = "/Hoja de Vida - Johel Santiago Arias.pdf";
    const link = document.createElement("a");

    link.href = pdfUrl;
    link.download = "Santiago Arias CV";
    link.click();
    handleNotifications("info", "Descagado correctamente");
}

export { handleDownloadCV }