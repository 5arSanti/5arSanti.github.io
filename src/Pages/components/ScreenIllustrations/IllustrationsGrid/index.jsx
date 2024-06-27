import React from "react";
import { PortfolioContext } from "../../../../Context";
import { IllustrationCard } from "../IllustrationCard";

import "./styles.css";
import { Title } from "../../Title";

const IllustrationsGrid = () => {
    const context = React.useContext(PortfolioContext);     

    return(
        <section className="illustrations" id="illustrations">
            <Title>Illustrations</Title>
            <div className="illustrations-container">
                {context.illustrationsCard?.map((item, index) => (
                    <IllustrationCard
                        key={index}
                        data={item}
                    />
                ))}
            </div>
        </section>
    );
}
export { IllustrationsGrid };
