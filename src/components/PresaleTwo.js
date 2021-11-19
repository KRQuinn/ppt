import React from 'react';
// import web3  from './../../node_modules/web3/dist/web3.min.js'
// import Web3 from 'web3';
// import loadContract from './LoadContract'
// import { lockerWallet } from "./Const";




class Presale extends React.Component {
    constructor() {
        super();
        this.state = {
          input: 0,
        }
    };

    render(){
        return (
            <div>
                <h1> Pandemic Pump Whitelist Presale </h1>
                <button onclick="connectAccount()">Connect Metamask</button>
                <p>Status: <span id="status">Please Connect Metamask Wallet</span></p>
                <div id="container">
                    <div id="inner_container">
                        <p>Rate: 1 BNB = 16,666,666,666 PPT</p>
                        <p>Min. 0.1 BNB - Max 0.5 BNB</p>
                        <input id="input_box" type="text" placeholder="Enter BNB Amount"/>
			            <button onclick="buyTokens();">Contribute</button>
                        <p>Reserved tokens become claimable after PCS launch!</p>
                    </div>
                </div>
                <button onclick="balanceOf();">View Reserved Tokens</button>
                <button onclick="withdrawTokens();">Claim Tokens</button>
            </div>
        );
    };
}
export default Presale;