import React from "react";
import { PortfolioContext } from "../../../Context";
import { WebPagesHome } from "../../components/WebPages/WebPagesHome";
import { WebPagesGrid } from "../../components/WebPages/WebPagesGrid";
import { FrontMentorGrid } from "../../components/WebPages/FrontMentorGrid";

const WebPages = () => {
    const context = React.useContext(PortfolioContext);
    React.useEffect(() => {
        context.setIsHomeActive(false);
        context.setIsIllustrationsActive(false);
        context.setIsWebPagesActive(true);
    }, [context]);

    return(
        <>
            <WebPagesHome/>
            <WebPagesGrid/>
            <FrontMentorGrid/>
        </>
    );
}
export { WebPages };