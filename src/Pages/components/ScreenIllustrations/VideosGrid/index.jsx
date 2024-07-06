import React from "react";
import Slider from "react-slick";

import { VideoCard } from "./VideoCard";
import { PortfolioContext } from "../../../../Context"
import { Title } from "../../Title";
import { SectionWrapper, WrapperContainer2 } from "../../WrapperContainers";
import { NextArrowCard, PrevArrowCard } from "../../ScreenHome/Skills/SliderSkills/ArrowsCard";

const VideosGrid = () => {
    const context = React.useContext(PortfolioContext);

    const { items } = context.responseData.videos || [];

    const options = {
        infinite: true,
		speed: 1250,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        nextArrow: <NextArrowCard/>,
		prevArrow: <PrevArrowCard/>,
		style: { width: "95%",},
		focusOnSelect: false,
		pauseOnHover: true,
    }


    return(
        <SectionWrapper border={false} id="time-lapses">
            <WrapperContainer2 gap={0}>
                <Title>Time lapses</Title>

                <WrapperContainer2 padding={0} justifyContent="center" alignItems="center">
                    <Slider {...options}>
                        {items?.map((item, index) => (
                            <VideoCard
                                key={index}
                                item={item} 
                            />
                        ))}
                    </Slider>
                </WrapperContainer2>

            </WrapperContainer2>
        </SectionWrapper>

    );
}
export { VideosGrid };