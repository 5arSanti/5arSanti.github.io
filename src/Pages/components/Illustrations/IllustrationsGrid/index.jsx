import React from "react";
import { PortfolioContext } from "../../../../Context";
import { IllustrationCard } from "../IllustrationCard";

import "./styles.css";

const IllustrationsGrid = () => {
    const context = React.useContext(PortfolioContext);     

    return(
        <section className="illustrations" id="illustrations">
            <div className="illustrations-container">
                {context.illustrationsCard?.reverse().map(item => (
                    <IllustrationCard
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </section>
    );
}
export { IllustrationsGrid };