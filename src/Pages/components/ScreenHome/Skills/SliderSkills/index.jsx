import Slider from "react-slick";
import { SkillCard } from "../SkillCard";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { PortfolioContext } from "../../../../../Context";
import React from "react";
import { NextArrowCard, PrevArrowCard } from "./ArrowsCard";

const SliderSkills = ({array=[]}) => {
    const context = React.useContext(PortfolioContext);

    const options = {
        infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        nextArrow: <NextArrowCard/>,
		prevArrow: <PrevArrowCard/>,
		style: { width: "100%",},
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
			breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
    }


    return(
        <WrapperContainer2 justifyContent="center" alignItems="center" padding={context.windowWith <= 450 ? 0 : 30}>
            <Slider {...options}>
                {array?.map((item, index) => (
                    <SkillCard key={index} item={item}/>
                ))}
            </Slider>
        </WrapperContainer2>
    );
}

export { SliderSkills };