import React from "react";
import { VideoCard } from "../VideoCard";
import { PortfolioContext } from "../../../../Context";

const ChannelAPI = () => {
    const context = React.useContext(PortfolioContext);

    return(
        <div>
            {context.videos?.map((item) => (
                <VideoCard
                    key={item.id.videoId}
                    data={item} 
                />
            ))}
        </div>
    );
}
export { ChannelAPI };