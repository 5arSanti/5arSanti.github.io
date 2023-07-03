import React from "react";
import PropTypes from "prop-types";

import { skills } from "../utils/skillsList.js";
import { illustrations } from "../utils/illustrationsList.js"
import { webPagesList } from "../utils/WebPagesList.js";

export const PortfolioContext = React.createContext();



const PortfolioProvider = ({children}) => {
    PortfolioProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //Loading and Error
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);




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

    const [isMouseInCard, setIsMouseInCard] = React.useState(null);
    const handleMouseEnter = (index) => setIsMouseInCard(index);
    const handleMouseOver = () => setIsMouseInCard(null);
    

    //WebPages
    const [webPagesCard, setWebPagesCard] = React.useState([]);
    React.useEffect(() => {
        const reversedWebPages = [...webPagesList].reverse();
        setWebPagesCard(reversedWebPages);
    }, []);

    //-------------------------
    //API
    const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCD7cKAQQNzzYQeZ7Pm7-fwg&part=snippet%2Cid&order=date&maxResults=3';
    const [videos, setVideos] = React.useState([]);


    React.useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f398d6f9ebmsh8a25ce537b8d773p12eddfjsn63c97481e808',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };
        const fetchVideos = async () => {
            try {
                const response = await fetch(API, options);
                const data = await response.json();
                setVideos(data.items);
                await setLoading(false);
            } 
            catch (error) {
                setError(true);
                console.error(error);             
            }
        } 
        fetchVideos();
    }, [])

    return(
        <PortfolioContext.Provider
            value={{
                loading,
                error,

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
                isMouseInCard,
                handleMouseEnter,
                handleMouseOver,

                webPagesCard,

                videos,



            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export {PortfolioProvider};