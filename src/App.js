import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from "styled-components";

import { Header } from 'Components/Header'
import { Footer } from 'Components/Footer'
import { Artworks } from 'Pages/Artworks'
import { Cv } from 'Pages/Cv'
import { SapaSisters } from 'Pages/SapaSisters'


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Main>
            <Header />
          <Switch>
            <Route path='/' exact>
              <Artworks />
            </Route>
            <Route path='/sapasisters' exact>
              <SapaSisters />
            </Route>
            <Route path='/cv' exact>
              <Cv />
            </Route>
          </Switch>
            <Footer />
        </Main>
      </BrowserRouter>
    </>
  )
}

const Main = styled.div`
  max-width: 2000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
   @media (min-width: 820px) {
        width: 95%;
        
    }

`