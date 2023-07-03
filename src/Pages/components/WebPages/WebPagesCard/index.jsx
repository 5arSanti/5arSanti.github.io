const WebPagesCard = (data) => {

    return(
        <div>
            <h1>HOLA</h1>
            <div>
                <img src={data.data?.image} alt=""/>
                <p>{data?.name}</p>
            </div>
        </div>
    );
}
export { WebPagesCard };