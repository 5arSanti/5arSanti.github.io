import React from "react";
import PropTypes from "prop-types";

import { skills } from "../utils/skillsList.js";
import { illustrations } from "../utils/illustrationsList.js"
import { webPagesList } from "../utils/WebPagesList.js";
import { frontMentorList } from "../utils/frontMentorList.js";

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


    //Llamado de los arrays
    const [skillsCard, setSkillsCard] = React.useState([]);    //Skills
    const [illustrationsCard, setIllustrationsCard] = React.useState([]);    //Ilustraciones
    const [webPagesCard, setWebPagesCard] = React.useState([]);    //WebPages
    const [frontMentorCard, setFrontMentorCard] = React.useState([]);    //WebPages

    React.useEffect(() => {
        const setArrays = () => {
            try{
                //Skills
                setSkillsCard(skills);

                //Ilustraciones
                const reversedIllustrations = [...illustrations].reverse();
                setIllustrationsCard(reversedIllustrations);

                //WebPages
                const reversedWebPages = [...webPagesList].reverse();
                setWebPagesCard(reversedWebPages);

                //Frontend Mentor Projects
                const reversedFrontMentor = [...frontMentorList].reverse();
                setFrontMentorCard(reversedFrontMentor);
            }
            catch (error){
                alert(error);
            }
        }
        setArrays();
    }, []);

    const [isMouseInCard, setIsMouseInCard] = React.useState(null);
    const handleMouseEnter = (index) => setIsMouseInCard(index);
    const handleMouseOver = () => setIsMouseInCard(null);

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
                if (isIllustrationsActive){
                    await setLoading(false);
                }
            } 
            catch (error) {
                setError(true);
                console.error(error);             
            }
        
        } 
        fetchVideos();
    }, [isIllustrationsActive])



    //Boton de ver mas y ver menos
    const [moreInfo1Button, setMoreInfo1Button] = React.useState("hidden-info");
    const handleMoreInfo1Button = () => {
        switch(moreInfo1Button){
            case "hidden-info": setMoreInfo1Button("expanded-info");break;
            case "expanded-info": setMoreInfo1Button("hidden-info");break;
        }
    };
    const [moreInfo2Button, setMoreInfo2Button] = React.useState("hidden-info");
    const handleMoreInfo2Button = () => {
        switch(moreInfo2Button){
            case "hidden-info": setMoreInfo2Button("expanded-info");break;
            case "expanded-info": setMoreInfo2Button("hidden-info");break;
        }
    };
    
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
                frontMentorCard,

                videos,

                handleMoreInfo1Button,
                moreInfo1Button,
                handleMoreInfo2Button,
                moreInfo2Button,
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export {PortfolioProvider};