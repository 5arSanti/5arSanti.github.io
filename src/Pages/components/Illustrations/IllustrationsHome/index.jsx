import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import "./styles.css"
import { IconLinksCard } from "../../IconLinksCard";

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
                    <IconLinksCard
                        link={"https://www.deviantart.com/santiari1"}
                        imgUri={"https://cdn-icons-png.flaticon.com/512/3669/3669921.png"}
                        name={"DeviantArt"}
                    />
                    <IconLinksCard
                        link={"https://www.pixiv.net/en/users/74363297"}
                        imgUri={"https://clipground.com/images/pixiv-logo-3.png"}
                        name={"Pixiv"}
                    />
                    <IconLinksCard
                        link={"https://www.youtube.com/@5ar_santi"}
                        imgUri={"https://cdn-icons-png.flaticon.com/512/3669/3669688.png"}
                        name={"YouTube"}
                    />
                </div>
            </div>
        </section>
    );
}
export { IllustrationsHome };