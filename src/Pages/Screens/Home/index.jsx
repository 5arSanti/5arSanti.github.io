import { AboutMe } from "../../components/AboutMe";
import { AllInfoAbboutMe } from "../../components/AllInfoAboutMe";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";

const Home = () => {
    return(
        <>
            <AboutMe/>
            <AllInfoAbboutMe/>
            <Projects/>
            <Skills/>
        </>
    );
}
export {Home};