import { formatExperience } from "../../../../../utils/formatExperience";
import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer2, WrapperContainer3, WrapperContainer4 } from "../../../WrapperContainers";
import "./styles.css";

const SkillCard = ({item={}}) => {
    return (
        <WrapperContainer2 padding={20} >
            <WrapperContainer3 gap={30} padding={40}>
                <div className="skill-logo">
                    <img src={item?.image} alt="Logo" />
                </div>

                <TextCard textAlign="center"><SpanCard>{item?.name}</SpanCard></TextCard>

                <TextCard textAlign="center">{formatExperience(item?.year, item?.month)}</TextCard>

            </WrapperContainer3>
        </WrapperContainer2>
    );
}
export { SkillCard };