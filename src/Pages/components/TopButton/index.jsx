import { HiChevronDoubleUp } from "react-icons/hi2";
import "./styles.css";
import { HashLink } from "react-router-hash-link";

const TopButton = () => {
    return(
        <HashLink to="#top" aria-label="Top" className="top-button animacion-top-button">
            <HiChevronDoubleUp/>
        </HashLink>
    );
}
export { TopButton };