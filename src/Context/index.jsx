import React from "react";
import PropTypes from "prop-types";

import { skills } from "../utils/lists/skillsList.js";
import { illustrations } from "../utils/lists/illustrationsList.js"
import { webPages } from "../utils/lists/webPagesList.js";
import { frontMentorList } from "../utils/lists/frontMentorList.js";
import { handleNotifications } from "../utils/handleNotifications.js";
import { fetchAllData } from "../utils/handleData/handleFetchData.js";


export const PortfolioContext = React.createContext();

const PortfolioProvider = ({children}) => {
    PortfolioProvider.propTypes = {
        children: PropTypes.any.isRequired,
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

    //-------------------------
    //Llamado de los arrays
    const [responseData, setResponseData] = React.useState({
        skills,
        illustrations,
        webPages,
        frontMentorList,
    });


    const fetchData = async (endpoints) => {
        try {
            setLoading(true);
            const data = await fetchAllData(endpoints);
            setResponseData((prevData) => ({
                ...prevData,
                videos: data.items,
            }));
        } 
        catch (err) {
            setError(true)
            handleNotifications("error", err.message)
        } 
        finally {
            setLoading(false);
        }
    }

    //API
    const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCD7cKAQQNzzYQeZ7Pm7-fwg&part=snippet%2Cid&order=date&maxResults=4';

    React.useEffect(() => {
        const endpoints = [
            {
                uri: API,
                headers: {
                    'x-rapidapi-key': '057c40ebd6msh17b09cc542709b7p1f1e62jsnb08427648734',
                    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
                }
            },
        ];

        handleNotifications("info", "In maintenance")
        fetchData(endpoints)
    },[]);


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

    // Screen Width
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return(
        <PortfolioContext.Provider
            value={{
                loading,
                error,

                responseData,

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

                handleMoreInfo1Button,
                moreInfo1Button,
                handleMoreInfo2Button,
                moreInfo2Button,

                windowWidth,
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export {PortfolioProvider};