import React from "react";
import { PortfolioContext } from "../../../Context";

const Illustrations = () => {
    const context = React.useContext(PortfolioContext);
    React.useEffect(() => {
        context.setIsHomeActive(false);
        context.setIsIllustrationsActive(true);
        context.setIsWebPagesActive(false);
    }, [context]);

    return(
        <>
            <div>ILUSTRACIONES</div>
        </>
    );
}
export { Illustrations };