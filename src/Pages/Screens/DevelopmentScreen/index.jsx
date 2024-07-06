import React from "react";
import { PortfolioContext } from "../../../Context";
import { WebPagesHome } from "../../components/ScreenDevelopment/WebPagesHome";
import { DevelopmentGrid } from "../../components/ScreenDevelopment/DevelopmentGrid";

const DevelopmentScreen = () => {
    const context = React.useContext(PortfolioContext);
    React.useEffect(() => {
        context.setIsHomeActive(false);
        context.setIsIllustrationsActive(false);
        context.setIsWebPagesActive(true);
    }, []);

    return(
        <>
            <WebPagesHome/>
            <DevelopmentGrid/>
            {/* <FrontMentorGrid/> */}
        </>
    );
}
export { DevelopmentScreen };