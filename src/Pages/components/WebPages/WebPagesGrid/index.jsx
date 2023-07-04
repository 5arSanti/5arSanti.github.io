import React from "react";
import { PortfolioContext } from "../../../../Context";
import { WebPagesCard } from "../WebPagesCard";

import "./styles.css";

const WebPagesGrid = () => {
    const context = React.useContext(PortfolioContext);

    return(
        <section className="web-pages" id="web-pages">
            <div className="web-pages-container">
                <h1>Paginas Web</h1>
                <div className="web-pages-grid-container">
                    {context.webPagesCard?.map((item) => (
                        <WebPagesCard
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            </div>

        </section>

    );
}
export { WebPagesGrid }