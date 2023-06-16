import { AboutMe } from "../../components/AboutMe";
import { AllInfoAbboutMe } from "../../components/AllInfoAboutMe";
import { Projects } from "../../components/Projects";

const Home = () => {
    return(
        <>
            <AboutMe/>
            <AllInfoAbboutMe/>
            <Projects/>
        </>
    );
}
export {Home};