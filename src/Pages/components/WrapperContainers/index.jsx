import "./styles.css";

const WrapperContainer1 = ({children, flexDirection = "column", padding = 30, gap = 15, justifyContent="start", alignItems="center"}) => {
    return(
        <div className="wrapper-container1 shadow-style border-left-style" style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
            justifyContent: justifyContent, 
            alignItems: alignItems,
        }}>
            {children}
        </div>
    );
}

const WrapperContainer2 = ({children, flexDirection = "column", padding = 30, paddingVertical=null, gap = 30, justifyContent="start", alignItems="center", className=""}) => {
    return(
        <div className={`wrapper-container2 ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

const WrapperContainer3 = ({children, flexDirection = "column", padding = 30, paddingVertical=null, gap = 15, justifyContent="start", alignItems="center", className=""}) => {
    return(
        <div className={`wrapper-container3 border-left-style shadow-style ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

const WrapperContainer4 = ({children, flexDirection = "column", padding = 30, paddingVertical=50, paddingHorizontal=30, gap = 15, justifyContent="start", alignItems="start"}) => {
    return(
        <div className="wrapper-container4" style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            paddingRight: paddingHorizontal || padding,
            paddingLeft: paddingHorizontal || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

const SectionWrapper = ({children, id="", border=true, flexDirection = "column", padding = 0, gap = 0, justifyContent="start", alignItems="start"}) => {
    return(
        <section className="section-wrapper" id={id} style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {border && <div className="section-decoration"></div>}
            
            {children}
        </section>
    );
}

export { WrapperContainer1, WrapperContainer2, WrapperContainer3, WrapperContainer4, SectionWrapper };