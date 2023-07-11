import React from "react";
import { VideoCard } from "../VideoCard";
import { PortfolioContext } from "../../../../Context";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import "./styles.css";

import { LoadingVideos } from "../../LoadingAndError/LoadingVideos";
import { Error } from "../../LoadingAndError/Error";

const VideosGrid = () => {
    const context = React.useContext(PortfolioContext);

    const [indexOfVideo, setIdexOfVideo] = React.useState("ml-0");
    const handlePreviousVideo = () => {
        switch(indexOfVideo){
            case "ml-0": setIdexOfVideo("ml-200");break
            case "ml-100": setIdexOfVideo("ml-0");break
            case "ml-200": setIdexOfVideo("ml-100");break
        }
    }
    const handleNextVideo = () => {
        switch(indexOfVideo){
            case "ml-0": setIdexOfVideo("ml-100");break
            case "ml-100": setIdexOfVideo("ml-200");break
            case "ml-200": setIdexOfVideo("ml-0");break
        }
    }


    return(
        <div className="videos" id="time-lapses">
            <h1 className="titulo">Time lapses</h1>
            <div className="videos-container">
                <button className="previous-button" onClick={() => handlePreviousVideo()}><HiChevronLeft/></button>
                <div className="video-card-container">
                    <div className={`video-card-container-carrousel ${indexOfVideo}`}>
                        {context.loading && (
                            <>
                                <LoadingVideos/>
                            </>
                        )}
                        {context.error && (
                            <>
                                <Error/>
                                <Error/>
                                <Error/>
                            </>
                        )}
                        {!context.loading && context.videos?.map((item) => (
                            <VideoCard
                                key={item.id.videoId}
                                data={item} 
                            />
                        ))}
                    </div>
                </div>
                <button className="next-button" onClick={() => handleNextVideo()}><HiChevronRight/></button>
            </div>

        </div>
    );
}
export { VideosGrid };