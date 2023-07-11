import React from "react";
import { PortfolioContext } from "../../../../Context";
import "./styles.css";
import { Skill } from "../Skill";

const Skills = () => {
    const context = React.useContext(PortfolioContext);

    return (
        <section className="skills" id="skills">
            <div className="skills-title">
                <h1 className="titulo">Habilidades</h1>
            </div>
            <div className="skills-container">
                {context.skillsCard?.map(item => (
                    <Skill
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
            <div className="gradient-skills"></div>
        </section>
    );
}
export { Skills };