import React from 'react'
import styled from "styled-components";

import { Navbar } from 'Components/Navbar'


export const Header = () => {
return (
    <Main>
        <TitleText> Ylva Landoff Lindberg </TitleText>
        <Navbar />
    </Main>
)
}

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`

const TitleText = styled.p`
    font-size: 40px;
    font-weith: 400;
    color: #9d9d9d;
    font-family: 'Roboto Mono', monospace;

`