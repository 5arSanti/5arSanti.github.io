//React
import React from "react";
import {useRoutes, useLocation, HashRouter} from "react-router-dom";

//Context
import { PortfolioProvider } from '../../Context';

//Paginas
import { HomeScreen } from "../Screens/HomeScreen";
import { IllustrationsScreen } from "../Screens/Illustrations";
import { DevelopmentScreen } from "../Screens/DevelopmentScreen";

//COMPONENTES
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NavBarResponsive } from "../components/NavBarResponsive";
import { TopButton } from "../components/TopButton";

//CSS
import './App.css'

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/", element: <HomeScreen/>},
        {path: "/ilustraciones", element: <IllustrationsScreen/>},
        {path: "/development", element: <DevelopmentScreen/>}
    ]);
    
    return routes;
}

const App = () => {
    return (
        <PortfolioProvider>
            <HashRouter>
                <Wrapper>
                    <Navbar/>
                    <NavBarResponsive/>
                    <AppRoutes/>
                    <TopButton/>
                    <Footer/>
                </Wrapper>
            </HashRouter>
        </PortfolioProvider>

    );
}

export default App