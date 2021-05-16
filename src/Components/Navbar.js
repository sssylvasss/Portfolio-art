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
    width: 60px;
    height:60px;
    top: 30px;
    right: 40px;
`
const Nav = styled.div`
    width: 60px;
    height: 10px;
    border-radius: 5px;
    background: #9d9d9d;
`