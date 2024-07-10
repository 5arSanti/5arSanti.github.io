import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { PiCirclesThreePlus } from "react-icons/pi";
import { IoIosMailUnread } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { FaCode } from "react-icons/fa";


const navOptions =  {
    "home": {
        "Home": {link: "#home", icon: <FaHome/>},
        "About Me": {link: "#about-me", icon: <FaUser />},
        "Projects": {link: "#projects", icon: <GoProject/>},
        "Skills": {link: "#skills", icon: <PiCirclesThreePlus/>},
        "Contact Me": {link: "#contact-me", icon: <IoIosMailUnread/>}
    },
    "illustrations": {
        "Home": {link: "ilustraciones/#illustrations-home", icon: <FaHome/> },
        "Time Lapses": {link: "ilustraciones/#time-lapses", icon: <FaYoutube/>},
        "Illustrations": {link: "ilustraciones/#illustrations", icon: <IoMdColorPalette/>},
    },
    "webPages": {
        "Home": {link: "development/#web-pages-home", icon: <FaHome/> },
        "Development": {link: "development/#development", icon: <FaCode/>},
    } 
};

export { navOptions };