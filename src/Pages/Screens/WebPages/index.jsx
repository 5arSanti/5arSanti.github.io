import React from "react";
import { PortfolioContext } from "../../../Context";

const WebPages = () => {
    const context = React.useContext(PortfolioContext);
    React.useEffect(() => {
        context.setIsHomeActive(false);
        context.setIsIllustrationsActive(false);
        context.setIsWebPagesActive(true);  
    }, [context]);

    return(
        <>
            <div>Paginas WEB</div>
        </>
    );
}
export { WebPages };