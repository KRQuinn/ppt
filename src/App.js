import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, {useState} from 'react';
import Header from './components/Header'
import About from './components/About';
import SupplyDist from './components/SupplyDist'
import MoonShot from './components/MoonShot';
import Hodl from './components/Hodl'
import LiquidityJunkie from './components/LiquidityJunkie'
import Presale from './components/Presale.jsx';
import ScrollToTop from './hooks/ScrollToTop';
import {useMetaMask} from 'metamask-react'
import {MetaContext} from './context/MetaContext'
import {BlockContext} from './context/BlockContext'

const StyledDiv = styled.div`
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  #navRoute {
    position: sticky;
    top: 0;
    z-index: 100;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 1% 1% 3% 1%;
    background-color: white;
    background: linear-gradient(180deg, ghostwhite, ghostwhite, ghostwhite, ghostwhite, ghostwhite, ghostwhite, black);
    
    .linkStyle {
      font-size: .6rem;
      font-weight: bold;
      display: inline-block;
      color: black;
      text-align: center;
      padding: 3px 6px;
      text-decoration: none;
      border-radius: 12px;
      border: 2px outset ghostwhite;
      filter: drop-shadow(2px 2px 3px black);
    }

    /* .linkStyle:hover {
      background-color: black;
      color: white;
      border: 2px solid springgreen;
      border-radius: 20px;
      padding: 8px;
      margin: 4px;
    } */
    
    /* Radial In */
.hvr-radial-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  /* background: linear-gradient(60deg, #07b39b, #6fba82); */
  background: black;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-radial-in:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: linear-gradient(60deg,  #a166ab, #5073b8, #1098ad); */
  background: whitesmoke;
  border-radius: 10px;
  -webkit-transform: scale(2);
  transform: scale(2);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-radial-in:hover, .hvr-radial-in:focus, .hvr-radial-in:active {
  color: white;
}
.hvr-radial-in:hover:before, .hvr-radial-in:focus:before, .hvr-radial-in:active:before {
  -webkit-transform: scale(0);
  transform: scale(0);
}
  }

  @media (min-width: 1024px) {
    #navRoute {
      padding: .35% 1% 1% 1%;
      .linkStyle {
        padding: 4px 12px;
        font-size: 1.1rem;
        filter: drop-shadow(2px 4px 4px black);
        border: 4px outset ghostwhite;

      }
    }
  }

  @media (max-width: 420px) {
    #navRoute {
      font-size: .6rem;
    }
  }
` 

export default function App() {
  const { status, connect, account } = useMetaMask();
  const [web3, setWeb3] = useState();
  const [eth, setEth] = useState();

  return (
    <Router>
      <ScrollToTop />
      <StyledDiv className="App">
        <nav id = 'navRoute'>         
          <Link to="/about" className='linkStyle hvr-radial-in'>About!</Link>
          <Link to="/supply" className='linkStyle hvr-radial-in'>Supply!</Link>
          <Link to="/moon" className='linkStyle hvr-radial-in'>Moon!</Link>
          <Link to="/hodl" className='linkStyle hvr-radial-in'>Hodl!</Link>
          <Link to="/inject" className='linkStyle hvr-radial-in'>Inject!</Link>
          <Link to="/presale" className='linkStyle hvr-radial-in'>Presale!</Link>
          {/* <Link to="/about" className='linkStyle hvr-radial-in'>Coming Soon!</Link> */}
        </nav>
        <div id = 'header'>
          <Header />
        </div>
        <Switch>
          <MetaContext.Provider
            value={{
              status, connect, account
            }}
          >
            <BlockContext.Provider 
              value={{
                web3, setWeb3,
                eth, setEth
              }}
            >
              <Route path="/about" component={About} />
              <Route path="/supply" component={SupplyDist} />
              <Route path="/moon" component={MoonShot} />
              <Route path="/hodl" component={Hodl} />
              <Route path="/inject" component={LiquidityJunkie} />
              <Route path="/presale" component={Presale} />
              <Route path="/" exact component={About} />
              {/* <Route path="*" component={About} /> */}
            </BlockContext.Provider>
          </MetaContext.Provider>
        </Switch>
      </StyledDiv>
    </Router>
  );
}
