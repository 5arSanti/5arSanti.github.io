import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import "./styles.css"

const IllustrationsHome = () => {
    return (
        <section className="illustrations-home" id="illustrations-home">
            <div className="illustrations-home-container">
                <div className="illustrations-home-title-container">
                    <div className="illustrations-home-title">
                        <h1 className="animacion-titulos">ILUSTRACIONES</h1>
                    </div>
                    <div className="illustrations-home-background"></div>
                </div>
                
                <div className="illustrations-home-icons-container animacion-iconos">
                    <a target="_blank" rel="noreferrer noopener" href="https://www.deviantart.com/santiari1">
                        <img src="https://cdn-icons-png.flaticon.com/512/3669/3669921.png" alt="DeviantArtIcon"></img>
                        <p className="animacion">DeviantArt <HiArrowTopRightOnSquare className="text-sm"/></p>
                    </a>
                    <a target="_blank" rel="noreferrer noopener" href="https://www.pixiv.net/en/users/74363297">
                        <img src="https://clipground.com/images/pixiv-logo-3.png" alt="PixivIcon"></img>
                        <p className="animacion">Pixiv <HiArrowTopRightOnSquare className="text-sm"/></p>
                    </a>
                    <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/@5ar_santi">
                        <img src="https://cdn-icons-png.flaticon.com/512/3669/3669688.png" alt="YouTubeIcon"></img>
                        <p className="animacion">YouTube <HiArrowTopRightOnSquare className="text-sm"/></p>
                    </a>
                </div>
            </div>
        </section>
    );
}
export { IllustrationsHome };