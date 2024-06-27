import React from "react";
import { PortfolioContext } from "../../../Context";
import { IllustrationsHome } from "../../components/ScreenIllustrations/IllustrationsHome";
import { IllustrationsGrid } from  "../../components/ScreenIllustrations/IllustrationsGrid"
import { VideosGrid } from "../../components/ScreenIllustrations/VideosGrid";

const IllustrationsScreen = () => {
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
export { IllustrationsScreen };