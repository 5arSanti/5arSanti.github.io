//React
import {useRoutes, BrowserRouter} from "react-router-dom";

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
            <BrowserRouter>
                <section id="top"></section>
                <Navbar/>
                <NavBarResponsive/>
                <AppRoutes/>
                <TopButton/>
                <Footer/>
            </BrowserRouter>
        </PortfolioProvider>

    );
}

export default App