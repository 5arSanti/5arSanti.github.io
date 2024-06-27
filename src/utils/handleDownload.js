import { handleNotifications } from "./handleNotifications";

const handleDownloadCV = () => {
    const pdfUrl = "/Santiago-Arias-CV.pdf";
    const link = document.createElement("a");

    link.href = pdfUrl;
    link.download = "Santiago Arias CV";
    link.click();
    handleNotifications("info", "Descagado correctamente");
}

export { handleDownloadCV }