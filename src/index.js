import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { MetaMaskProvider } from 'metamask-react'

// import UCTemp from './UCTemp';
// import About from './components/About';
// import Header from './components/Header'
// import SupplyDist from './components/SupplyDist'
// import MoonShot from './components/MoonShot';
// import Hodl from './components/Hodl'
// import LiquidityJunkie from './components/LiquidityJunkie'

ReactDOM.render(
    <Router>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
