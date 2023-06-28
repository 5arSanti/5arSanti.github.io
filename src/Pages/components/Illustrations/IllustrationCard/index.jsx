import React from "react";
import { PortfolioContext } from "../../../../Context";
import "./styles.css";

const IllustrationCard = (data) => {
    const context = React.useContext(PortfolioContext);

    const renderIcon = () => {
        if(data.data?.timeLapse === ""){
            return(
                <div className="illustration-card-icons">
                    <a target="_blank" rel="noreferrer noopener" href={data.data?.deviantArt}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3669/3669921.png" alt="DeviantArtIcon"></img>
                    </a>
                    <a target="_blank" rel="noreferrer noopener" href={data.data?.pixiv}>
                        <img src="https://clipground.com/images/pixiv-logo-3.png" alt="PixivIcon"></img>
                    </a>
                </div>
            );
        }
        else{
            return(
                <div className="illustration-card-icons">
                    <a target="_blank" rel="noreferrer noopener" href={data.data?.timeLapse}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3669/3669688.png" alt="YouTubeIcon"></img>
                    </a>
                    <a target="_blank" rel="noreferrer noopener" href={data.data?.deviantArt}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3669/3669921.png" alt="DeviantArtIcon"></img>
                    </a>
                    <a target="_blank" rel="noreferrer noopener" href={data.data?.pixiv}>
                        <img src="https://clipground.com/images/pixiv-logo-3.png" alt="PixivIcon"></img>
                    </a>
                </div>
            );
        }
    }



    return(
        <div className={`illustration-card-container ${data.data?.size}`}
            onMouseEnter={() => context.handleMouseEnter(data.data?.id)} 
            onMouseLeave={context.handleMouseOver}
        >
            <img src={data.data?.image} alt={data.data?.name} />
            {context.isMouseInCard === data.data?.id && (
                <div className="background-illustration-card-info">
                    <div className="illustration-card-info">
                        <p>{data.data?.name}</p>
                        {renderIcon()}
                    </div>
                </div>

            )}
            <div className="illustration-card-info-responsive">
                <p>{data.data?.name}</p>
                {renderIcon()}
            </div>
        </div>
    );
}
export { IllustrationCard }; 