import React from "react";

import { PortfolioContext } from "../../../Context";

import { AboutMe } from "../../components/Home/AboutMe";
import { AllInfoAbboutMe } from "../../components/Home/AllInfoAboutMe";
import { ContactMe } from "../../components/Home/ContactMe";
import { Projects } from "../../components/Home/Projects";
import { Skills } from "../../components/Home/Skills";

const Home = () => {
    const context = React.useContext(PortfolioContext);
    React.useEffect(() => {
        context.setIsHomeActive(true);
        context.setIsIllustrationsActive(false);
        context.setIsWebPagesActive(false);
    }, [context]);

    return(
        <>  
            <AboutMe/>
            <AllInfoAbboutMe/>
            <Projects/>
            <Skills/>
            <ContactMe/>    
        </>
    );
}
export {Home};