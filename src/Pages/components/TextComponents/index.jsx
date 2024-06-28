import "./styles.css";

const TextCard = ({children, textAlign="start", width="100%", className="", fontSize=16}) => {
    return(
        <p 
            style={{
                textAlign: textAlign, 
                width: width,
                fontSize: fontSize,
            }} 
            className={`text-card ${className}`}>{children}</p>
    );
}

const SpanCard = ({children, className}) => {
    return(
        <span className={`span-card ${className}`}>{children}</span>
    );
}

const AnchorCard = ({children, uri="", className="", padding=0, width="100%", fontSize=16}) => {
    return(
        <a href={uri} target="_blank" rel="noopener noreferrer" className={`anchor-card ${className}`} style={{
            padding: padding,
            width: width,
            fontSize: fontSize,

        }}>
            {children}
        </a>
    );
}

export { TextCard, SpanCard, AnchorCard }