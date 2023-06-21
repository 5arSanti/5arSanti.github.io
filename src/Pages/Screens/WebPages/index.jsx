import React from "react";
import { PortfolioContext } from "../../../Context";

const WebPages = () => {
    const context = React.useContext(PortfolioContext);

    context.setIsHomeActive(false);
    context.setIsIllustrationsActive(false);
    context.setIsWebPagesActive(true);

    return(
        <div>PAGINAS WEB</div>
    );
}
export { WebPages };