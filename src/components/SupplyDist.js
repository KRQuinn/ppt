import Image from '../images/ppt-supply-distribution-1.png'
import styled from 'styled-components';

const SupplyDiv = styled.div `
    

    * {
        /* border: 1px dotted orange; */
    }
    font-family: 'Saira Condensed', sans-serif;
    margin: 0 0 3% 0;

    #bgContainer{
        padding: 3% 0 8% 0;
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 1% 1%;
        h2 {
            text-align: center;
            font-size: 2.8rem;
            margin: 1% 1%;
    
        }
        #supplyContainer {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* margin: 1% 1%; */
    
            #supplyImg {
                display: flex;
                justify-content: center;
                margin: 5%;
                /* padding: 1%; */
                /* filter: drop-shadow(6px 6px 8px black); */
                border-radius: 20px;
                img {
                    width: 100%;
                    height: auto;
                    border: 3px inset;
                    
                }
            }
            #supplyTxt {
                max-width: 100%;
                text-align: center;
                font-size: 1.4rem;
                font-weight: bold;
                /* color: whitesmoke; */
                
            }
        }
    }
    
    .gradient-border {
        --borderWidth: 5px;
        /* background: #1D1F20; */
        position: relative;
        border-radius: var(--borderWidth);
    }
    .gradient-border:after {
        content: '';
        position: absolute;
        filter: blur(15px);
        opacity: 20%;
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
        #bgContainer{
            
            h2 {
                font-size: 4.6rem;
            }
            #supplyContainer {
    
                #supplyImg {
                    img {
    
                    }
                }
                #supplyTxt {
                    font-size: 2.2rem;
                    
                }
            }
        }
    }

    @media (min-width: 1024px) {

        #bgContainer{
            
            h2 {
                font-size: 8rem;
            }
            #supplyContainer {
                flex-direction: row;
                #supplyImg {
                    width: 50%;
                    
                    img {
                        width: 100%;
                    }
                }
                #supplyTxt {
                    width: 50%;
                    font-size: 1.5rem;
                    
                }
            }
        }
    }

    @media (min-width: 1400px) {
        #bgContainer{

            h2 {
                font-size: 8rem;
            }
            #supplyContainer {
    
                #supplyImg {
                    img {
                        
                    }
                }
                #supplyTxt {
                    font-size: 2.2rem;
                    
                }
            }
        }
    }

    @media (min-width: 1980px) {
        #bgContainer{
            
            h2 {
                margin: 0%;
            }
            #supplyContainer {
    
                #supplyImg {
                    img {
                        
                    }
                }
                #supplyTxt {
                    font-size: 2.2rem;
                    
                }
            }
        }
    }

    @media (min-width: 2560px) {
        margin: 0;
        #bgContainer{
            
            h2 {
                letter-spacing: 3rem;
            }
            #supplyContainer {
                margin: 0%;
    
                #supplyImg {
                    margin: 0% 5%;
    
                    img {
                        
                    }
                }
                #supplyTxt {
                    font-size: 2.2rem;
                }
            }

        }
    }

`

export default  function SupplyDist () {

    return (
        <SupplyDiv>
            <div id='bgContainer' className='gradient-border'>
            <h2>IT'S PANDA-MONIUM!</h2>

            <div id = 'supplyContainer'>
                <div id = 'supplyImg'>
                    <img src = {Image} alt = "Panda Rocket!" />
                </div>
                <div id = 'supplyTxt'>
                    <p>5% to a Private Presale</p>
                    <p>41% to DxSale Presale</p>
                    <p>35% Publicly available on Pancake Swap</p>
                    <p>7% to Development Team</p>
                    <p>7% to Marketing</p>
                    <p>5% to Burn Wallet</p>
                </div>
            </div>
            </div>
        </SupplyDiv>
    );
}