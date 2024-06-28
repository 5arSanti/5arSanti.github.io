import { IconsList } from "../IconsList";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SectionWrapper, WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { AnchorCard, SpanCard, TextCard } from "../../TextComponents";
import { SubTitle } from "../../SubTitle";
import { getColorValue } from "../../../../utils/getColorValue";

const ContactMe = () => {
    return(
        <SectionWrapper id="contact-me">
            <WrapperContainer2 padding={50}>
                <AllInfoGridContainer className="grid-075-125">
                    <WrapperContainer2 padding={0}>
                        <img className="about-me-image" src="https://images.pexels.com/photos/4014919/pexels-photo-4014919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen AboutMe" />
                    </WrapperContainer2>
                    
                    <WrapperContainer1 alignItems="start" padding={50} gap={30}>
                        <SubTitle>Contact Me</SubTitle>

                        <WrapperContainer2 alignItems="start" padding={0} gap={15}>
                            <TextCard><SpanCard>Mail:</SpanCard></TextCard>
                            <AnchorCard uri="mailto:santiari05@hotmail.com" className="animacion" width="auto">
                                santiari05@hotmail.com
                                <HiArrowTopRightOnSquare className="text-sm"/>
                            </AnchorCard>

                            <AnchorCard uri="mailto:05illarsanti@gmail.com" className="animacion" width="auto">
                                05illarsanti@gmail.com
                                <HiArrowTopRightOnSquare className="text-sm"/>
                            </AnchorCard>
                        </WrapperContainer2>

                        <WrapperContainer2 alignItems="start" padding={0} gap={15}>
                            <TextCard><SpanCard>Phone number:</SpanCard></TextCard>
                            <TextCard>+ 57 314 401 3931</TextCard>

                            <IconsList color={getColorValue("--lines-color")} padding={0}/>
                        </WrapperContainer2>

                    </WrapperContainer1>

                </AllInfoGridContainer>

            </WrapperContainer2>
        </SectionWrapper>
    );
}
export { ContactMe };