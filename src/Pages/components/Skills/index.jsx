import React from "react";
import { PortfolioContext } from "../../../Context";
import "./styles.css";
import { Skill } from "../Skill";

const Skills = () => {
    const context = React.useContext(PortfolioContext);

    return (
        <section className="skills" id="skills">
            <div className="skills-title">
                <h1>Habilidades</h1>
            </div>
            <div className="skills-container">
                {context.items?.map(item => (
                    <Skill
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </section>
    );
}
export { Skills };