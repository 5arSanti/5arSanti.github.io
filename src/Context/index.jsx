import React from "react";
import PropTypes from "prop-types";

export const PortfolioContext = React.createContext();

const PortfolioProvider = ({children}) => {
    PortfolioProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return(
        <PortfolioContext.Provider
            value={{

            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export {PortfolioProvider};