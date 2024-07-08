import { Title } from "../../Title";
import { SectionWrapper, WrapperContainer2 } from "../../WrapperContainers";
import { SliderSkills } from "./SliderSkills";

const Skills = () => {
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