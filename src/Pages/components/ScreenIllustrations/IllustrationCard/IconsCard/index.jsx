import { FaPixiv } from "react-icons/fa6";
import { AnchorCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { FaDeviantart, FaYoutube } from "react-icons/fa";
import { getColorValue } from "../../../../../utils/getColorValue";

const IconsCard = ({item={}, color=getColorValue("--lines-color")}) => {
    return(
        <WrapperContainer2 padding={0} gap={5} alignItems="center" flexDirection="row" className="illustration-card-icons" justifyContent="end">
            <AnchorCard width="auto" uri={item?.timeLapse}>
                <FaYoutube color={color}/>
            </AnchorCard>

            <AnchorCard width="auto" uri={item?.deviantArt}>
                <FaDeviantart color={color}/>
            </AnchorCard>

            <AnchorCard width="auto" uri={item?.pixiv}>
                <FaPixiv color={color}/>
            </AnchorCard>
            
        </WrapperContainer2>
    );
}

export { IconsCard };