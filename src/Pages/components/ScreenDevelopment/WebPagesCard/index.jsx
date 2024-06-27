import "./styles.css";

const WebPagesCard = ({data}) => {

    return(
        <div className="web-pages-card">
            <div className="web-pages-card-image-and-name">
                <a target="_blank" rel="noreferrer noopener" href={data.link}>
                    <img src={data?.image} alt={data?.name}/>
                </a>
                <p>{data?.name}</p>

            </div>
            <div className="web-pages-card-icons">
                <a target="_blank" rel="noreferrer noopener" href={data?.repo}>
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHubIcon"></img>
                </a>
                {data.homeLink !== "" && 
                    <a target="_blank" rel="noreferrer noopener" href={data?.homeLink}>
                        <img src="https://cdn-icons-png.flaticon.com/512/9385/9385212.png" alt="HomePageIcon"></img>
                    </a>
                }

            </div>
        </div>
    );
}
export { WebPagesCard };