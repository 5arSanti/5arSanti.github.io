import React from "react";
import { PortfolioContext } from "../../../../Context";
import { WebPagesCard } from "../WebPagesCard";

import "./styles.css";
import { Title } from "../../Title";

const WebPagesGrid = () => {
    const context = React.useContext(PortfolioContext);

    const renderView = () => {
        if (context.moreInfo1Button === "hidden-info"){
            return(
                <button className="web-pages-see-more-button" title="Ver mas contenido" onClick={context.handleMoreInfo1Button}>See More</button>
            );   
        }
        else{
            return(
                <button className="web-pages-see-more-button" title="Ver menos contenido" onClick={context.handleMoreInfo1Button}>See Less</button>
            );   
        }
    }

    return(
        <section className="web-pages" id="web-pages">
            <div className="web-pages-container">
                <Title>Web Pages</Title>
                <div className={`web-pages-grid-container ${context.moreInfo1Button}`}>
                    {context.webPagesCard?.map((item, index) => (
                        <WebPagesCard
                            key={index}
                            data={item}
                            link={item.homeLink}
                        />
                    ))}
                </div>
                <div className="web-pages-button-container">
                    {renderView()}
                </div>
            </div>
        </section>

    );
}
export { WebPagesGrid }