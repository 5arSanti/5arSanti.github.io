const  VideoCard = (data) => {
    return(
        <div>
            <p>{data.data?.snippet.title}</p>
            <p>{data.data?.id.videoId}</p>
        </div>

    );
}
export { VideoCard };