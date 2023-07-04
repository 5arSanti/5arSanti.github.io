import "./styles.css";

const WebPagesCard = (data) => {

    return(
        <div className="web-pages-card">
            <div className="web-pages-card-image-and-name">
                <a target="_blank" rel="noreferrer noopener" href={data.data?.homeLink}>
                    <img src={data.data?.image} alt={data.data?.name}/>
                </a>
                <p>{data.data?.name}</p>

            </div>
            <div className="web-pages-card-icons">
                <a target="_blank" rel="noreferrer noopener" href={data.data?.repo}>
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png"></img>
                </a>
                <a target="_blank" rel="noreferrer noopener" href={data.data?.homeLink}>
                    <img src="https://cdn-icons-png.flaticon.com/512/9385/9385212.png" alt="DeviantArtIcon"></img>
                </a>
            </div>
        </div>
    );
}
export { WebPagesCard };