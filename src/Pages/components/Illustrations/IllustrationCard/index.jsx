import "./styles.css";

const IllustrationCard = (data) => {
    return(
        <div className={`illustration-card-container ${data.data?.size}`}>
            <img src={data.data?.image} alt="" />
        </div>
    );
}
export { IllustrationCard }; 