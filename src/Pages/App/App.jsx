//React
// import React from 'react'
import {useRoutes, BrowserRouter} from "react-router-dom";

//Context
import { PortfolioProvider } from '../../Context';

//Paginas
import {Home} from "../Screens/Home";

//CSS
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/", element: <Home/>}
    ]);
    return routes;
}

const App = () => {
    return (
        <PortfolioProvider>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </PortfolioProvider>

    );
}

export default App