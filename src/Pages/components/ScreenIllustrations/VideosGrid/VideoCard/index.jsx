import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { AnchorCard } from "../../../TextComponents";

import "./styles.css";

const VideoCard = ({item={}}) => {
    const src = `https://www.youtube.com/embed/${item?.id.videoId}?autohide=1`

    return(
        <WrapperContainer2 justifyContent="center" alignItems="center">
            <div className="video-card-info shadow-style border-left-style">
                <div className="yt-reproducer">
                    <iframe 
                        width="560" 
                        src={src} 
                        title={item?.snippet.title} 
                        allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`}
                        allowFullScreen
                    ></iframe>
                </div>

                <AnchorCard className="animacion" fontSize={18} uri={`https://www.youtube.com/watch?v=${item?.id.videoId}&ab_channel=5ar_Santi-illustrations`}>
                    {item?.snippet.title} <HiArrowTopRightOnSquare className="text-md inline-block self-center ml-1"/>
                </AnchorCard>   
            </div>
        </WrapperContainer2>


    );
}
export { VideoCard };