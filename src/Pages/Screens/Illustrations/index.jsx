import React from "react";
import { PortfolioContext } from "../../../Context";
import { IllustrationsHome } from "../../components/Illustrations/IllustrationsHome";
import { IllustrationsGrid } from  "../../components/Illustrations/IllustrationsGrid"
import { VideosGrid } from "../../components/Illustrations/VideosGrid";

const Illustrations = () => {
    const context = React.useContext(PortfolioContext);
    React.useEffect(() => {
        context.setIsHomeActive(false);
        context.setIsIllustrationsActive(true);
        context.setIsWebPagesActive(false);
    }, [context]);

    return(
        <>
            <IllustrationsHome/>
            <VideosGrid/>
            <IllustrationsGrid/>
        </>
    );
}
export { Illustrations };