import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer1, WrapperContainer2, WrapperContainer3, WrapperContainer4 } from "../../../WrapperContainers";
import "./styles.css";

const SkillCard = ({item={}}) => {
    return (
        <WrapperContainer2 padding={20} >
            <WrapperContainer3 gap={30} padding={40}>
                <div className="skill-logo">
                    <img src={item?.image} alt="Logo" />
                </div>

                <TextCard textAlign="center"><SpanCard>{item?.name}</SpanCard></TextCard>

                {item?.experience != 1 ? 
                    <TextCard textAlign="center">{item?.experience} años de experiencia</TextCard> 
                    : 
                    <TextCard textAlign="center">{item?.experience} año de experiencia</TextCard> 
                }


            </WrapperContainer3>
        </WrapperContainer2>
    );
}
export { SkillCard };