import React from "react";
import { PortfolioContext } from "../../../../Context";
import { IllustrationCard } from "../IllustrationCard";

import "./styles.css";

const IllustrationsGrid = () => {
    const context = React.useContext(PortfolioContext);     

    return(
        <section className="illustrations" id="illustrations">
            <h1 className="titulo">Ilustraciones</h1>
            <div className="illustrations-container">
                {context.illustrationsCard?.map((item) => (
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
