import React, { useState, useEffect, useContext } from 'react'
import Web3 from 'web3'
import {MetaContext} from '../context/MetaContext'
import {BlockContext} from '../context/BlockContext'
import contract from './contract'
import styled from 'styled-components'

const StyledPresale = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
    
    #container {

        width: 99%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: .8rem;
        line-height: 250%;
        
        margin: 4%;
        padding: 1% 6%;
        background-color: #1a1a1a;
        border-radius: 10px;
        
        
        
        h1 {
            color: white;
            font-size: 1.2rem;

        }

    }

    .account_details {
        border-radius: 10px;
        background-color: white;
        padding: 1% 5%;
        margin: 2%;
        font-size: .7rem;
        color: black;
        filter: drop-shadow(1px 1px 1px white);
        width: 85%;
        border: 5px outset slateblue;
        span {
            color: slateblue;
            font-size: .8rem;
            font-weight: bold;
        }
        
        
    }

    #form_container {
        width: 95%;
        #inner_container {
            border: 5px outset slateblue;
            border-radius: 10px;
            background-color: white;
            padding: 3% 8%;
            margin: 5% 0;
            font-size: 1rem;
            color: black;
            filter: drop-shadow(1px 1px 1px white);
        }
    }

    .btn {
        margin: 5% 0;
    }

    .btnTwo {
        margin: 5% 0 0 0;
    }

    .glow-on-hover {
        width: 220px;
        height: 50px;
        border: 5px inset;
        outline: none;
        color: #fff;
        background: slateblue;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
    }

    .glow-on-hover:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    .glow-on-hover:active {
        color: #000
    }

    .glow-on-hover:active:after {
        background: transparent;
    }

    .glow-on-hover:hover:before {
        opacity: 1;
    }

    .glow-on-hover:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #3b3b3b;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }

    .gradient-border {
        --borderWidth: 3px;
        background: #1D1F20;
        position: relative;
        border-radius: var(--borderWidth);
    }
    .gradient-border:after {
        content: '';
        position: absolute;
        filter: blur(5px);

        top: calc(-1 * var(--borderWidth));
        left: calc(-1 * var(--borderWidth));
        height: calc(100% + var(--borderWidth) * 2);
        width: calc(100% + var(--borderWidth) * 2);
        background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
        border-radius: calc(2 * var(--borderWidth));
        z-index: -1;
        animation: animatedgradient 3s ease alternate infinite;
        background-size: 300% 300%;
    }


    @keyframes animatedgradient {
	    0% {
		    background-position: 0% 50%;
	    }
	    50% {
		    background-position: 100% 50%;
	    }
	    100% {
		    background-position: 0% 50%;
	    }
    }
    @media (min-width: 600px) {
        max-width: 100%;
        #container {
            h1 {
                font-size: 1.8rem;
                padding: 5% 0;
            }
        }
        .account_details {
            width: 70%;
        }
        #form_container {
            width: 80%;
            #inner_container {
                margin: 0 0 10% 0%;
                /* padding: 5%; */
                
            }
        }
    }
    @media (min-width: 1024px) {
        margin: 2% 10% 5% 10%;
        #container {
            margin: .2%;
            h1 {
                font-size: 2.2rem;
                padding: 2% 0;
            }
        }
        .account_details {
            width: 40%;
        }
        #form_container {
            width: 50%;
            #inner_container {
                
            }
        }
        
    }
    @media (min-width: 1400px) {
        #container {
            h1 {
                font-size: 2.8rem;
                padding: 2% 0;
            }
        }
        
    }
    @media (min-width: 1910px) {
        #container {
            margin: .1%;
            h1 {
                font-size: 2.8rem;
                padding: 2% 0;
            }
        }
        .btnTwo {
        margin: 2% 0 0 0;
        }
        .account_details {
            width: 20%;
        }
        #form_container {
            width: 30%;
            #inner_container {
                
            }
        }
    }
    @media (min-width: 2560px) {
        #container {
            
            h1 {
                font-size: 4rem;
                padding: 2% 0;
            }
        }
        
    }
