import React from "react";
import { PortfolioContext } from "../../../../Context";

import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { IconsCard } from "./IconsCard";
import { getColorValue } from "../../../../utils/getColorValue";

import "./styles.css";
import { TextCard } from "../../TextComponents";
import { Fade } from "react-awesome-reveal";

const IllustrationCard = ({item={}}) => {
    const context = React.useContext(PortfolioContext);

    const color = getColorValue("--white");

    return(
        <WrapperContainer1 border={false} padding={0} gap={0} justifyContent="center" alignItems="center" className={`illustration-card-container ${item?.size}`}>
            <Fade style={{width: "100%", height: "100%"}}>
                <img src={item?.image} alt={item?.name}/>
            </Fade>

            {context.windowWidth >= 800 ?
                <div className="background-illustration-card-info">
                    <WrapperContainer2 padding={30} flexDirection="row" justifyContent="space-between" className="illustration-card-info">
                        <TextCard fontSize={18} color={color}>{item?.name}</TextCard>

                        <IconsCard item={item} color={color}/>
                    </WrapperContainer2>
                </div>
            :
                <WrapperContainer2 padding={20} flexDirection="row" justifyContent="space-between" alignItems="center">
                    <TextCard>{item?.name}</TextCard>

                    <IconsCard item={item}/>
                </WrapperContainer2>
            }
        </WrapperContainer1>
    );
}
export { IllustrationCard }; 