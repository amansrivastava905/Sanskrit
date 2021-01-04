import React, { useEffect } from 'react'
import styled from 'styled-components'
import LevelOne from '../images/level-1-back.png';
import { module1 } from '../data/data.js'
import CardContent from '../Components/CardContent';
import CardQuestionComponent from '../Components/CardQuestionComponent';


const ContentCard = () => {


    return (
        <MainContainer>
            <Header>
                <Head>Warm up</Head>
            </Header>
            <ContentContainer>
                <CardsContainer>
                    {
                        module1.Slides.map((slide) => {
                            if (slide.type === 'S') {
                                return (
                                    <CardContent slideData={slide} />
                                )
                            }
                            else {
                                return (
                                    <CardQuestionComponent slideData={slide} />
                                )
                            }
                        })
                    }
                </CardsContainer>
            </ContentContainer>
        </MainContainer>
    )
}

export default ContentCard;



const MainContainer = styled.div`
    background-image:url(${LevelOne});
    background-size:800px;
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center bottom;
`

const Header = styled.div`
    background-color:rgba(63,81,181,0.05);
    backdrop-filter: blur(5px) saturate(100%) contrast(55%) brightness(120%);
    padding:10px 20px;
    border-bottom:1px solid rgba(63,81,181,0.1);
    position:fixed;
    width:100%;
    z-index:100;
`

const Head = styled.h1`
    color:darkblue;
    font-weight:normal;
    font-size:36px;
`

const ContentContainer = styled.div`
    padding:80px 10px;
    min-height:100vh;
    display:flex;
    justify-content:center;
`

const CardsContainer = styled.div`
 
`
