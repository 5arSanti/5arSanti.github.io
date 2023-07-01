import "./styles.css";

const LoadingVideos = () => {
    return(
        <div className="loading-video-card">
            <div className="loading-video-card-info">
                <div className="yt-reproducer">
                    <div className="loading-animation-container loading-animation"></div>
                </div>
                <p className="loading-animation"></p>
            </div>
        </div>
    );
}
export { LoadingVideos };