import { DownloadCV } from "../../DownloadCV";
import { IconsList } from "../IconsList";
import "./styles.css"

const AllInfoAbboutMe = () => {
    const date = new Date();
    const year = date.getFullYear();

    let expTime = year - 2020;

    return (
        <section id="about-me" className="about-me">
            <div className="about-me-container">
                <div>
                    <img className="w-full" src="https://images.pexels.com/photos/11843706/pexels-photo-11843706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen AboutMe" />
                </div>
                <div className="about-me-info-container">
                    <h1>About Me</h1>
                    <p>
                        I am a Junior FullStack Developer and UX/UI Designer; with great creative capacity, 
                        and skill in visual design, with knowledge in programming languages such as: 
                        JavaScript, PHP, Python, HTML, CSS, and some frameworks or libraries like ExpressJS, 
                        ReactJS and React Native, as well as in the NodeJS runtime environment, also in 
                        development and maintenance of codes in computer applications and programs.

                        <br /> 
                        <br />
                        
                        I have {expTime} years of experience as a Digital Illustrator using the Krita tool, with experience 
                        in designing web pages and corporate logos. Committed to providing high-capacity and 
                        efficient results.
                    </p>
                    <DownloadCV/>
                    <IconsList/>
                </div>
            </div>
        </section>
    );
}
export { AllInfoAbboutMe };