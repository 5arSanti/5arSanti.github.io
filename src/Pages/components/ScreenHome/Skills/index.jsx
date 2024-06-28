import React from "react";
import { PortfolioContext } from "../../../../Context";
import "./styles.css";
import { SkillCard } from "./SkillCard";
import { Title } from "../../Title";
import { SectionWrapper, WrapperContainer2 } from "../../WrapperContainers";
import { SliderSkills } from "./SliderSkills";

const Skills = () => {
    const context = React.useContext(PortfolioContext);

    return (
        <SectionWrapper id="skills">
            <WrapperContainer2>
                <Title>Skills</Title>

                <SliderSkills/>
            </WrapperContainer2>
        </SectionWrapper>
    );
}
export { Skills };