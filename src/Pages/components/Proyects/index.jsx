import { Link } from "react-router-dom";

import Portada1 from "../../../public/Portada-Ilustraciones.png";
import Portada2 from "../../../public/Portada-Web.png";

import "./styles.css"
import { HiChevronRight } from "react-icons/hi2";

const Proyects = () => {
    return(
        <section className="proyects" id="proyects">
            <h1 className="proyects-title">Proyectos</h1>
            <div className="proyects-container">
                <div className="proyects-illustrations-Web">
                    <div className="proyect-info">
                        <h1>Ilustraciones</h1>
                        <Link>
                            <button>
                                Ver mas <HiChevronRight className="text-white ml-1"/>
                            </button>
                        </Link>
                    </div>
                    <img src={Portada1} alt=""/>
                </div>
                <div className="proyects-illustrations-Web">
                    <div className="proyect-info">
                        <h1>Paginas Web</h1>
                        <Link>
                            <button>
                                Ver mas <HiChevronRight className="text-white ml-1"/>
                            </button>
                        </Link>
                    </div>
                    <img src={Portada2} alt=""/>
                </div>
            </div>

        </section>
    );
}
export { Proyects };