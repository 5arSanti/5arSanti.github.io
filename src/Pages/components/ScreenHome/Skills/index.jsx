import React from "react";
import { PortfolioContext } from "../../../../Context";
import "./styles.css";
import { SkillCard } from "./SkillCard";
import { Title } from "../../Title";
import { SectionWrapper, WrapperContainer2 } from "../../WrapperContainers";
import { SliderSkills } from "./SliderSkills";

const Skills = () => {
    const context = React.useContext(PortfolioContext);

    const { skills } = context.responseData || [];

    return (
        <SectionWrapper id="skills">
            <WrapperContainer2>
                <Title>Skills</Title>

                <SliderSkills array={skills}/>
            </WrapperContainer2>
        </SectionWrapper>
    );
}
export { Skills };