//React
// import React from 'react'
import {useRoutes, BrowserRouter} from "react-router-dom";

//Context
import { PortfolioProvider } from '../../Context';

//Paginas
import {Home} from "../Screens/Home";

//COMPONENTES
import {Navbar} from "../components/Navbar";
import { Footer } from "../components/Footer";

//CSS
import './App.css'
import { NavBarResponsive } from "../components/NavBarResponsive";

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/", element: <Home/>},
    ]);
    return routes;
}

const App = () => {
    return (
        <PortfolioProvider>
            <BrowserRouter>
                <Navbar/>
                <NavBarResponsive/>
                <AppRoutes/>
                <Footer/>
            </BrowserRouter>
        </PortfolioProvider>

    );
}

export default App