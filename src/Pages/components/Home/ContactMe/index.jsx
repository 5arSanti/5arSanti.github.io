import "./styles.css";
import { IconsList } from "../IconsList";

import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { Title } from "../../Title";

const ContactMe = () => {
    return(
        <section className="contact-me" id="contact-me">
            <div className="contact-me-container">
                <div className="contact-me-info">
                    <div className="contact-me-emails">
                        <h2>Mail:</h2>
                        <p className="animacion">
                            <a href="mailto:santiari05@hotmail.com">
                                santiari05@hotmail.com 
                                <HiArrowTopRightOnSquare className="text-sm"/>
                            </a>
                        </p>
                        <p className="animacion">
                            <a href="mailto:05illarsanti@gmail.com">
                                05illarsanti@gmail.com 
                                <HiArrowTopRightOnSquare className="text-sm"/>
                            </a>
                        </p>
                    </div>
                    <div className="contact-me-phone">
                        <h2>Number:</h2>
                        <p>+57 314 401 3931</p>
                    </div>
                    <div className="contact-me-icons">
                        <h2>Social Media:</h2>
                        <IconsList/>
                    </div>
                </div>
            </div>
            <div className="contact-me-title">
                <h1>Contact Me</h1>
            </div>
        </section>
    );
}
export { ContactMe };