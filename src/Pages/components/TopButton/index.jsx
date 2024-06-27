import { HiChevronDoubleUp } from "react-icons/hi2";
import { scrollToValue } from "../../../utils/scrollToValue";

import "./styles.css";

const TopButton = () => {
    return(
        <button className="top-button animacion-top-button" onClick={scrollToValue}>
            <HiChevronDoubleUp/>
        </button>
    );
}
export { TopButton };