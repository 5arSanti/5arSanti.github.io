import "./styles.css";

const Error = () => {
    return(
        <div className="error-container">
            <div className="error-image-container">
                <img src="https://cdn-icons-png.flaticon.com/512/2731/2731804.png" alt="Error-icon" />
            </div>
            <div className="error-text-container">
                <p>Ocurrio un error cargando...</p>
                <p>Lo estamos solucionando :)</p>
            </div>
        </div>
    );
}
export { Error };
