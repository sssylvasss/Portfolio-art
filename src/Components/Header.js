import React from 'react'
import styled from "styled-components";

import { Link } from 'react-router-dom';
import { Navbar } from 'Components/Navbar'


export const Header = () => {
return (
    <Main>
        <TopWrapper>
            <Navbar />
            <Link to='/'style={{ textDecoration: 'none' }}>
            <TitleText> Ylva Landoff Lindberg </TitleText>
            </Link>
        </TopWrapper>
        <NavTextWrapper>
            <Link to='/'style={{ textDecoration: 'none' }}>
                <NavText>ART</NavText>
            </Link>
            <Link to='/cv'style={{ textDecoration: 'none' }}>
                 <NavText>CV</NavText>
            </Link><Link to='/sapasisters'style={{ textDecoration: 'none' }}>
                <NavText>SAPA</NavText>
             </Link>
            {/*<Link to='/'style={{ textDecoration: 'none' }}>
                <NavText>CODING</NavText>
            </Link> */}
        </NavTextWrapper>
    </Main>
)
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    margin: 20px;
`
const TopWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
`


const TitleText = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #fc4103;
    font-family: 'Roboto Mono', monospace;
    margin-left: 20px;
     &:hover {
    font-weight: 800;
    }

        @media (min-width: 820px) {
        font-size: 60px;
    }

`
const NavTextWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
`

const NavText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #fc4103;
    font-family: 'Roboto Mono', monospace;
    margin-left: 20px;
    &:hover {
    font-weight: 800;
    }
    
        @media (min-width: 820px) {
        font-size: 20px;
    }
`