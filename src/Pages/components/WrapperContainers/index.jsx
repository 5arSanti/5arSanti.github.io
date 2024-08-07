import { Fade } from "react-awesome-reveal";
import "./styles.css";
import { BsBorderWidth } from "react-icons/bs";

const WrapperContainer1 = ({children, flexDirection = "column", padding = 30, gap = 15, justifyContent="start", alignItems="center", className="", border=true}) => {
    return(
        <div className={`wrapper-container1 shadow-style ${border && "border-left-style"} ${className}`} style={{
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

const WrapperContainer2 = ({
        children, 
        flexDirection = "column", 
        padding = 30, 
        paddingVertical=null, 
        gap = 30, 
        justifyContent="start", 
        alignItems="center", 
        className="",
    }) => {

    return(
        <div className={`wrapper-container2 ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems,
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

const WrapperContainer4 = ({children, flexDirection = "column", padding = 30, paddingVertical=50, paddingHorizontal=30, gap = 15, justifyContent="start", alignItems="start", className=""}) => {
    return(
        <div className={`wrapper-container4 ${className}`} style={{
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

            <Fade style={{width: "100%"}} cascade={true} damping={1} delay={100}>
                {children}
            </Fade>
        </section>

    );
}

export { WrapperContainer1, WrapperContainer2, WrapperContainer3, WrapperContainer4, SectionWrapper };