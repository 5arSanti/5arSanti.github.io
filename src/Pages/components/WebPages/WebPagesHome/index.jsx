import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import "./Styles.css";

const WebPagesHome = () => {
    return(
        <section className="web-pages-home" id="web-pages-home">
            <div className="web-pages-home-container">
                <div className="web-pages-home-title-container">
                    <h1>PAGINAS WEB</h1>
                </div>
                
                <div className="web-pages-home-icons-container">
                    <a target="_blank" rel="noreferrer noopener" href="https://github.com/5arSanti">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png"></img>
                        <p className="animacion">GitHub <HiArrowTopRightOnSquare className="text-sm"/></p>
                    </a>
                </div>
            </div>
        </section>
    );
}
export {WebPagesHome };