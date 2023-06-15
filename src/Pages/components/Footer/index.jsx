import { IconsList } from "../IconsList";
import "./styles.css";

const Footer = () => {
    return (
        <footer>
            <div className="footerIcons">
                <IconsList/>
            </div>
            <div className="footerInfo">
                <h2>By <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/santiago-ariasb/">5arSanti</a></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque voluptate vel quos sapiente accusamus, quisquam commodi delectus, perspiciatis, cumque maiores facilis quibusdam eos libero eveniet unde expedita alias. Hic?</p>
            </div>
        </footer>
    );
}
export {Footer};