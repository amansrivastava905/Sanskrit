import React, { useEffect } from 'react'
import styled from 'styled-components'
import LevelOne from '../images/level-1-back.png';
import { module1 } from '../data/data.js'

// console.log(module1);

// console.log(module1.Items);

const ContentCard = () => {

    // random number generator
    const random = Math.round(Math.random());

    // check option correct or not
    const checkOption = (e)=>{
       alert(e.target.outerText);
    }

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
                                    <Div key={slide.id}>
                                        <Heading>{slide.heading}</Heading>
                                        <Subject>
                                            {slide.material.map((e) => {
                                                return (
                                                    <Block>
                                                        {e.hindi}<Span> = </Span>{e.english}<Span> = </Span>{e.sanskrit}<Span> = </Span>{e.translation}
                                                    </Block>
                                                )
                                            })}
                                        </Subject>
                                    </Div>
                                )
                            }
                            else {
                                return (
                                    <Div key={slide.id}>
                                        <Heading>{slide.heading}</Heading>
                                        <Subject>
                                            <Question>
                                                {slide.material[random].question}
                                            </Question>
                                            <OptionContainer>
                                                {slide.material[random].options.map((e) => {
                                                    return (
                                                        <Option onClick={checkOption} id={slide.id}>{e}</Option>
                                                    )
                                                })}
                                            </OptionContainer>
                                        </Subject>
                                    </Div>
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


const OptionContainer = styled.div`
    margin-top:30px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width:60vw;
    @media screen and (max-width:900px)
    {
        width:70vw;
    }
    @media screen and (max-width:500px)
    {
        width:90vw;
    }
`

const Option = styled.button`
    background-color:rgba(63,81,181,0.2);
    border:1px solid rgba(63,81,181,0.5);
    cursor:pointer;
    padding:10px 20px;
    margin:10px;
    outline:none;
    transition:all 0.4s;
    border-radius:30px;
    font-size:24px;
    color:darkblue;
    &:hover{
        background-color:rgba(63,81,181,0.3);
        border:1px solid rgba(63,81,181,0.6);
        transition:all 0.4s;
    }
`

const Question = styled.div`
    padding:20px;
    color:black;
    font-weight:bold;
    font-size:24px;
    background-color:rgba(63,81,181,0.1);
    width:60vw;
    text-align:center;
    @media screen and (max-width:900px)
    {
        width:70vw;
    }
    @media screen and (max-width:500px)
    {
        width:90vw;
    }
`

const Subject = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Block = styled.div`
    padding:10px;
    text-align:center;
    background-color:rgba(63,81,181,0.1);
    width:60vw;
    border-bottom:0.5px dotted rgba(63,81,181,0.4);
    font-size:18px;
    color:rgba(0,0,0,0.7);
    @media screen and (max-width:900px)
    {
        width:70vw;
    }
    @media screen and (max-width:500px)
    {
        width:90vw;
    }
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`
const Span = styled.span`
    color:darkblue;
`
const MainContainer = styled.div`
    background-image:url(${LevelOne});
    background-size:800px;
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center bottom;
`
const Div = styled.div`
    width:60vw;
    min-height:70vh;
    background-color:rgba(63,81,181,0.05);
    border:2px solid rgba(63,81,181,0.1);
    border-radius:20px;
    padding:20px;
    margin:20px 10px;
    backdrop-filter: blur(15px) saturate(100%) contrast(55%) brightness(120%);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:900px)
    {
        width:70vw;
    }
    @media screen and (max-width:500px)
    {
        width:90vw;
    }

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
    background-color:rgba(0,0,0,0.1);
    min-height:100vh;
    display:flex;
    justify-content:center;
`

const CardsContainer = styled.div`
 
`

const Heading = styled.h4`
    color:darkblue;
    font-size:36px;
    padding:20px 0px;
    margin-bottom:20px;
`