import React from "react";

import { PortfolioContext } from "../../../Context";

import { LuArrowLeftFromLine } from "react-icons/lu";
import { LuArrowRightFromLine } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { navOptions } from "../../../utils/navOptions";
import { HashLink } from "react-router-hash-link";
import { ColorButton } from "../ColorButton";
import { DownloadCV } from "../DownloadCV";

import "./styles.css";
import { WrapperContainer2 } from "../WrapperContainers";
import { Fade } from "react-awesome-reveal";

const NavBarResponsive = () => {
    const context = React.useContext(PortfolioContext);

    const [activeMenu, setActiveMenu] = React.useState(false);

    const { home, illustrations, webPages } = navOptions;

    const mapOptions = (options) => {
        const array = Object.keys(options) || [];

        return(
            array.map((item, index) => (
                <MenuItem key={index} icon={options[item].icon} component={
                    <HashLink to={`/${options[item].link}`}/>
            }>
                {item}
            </MenuItem>
            ))
        )
    }

    const { isNavbarMenuOpen} = context;

    return(
        context.windowWidth <= 800 && isNavbarMenuOpen &&

                <Sidebar collapsed={activeMenu} backgroundColor="transparent" className={`side-menu-container ${!activeMenu ? "lines-background" : ""}`}>
                    <Fade>
                        <Menu style={{display: "flex", flexDirection: "column", height: "100%"}}>
                            { context.isHomeActive && mapOptions(home) }

                            { context.isIllustrationsActive &&  mapOptions(illustrations)}

                            { context.isWebPagesActive && mapOptions(webPages) }

                            <MenuItem icon={<ColorButton/>}><ColorButton icon={false} text={true}/></MenuItem>

                            <MenuItem icon={<DownloadCV text={false}/>}><DownloadCV/></MenuItem> 

                            <MenuItem 
                                icon={!activeMenu ? <LuArrowLeftFromLine/> : <LuArrowRightFromLine/>}
                                onClick={() => {setActiveMenu(!activeMenu)}}
                                className="end"
                            >
                                {!activeMenu ? "Close" : "Open"}
                            </MenuItem>

                        </Menu>
                    </Fade>
                </Sidebar>

    );
}
export {NavBarResponsive};