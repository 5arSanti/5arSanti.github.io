import React from "react";
import { PortfolioContext } from "../../../Context";

const Illustrations = () => {
    const context = React.useContext(PortfolioContext);

    context.setIsHomeActive(false);
    context.setIsIllustrationsActive(true);
    context.setIsWebPagesActive(false);


    return(
        <div>ILUSTRACIONES</div>
    );
}
export { Illustrations };