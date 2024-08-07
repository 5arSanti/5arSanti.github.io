import React from "react";
import { PortfolioContext } from "../../../../Context";
import { DevelopmentCard } from "./DevelopmentCard";

import { Title } from "../../Title";
import { SectionWrapper, WrapperContainer2 } from "../../WrapperContainers";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { TextCard } from "../../TextComponents";

const DevelopmentGrid = () => {
    const context = React.useContext(PortfolioContext);

    const { projects } = context.responseData || [];

    return(
        <SectionWrapper border={false} id="development">
            <WrapperContainer2 gap={10}>
                <Title>Development Projects</Title>

                <TextCard textAlign="center" fontSize={12}>Showing the last {projects?.length} projects ordered by update date</TextCard>

                <AllInfoGridContainer className="grid-1-1" gap={50} padding={30}>
                    {projects?.map((item, index) => (
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