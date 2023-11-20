import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import "./styles.css";
import { IconLinksCard } from "../../IconLinksCard";

const WebPagesHome = () => {
    return(
        <section className="web-pages-home" id="web-pages-home">
            <div className="web-pages-home-container">
                <div className="web-pages-home-title-container">
                    <h1 className="animacion-titulos">PAGINAS WEB</h1>
                </div>
                
                <div className="web-pages-home-icons-container animacion-iconos">
                    <IconLinksCard
                        link={"https://github.com/5arSanti"}
                        imgUri={"https://cdn-icons-png.flaticon.com/512/733/733609.png"}
                        name={"GitHub"}
                    />
                </div>
            </div>
        </section>
    );
}
export {WebPagesHome };