`

const Presale = () => {
    const {status, connect, account} = useContext(MetaContext);
    const {web3, setWeb3, eth, setEth} = useContext(BlockContext);
    const [wallet, setWallet] = useState({
        wAccount: null,
        wBalance: null
    });
    const [pageStatus, setPageStatus] = useState("Awaiting Connection");
    const [buyTokenBox, setBuyTokenBox] = useState();

    // Initial Load
    useEffect(async () => {
        if(status === "connected") {
            if(window.ethereum) {
                window.web3 = new Web3(window.ethereum)
                window.ethereum.enable();
                setEth(window.ethereum);
                setWeb3(window.web3);
                setWallet({...wallet, wAccount: account, wBalance: await getBalance()})
            }
        } else if(status === "notConnected") {
            setWallet({...wallet, wAccount: "No account connected"})
        }
    }, [status])

    useEffect(async () => {
        if(web3 !== undefined){
            window.contract = await new web3.eth.Contract(contract, '0x892609C25662E19ac3F7D215521FD4B391dF24Ff');
        }
    }, [web3])

    useEffect(async () => {
        setWallet({...wallet, wBalance: await getBalance()})
    }, [pageStatus])

    // useEffect(async () => {
    //     if(window.contract){
    //         const balance = await getBalance();
    //         setWallet({...wallet, wBalance: balance})
    //     }
    // }, [wallet])

    const getBalance = async () => {
        if(window.contract){
            return await window.contract.methods.balanceOf(account).call();
        } else {
            return 0
        }
        
    }

    const withdrawTokens = async () => {
        setPageStatus("Initiating Withdrawal...")
        await window.contract.methods.withdrawTokens(account).send({from:account})
        const balance = await getBalance();
        setWallet({...wallet, wBalance: balance})
        setPageStatus("Withdrawal Complete!")
    }

    const buyTokens = async () => {
        const weiAmount = buyTokenBox*10**18
        await window.contract.methods.buyTokens(account).send({from: account, value: weiAmount})
        setPageStatus("Tokens Reserved!")
    }

    const handleInputBoxChange = (e) => {
        e.preventDefault()
        setBuyTokenBox(e.target.value)
    }

    return(
        <StyledPresale>
        <div id="container" className='gradient-border'>
            <h1>Pandamic Pump Whitelist Presale</h1>
            <div class="account_details">
                
                <section>
                    <span>Account: </span>{wallet.wAccount}
                </section>
                <section>
                    <span>Token Balance: </span> {(wallet.wBalance / 10**18).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}  
                </section>
                <button className='glow-on-hover' onClick={withdrawTokens}>Claim Tokens</button>
                <section>
                    <span>Status: </span>{pageStatus}
                </section>
                <section class="meta_mask">
                    {status === "initializing" ? <div id="meta_mask_status">Initializing MetaMask</div>
                    : status === "unavailable" ? <div id="meta_mask_status">Please <a href="https://metamask.io/download.html" target="blank">download</a> the MetaMask addon for your browser</div>
                    : status === "notConnected" ? <button id="meta_mask_status" class="btn glow-on-hover" onClick={connect}>Connect to MetaMask</button>
                    : status === "connecting" ? <div id="meta_mask_status">Connecting to MetaMask</div>
                    : <br/>
                    }
                </section>
            </div>
            <div id="form_container">
                <div id="inner_container">
                    Rate: 1 BNB = 16,666,666,666 PPT
                    <br/>
                    Min. 0.1 BNB - Max 0.5 BNB
                    <br/>
                    <br/>
                    <input 
                        id="buyTokenBox"
                        name="buyTokenBox"
                        type="text"
                        placeholder="Enter BNB Amount"
                        onChange={handleInputBoxChange}
                    />
                    <br />
                    <button className='btnTwo glow-on-hover' onClick={buyTokens}>Contribute</button>
                    <br/>
                    <small>
                        <i>Reserved tokens become claimable after PCS launch!</i>
                    </small>
                </div>
            </div>
        </div>
        </StyledPresale>
    )
}

export default Presale