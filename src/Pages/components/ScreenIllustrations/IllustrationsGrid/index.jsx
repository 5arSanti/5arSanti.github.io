import React from "react";
import { PortfolioContext } from "../../../../Context";
import { IllustrationCard } from "../IllustrationCard";

import "./styles.css";
import { Title } from "../../Title";
import { SectionWrapper, WrapperContainer2 } from "../../WrapperContainers";

const IllustrationsGrid = () => {
    const context = React.useContext(PortfolioContext);

    const { illustrations } = context.responseData || [];

    return(
        <SectionWrapper id="illustrations">
            <WrapperContainer2 padding={30}>
                <Title>Illustrations</Title>
                <div className="illustrations-container">
                    {illustrations?.map((item, index) => (
                        <IllustrationCard
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
            </WrapperContainer2>
        </SectionWrapper>
    );
}
export { IllustrationsGrid };
