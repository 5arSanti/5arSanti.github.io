import { HiChevronDoubleUp } from "react-icons/hi2";
import "./styles.css";

const TopButton = () => {
    return(
        <a href="#top" className="top-button animacion-top-button">
            <HiChevronDoubleUp/>
        </a>
    );
}
export { TopButton };