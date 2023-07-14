//React
import React from "react";
import {useRoutes, BrowserRouter, useLocation} from "react-router-dom";

//Context
import { PortfolioProvider } from '../../Context';

//Paginas
import {Home} from "../Screens/Home";
import { Illustrations } from "../Screens/Illustrations";
import { WebPages } from "../Screens/WebPages";

//COMPONENTES
import {Navbar} from "../components/Navbar";
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
        {path: "/", element: <Home/>},
        {path: "/ilustraciones", element: <Illustrations/>},
        {path: "/paginas-web", element: <WebPages/>}
    ]);
    
    return routes;
}

const App = () => {
    return (
        <PortfolioProvider>
            <BrowserRouter basename="/">
                <Wrapper>
                    <section id="top"></section>
                    <Navbar/>
                    <NavBarResponsive/>
                    <AppRoutes/>
                    <TopButton/>
                    <Footer/>
                </Wrapper>
            </BrowserRouter>
        </PortfolioProvider>

    );
}

export default App