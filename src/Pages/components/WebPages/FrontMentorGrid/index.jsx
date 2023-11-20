import React from "react";
import { PortfolioContext } from "../../../../Context";
import { WebPagesCard } from "../WebPagesCard";

import "./styles.css";
import { Title } from "../../Title";

const FrontMentorGrid = () => {
    const context = React.useContext(PortfolioContext);

    const renderView = () => {
        if (context.moreInfo2Button === "hidden-info"){
            return(
                <button className="front-mentor-see-more-button" title="Ver mas contenido" onClick={context.handleMoreInfo2Button}>Ver Mas</button>
            );   
        }
        else{
            return(
                <button className="front-mentor-see-more-button" title="Ver menos contenido" onClick={context.handleMoreInfo2Button}>Ver Menos</button>
            );   
        }
    }

    return(
        <section className="front-mentor" id="front-mentor">
            <div className="front-mentor-container">
                <Title>Proyectos de Frontend Mentor</Title>
                <div className={`front-mentor-grid-container ${context.moreInfo2Button}`}>
                    {context.frontMentorCard?.map((item) => (
                        <WebPagesCard
                            key={item.id}
                            data={item}
                            link={item.mentorLink}
                        />
                    ))}
                </div>
                <div className="front-mentor-button-container">
                    {renderView()}
                </div>
            </div>
        </section>

    );
}
export { FrontMentorGrid };