import { AboutMe } from "../../components/AboutMe";
import { AllInfoAbboutMe } from "../../components/AllInfoAboutMe";
import { Proyects } from "../../components/Proyects";

const Home = () => {
    return(
        <>
            <AboutMe/>
            <AllInfoAbboutMe/>
            <Proyects/>
        </>
    );
}
export {Home};