import React from "react";
import { PortfolioContext } from "../../../../Context";
import { WebPagesCard } from "../WebPagesCard";

const WebPagesGrid = () => {
    const context = React.useContext(PortfolioContext);

    return(
        <section>
            <h1>Paginas Web</h1>
            <div>
                {context.webPagesCard?.map((item) => (
                    <WebPagesCard
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </section>

    );
}
export { WebPagesGrid }