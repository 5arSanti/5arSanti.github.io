import { getColorValue } from "../../../../utils/getColorValue";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { DownloadCV } from "../../DownloadCV";
import { SubTitle } from "../../SubTitle";
import { TextCard } from "../../TextComponents";
import { SectionWrapper, WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { IconsList } from "../../IconsList";
import "./styles.css"

const AllInfoAbboutMe = () => {
    const date = new Date();
    const year = date.getFullYear();

    let expTime = year - 2020;


    return (
        <SectionWrapper id="about-me" border={false}>
            <AllInfoGridContainer className="grid-125-075" padding={60}>
                <WrapperContainer1 justifyContent="center" alignItems="start" padding={40} gap={30}>
                    <SubTitle>About Me</SubTitle>
                    <TextCard>
                        I am a Junior FullStack Developer and UX/UI Designer; with great creative capacity, 
                        and skill in visual design, with knowledge in programming languages such as: 
                        JavaScript, PHP, Python, HTML, CSS, and some frameworks or libraries like ExpressJS, 
                        ReactJS and React Native, as well as in the NodeJS runtime environment, also in 
                        development and maintenance of codes in computer applications and programs.

                        <br /> 
                        <br />
                        
                        I have {expTime} years of experience as a Digital Illustrator using the Krita tool, with experience 
                        in designing web pages and corporate logos. Committed to providing high-capacity and 
                        efficient results.
                    </TextCard>

                    <DownloadCV/>

                    <IconsList padding={0}/>
                </WrapperContainer1>

                <WrapperContainer2 padding={0}>
                    <img className="about-me-image" src="https://images.pexels.com/photos/2470655/pexels-photo-2470655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen AboutMe" />
                </WrapperContainer2>
            </AllInfoGridContainer>
        </SectionWrapper>
    );
}
export { AllInfoAbboutMe };