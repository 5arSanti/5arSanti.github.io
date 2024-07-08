import React from "react";
import moment from "moment";

import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import { AnchorCard, SpanCard, TextCard } from "../../../TextComponents";

import { WrapperContainer2, WrapperContainer3 } from "../../../WrapperContainers";
import { AllInfoGridContainer } from "../../../AllInfoContainer";
import { SubTitle } from "../../../SubTitle";
import { PortfolioContext } from "../../../../../Context";
import { ScrollableWrapper } from "../../../ScrollableWrapper";
import { MdOutlineMonitor } from "react-icons/md";

import "./styles.css";


const DevelopmentCard = ({item={}}) => {
    const context = React.useContext(PortfolioContext);

    const [data, setData] = React.useState(null)

    const { fetchData, responseData } = context;


    React.useEffect(() => {
        const endpoints = [
            {
                responseName: "languages",
                uri: item ? item?.languages_url : "",
                headers: {
                    "Authorization": `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                },
            }
        ];
        
        if (responseData.projects) {
            fetchData(endpoints, setData)
        }

    }, [responseData.projects])
    
    const array = data ? Object.keys(data.languages) : [];

    return(
        <WrapperContainer3 padding={50} gap={30} className="border-left-style shadow-style">
            <AllInfoGridContainer className="grid-075-125">
                <WrapperContainer2 border={true} className="border-30 svg-50 icon-scale" justifyContent="center" alignItems="center" >
                    <MdOutlineMonitor/> 
                </WrapperContainer2>
                <WrapperContainer2 flexDirection="column" justifyContent="center" alignItems="flex-end" padding={0} gap={20} className="svg-40">
                    <AnchorCard className="icon-scale" width="auto" uri={item?.html_url}><FaGithub /></AnchorCard>
                    <AnchorCard className="icon-scale" width="auto" uri={item?.homepage}><FaHome/></AnchorCard>
                </WrapperContainer2>
            </AllInfoGridContainer>

            <WrapperContainer2 padding={0} flexDirection="column">
                <SubTitle>{item?.name}</SubTitle>

                <ScrollableWrapper maxHeight={500}>
                    <TextCard>{item?.description}</TextCard>
                </ScrollableWrapper>

            </WrapperContainer2>

            <WrapperContainer2 gap={5} padding={0}>
                <TextCard fontSize={14}><SpanCard fontSize={14}>Last update: </SpanCard>{moment(item?.updated_at).format("DD/MM/YYYY")}</TextCard>
                <TextCard fontSize={14}><SpanCard fontSize={14}>Created: </SpanCard>{moment(item?.created_at).format("DD/MM/YYYY")}</TextCard>
            </WrapperContainer2>

            <WrapperContainer2 padding={0} flexDirection="row" gap={5}>
                {data &&
                    array?.map((language, index) => (
                        <WrapperContainer2 key={index} className="border-30 svg-50 language-style" padding={5} justifyContent="center" alignItems="center">
                            <TextCard fontSize={11} textAlign="center"><SpanCard fontSize={11}>{language}: </SpanCard>{data.languages?.[language]} </TextCard>
                        </WrapperContainer2>
                    ))
                }

            </WrapperContainer2>
        </WrapperContainer3>
    );
}



export { DevelopmentCard };