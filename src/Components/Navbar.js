import React from 'react'
import styled from "styled-components";



export const Navbar = () => {
return (
    <>
        <HamburgerNav>
            <Nav></Nav>
            <Nav></Nav>
            <Nav></Nav>
        </HamburgerNav>
    </>
)
}

const HamburgerNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50px;
    height:40px;
    top: 30px;
    right: 40px;
    @media (min-width: 820px) {
        display: none;
    }
    
`
const Nav = styled.div`
    width: 50px;
    height: 10px;
    border-radius: 5px;
    background: #fc4103;
`