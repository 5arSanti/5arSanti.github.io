import { MdOutlineMonitor } from "react-icons/md";
import { BsDatabaseCheck } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";

const heigth = 50;

const icons = {
    "Frontend": <MdOutlineMonitor width={heigth} />,
    "FullStack": <BsDatabaseCheck width={heigth} />,
    "Mobile": <CiMobile3 width={heigth} />
}

const webPagesList = [
    {
        name: "TODO Machine",
        image: "http://imagizer.imageshack.com/img922/4475/f3L6wk.png",
        repo: "https://github.com/5arSanti/Curso-de-React-js",
        homeLink: "https://5arsanti.github.io/Curso-de-React-js/",
        icon: icons["Frontend"]
    },
    {
        name: "Shopi E-commerce",
        image: "https://i.imgur.com/fvgnK5n.png",
        repo: "https://github.com/5arSanti/Curso-de-React-js-con-Vite-js-y-TailwindCSS",
        homeLink: "https://lambent-snickerdoodle-61f33d.netlify.app/",
        icon: icons["Frontend"]
    },
    {
        name: "Sunrise Mirror",
        image: "https://i.imgur.com/y4Kk10E.png",
        repo: "https://github.com/5arSanti/Sunrise-Mirror",
        homeLink: "https://5arsanti.github.io/Sunrise-Mirror/",
        icon: icons["Frontend"]
    },
    {
        name: "Blog Personal",
        image: "https://i.imgur.com/7mXHc1n.png",
        repo: "https://github.com/5arSanti/Curso-Practico-de-Maquetacion-en-CSS",
        homeLink: "https://5arsanti.github.io/Curso-Practico-de-Maquetacion-en-CSS/",
        icon: icons["Frontend"]
    },
    {
        name: "Animationland",
        image: "https://i.imgur.com/kWodtKz.png",
        repo: "https://github.com/5arSanti/Curso-de-Animaciones-con-CSS",
        homeLink: "https://5arsanti.github.io/Curso-de-Animaciones-con-CSS/",
        icon: icons["Frontend"]
    },
    {
        name: "Portafolio Profesional",
        image: "https://i.imgur.com/6nCsDWt.png",
        repo: "https://github.com/5arSanti/5arSanti.github.io",
        homeLink: "https://5arsanti.github.io/",
        icon: icons["Frontend"]
    },
    {
        name: "Cameras Frontend",
        image: "https://i.imgur.com/nKToOWW.png",
        repo: "https://github.com/5arSanti/camaras-front",
        homeLink: "https://5arsanti.github.io/camaras-front/",
        icon: icons["Frontend"]
    },
]

const webPages = webPagesList.reverse();

export { webPages }