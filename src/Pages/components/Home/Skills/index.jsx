import React from "react";
import { PortfolioContext } from "../../../../Context";
import "./styles.css";
import { Skill } from "../Skill";
import { Title } from "../../Title";

const Skills = () => {
    const context = React.useContext(PortfolioContext);

    return (
        <section className="skills" id="skills">
            <div className="skills-title">
                <Title>Skills</Title>
            </div>
            <div className="skills-container">
                {context.skillsCard?.map((item, index) => (
                    <Skill
                        key={index}
                        data={item}
                    />
                ))}
            </div>
            <div className="gradient-skills"></div>
        </section>
    );
}
export { Skills };