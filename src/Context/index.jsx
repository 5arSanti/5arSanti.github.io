import React from "react";
import PropTypes from "prop-types";

import { skills } from "../utils/lists/skillsList.js";
import { illustrations } from "../utils/lists/illustrationsList.js"
import { webPages } from "../utils/lists/webPagesList.jsx";
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


    //-------------------------
    //Llamado de los arrays
    const [responseData, setResponseData] = React.useState({
        skills,
        illustrations,
        webPages,
    });


    const fetchData = async (endpoints, setState=setResponseData) => {
        try {
            setLoading(true);
            const data = await fetchAllData(endpoints);

            setState((prevData) => ({
                ...prevData,
                ...data,
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

    React.useEffect(() => {
        const endpoints = [
            {
                responseName: "videos",
                uri: "https://youtube-v31.p.rapidapi.com/search?channelId=UCD7cKAQQNzzYQeZ7Pm7-fwg&part=snippet%2Cid&order=date&maxResults=4",
                headers: {
                    'x-rapidapi-key': '057c40ebd6msh17b09cc542709b7p1f1e62jsnb08427648734',
                    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
                }
            },
            {
                responseName: "projects",
                uri: "https://api.github.com/users/5arSanti/repos?type=public&sort=updated&per_page=50",
                headers: {
                    "Authorization": `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                },
            }
        ];

        handleNotifications("info", "In maintenance")

        fetchData(endpoints)
    },[]);

    // Screen Width
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    //Colors
    const [activeHighContrast, setActiveHighContrast] = React.useState(() => {
        const savedMode = localStorage.getItem('night');
        return savedMode === 'true';
    });

    
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

                windowWidth,

                fetchData,

                activeHighContrast,
                setActiveHighContrast
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export { PortfolioProvider };