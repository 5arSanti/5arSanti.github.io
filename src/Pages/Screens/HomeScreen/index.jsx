import React from "react";

import { PortfolioContext } from "../../../Context";

import { AboutMe } from "../../components/ScreenHome/AboutMe";
import { AllInfoAbboutMe } from "../../components/ScreenHome/AllInfoAboutMe";
import { ContactMe } from "../../components/ScreenHome/ContactMe";
import { Projects } from "../../components/ScreenHome/Projects";
import { Skills } from "../../components/ScreenHome/Skills";
import { WrapperContainer2 } from "../../components/WrapperContainers";

const HomeScreen = () => {
    const context = React.useContext(PortfolioContext);
    React.useEffect(() => {
        context.setIsHomeActive(true);
        context.setIsIllustrationsActive(false);
        context.setIsWebPagesActive(false);
    }, [context]);

    return(
        <WrapperContainer2 padding={0} gap={0}>
            <AboutMe/>
            <AllInfoAbboutMe/>
            <Projects/>
            <Skills/>
            <ContactMe/>    
        </WrapperContainer2>
    );
}
export { HomeScreen };