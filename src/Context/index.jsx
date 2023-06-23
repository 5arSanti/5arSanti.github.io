import React from "react";
import PropTypes from "prop-types";

import { skills } from "../utils/skillsList.js";
import { illustrations } from "../utils/illustrationsList.js"

export const PortfolioContext = React.createContext();



const PortfolioProvider = ({children}) => {
    PortfolioProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }


    //Cambios del navbar dependiendo del path
    const [isHomeActive, setIsHomeActive] = React.useState(false);
    const [isIllustrationsActive, setIsIllustrationsActive] = React.useState(false);
    const [isWebPagesActive, setIsWebPagesActive] = React.useState(false);
    


    //Navbar
    const [isNavbarMenuOpen, setIsNavbarMenuOpen] = React.useState(false);
    const [navbarTimer, setNavbarTimer] = React.useState(true);

    const toggleNavbarMenuResponsive = () => {
        if(!isNavbarMenuOpen){
            setNavbarTimer(false);
            setTimeout(() => {
                setIsNavbarMenuOpen(true);
            },1)
        }
        else{
            setIsNavbarMenuOpen(false);
            setTimeout(() =>{
                setNavbarTimer(true);
            }, 751);
        }
    }

    //Skills
    const [skillsCard, setSkillsCard] = React.useState([]);

    React.useEffect(() => {
        setSkillsCard(skills);
    }, []);

    //Ilustraciones
    const [illustrationsCard, setIllustrationsCard] = React.useState([]);

    React.useEffect(() => {
        const reversedIllustrations = [...illustrations].reverse();
        setIllustrationsCard(reversedIllustrations);
    }, []);


    return(
        <PortfolioContext.Provider
            value={{
                isHomeActive,
                setIsHomeActive,
                isIllustrationsActive,
                setIsIllustrationsActive,
                isWebPagesActive,
                setIsWebPagesActive,


                isNavbarMenuOpen,
                setIsNavbarMenuOpen,
                toggleNavbarMenuResponsive,
                navbarTimer,
                setNavbarTimer,

                skillsCard,
                illustrationsCard,



            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export {PortfolioProvider};