import dotenv from "dotenv";
dotenv.config();

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

    const [isMouseInCard, setIsMouseInCard] = React.useState(null);
    const handleMouseEnter = (index) => setIsMouseInCard(index);
    const handleMouseOver = () => setIsMouseInCard(null);
    


    //-------------------------
    //API
    const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCD7cKAQQNzzYQeZ7Pm7-fwg&part=snippet%2Cid&order=date&maxResults=3';
    const [videos, setVideos] = React.useState([]);


    React.useEffect(()=> {
        const apiKey = import.meta.env.API_KEY;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };
        const fetchVideos = async () => {
            try {
                const response = await fetch(API, options);
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.error(error);
            }
        } 
        fetchVideos();
    }, [])

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
                isMouseInCard,
                handleMouseEnter,
                handleMouseOver,

                videos,



            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export {PortfolioProvider};