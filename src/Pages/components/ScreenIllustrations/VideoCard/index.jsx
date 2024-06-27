import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import "./styles.css";

const  VideoCard = (data) => {
    return(
        <div className="video-card">
            <div className="video-card-info">
                <div className="yt-reproducer">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${data.data?.id.videoId}?autohide=1`} title={data.data?.snippet.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <p>
                    <a className="animacion flex" target="_blank" rel="noreferrer noopener" href={`https://www.youtube.com/watch?v=${data.data?.id.videoId}&ab_channel=5ar_Santi-illustrations`}>{data.data?.snippet.title} <HiArrowTopRightOnSquare className="text-md inline-block self-center ml-1"/></a>
                </p>
            </div>
        </div>

    );
}
export { VideoCard };