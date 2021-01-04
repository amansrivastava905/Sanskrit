import React from 'react'
import styled from 'styled-components'

const CardContent = (props) => {
    return (
        <>
            <Div key={props.slideData.id}>
                <Heading>{props.slideData.heading}</Heading>
                <Subject>
                    {props.slideData.material.map((e) => {
                        return (
                            <Block>
                                {e.hindi}<Span> = </Span>{e.english}<Span> = </Span>{e.sanskrit}<Span> = </Span>{e.translation}
                            </Block>
                        )
                    })}
                </Subject>
            </Div>
        </>
    )
}

export default CardContent

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

const Heading = styled.h4`
    color:darkblue;
    font-size:36px;
    padding:20px 0px;
    margin-bottom:20px;
`