import React from "react";
import PropTypes from "prop-types";

export const PortfolioContext = React.createContext();

const PortfolioProvider = ({children}) => {
    PortfolioProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //Navbar
    const [isNavbarMenuOpen, setIsNavbarMenuOpen] = React.useState(false);

    const toggleNavbarMenuResponsive = () => {
        setIsNavbarMenuOpen(!isNavbarMenuOpen);
        console.log("Menu funciona")
        console.log(isNavbarMenuOpen);
    }

    return(
        <PortfolioContext.Provider
            value={{
                isNavbarMenuOpen,
                setIsNavbarMenuOpen,
                toggleNavbarMenuResponsive,

            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export {PortfolioProvider};