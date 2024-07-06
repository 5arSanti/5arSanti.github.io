import React from "react";
import { PortfolioContext } from "../../../../Context";
import { DevelopmentCard } from "./DevelopmentCard";

import "./styles.css";
import { Title } from "../../Title";
import { SectionWrapper, WrapperContainer2 } from "../../WrapperContainers";
import { AllInfoGridContainer } from "../../AllInfoContainer";

const DevelopmentGrid = () => {
    const context = React.useContext(PortfolioContext);

    const { projects } = context.responseData || [];

    return(
        <SectionWrapper border={false} id="development">
            <WrapperContainer2>
                <Title>Development Projects</Title>

                <AllInfoGridContainer className="grid-1-1" gap={50} padding={30}>
                    {projects?.filter(item => item.private !== true).map((item, index) => (
                        <DevelopmentCard
                            key={index}
                            item={item}
                        />
                    ))}
                </AllInfoGridContainer>

            </WrapperContainer2>
        </SectionWrapper>
    );
}
export { DevelopmentGrid }