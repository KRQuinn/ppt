import Image from '../images/panda-injection.png'
import Background from '../images/bamboo_bg.jpg'
import styled from 'styled-components';

const InjectDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-image: url(${Background});
    opacity: 30%;
    z-index: -10;
    color: white; */
    background-color: white;
    text-align: center;
    font-family: 'Saira Condensed', sans-serif;
    max-width: 100%;
    padding: 0%;
    margin: 0 0 5% 0;
    font-weight: bold;
    * {
        /* border: 1px dotted orange; */
    }
    h2 {
        font-size: 2rem;
        border-bottom: 1px solid black;
        padding: 0 0 .5% 0;
        margin: 10% 0 0 0;
    }
    p {
        padding: 0%;
        margin: .5% 0 0 0;

        font-size: 1.2rem;
    }
    #liquidContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5%;
        padding: 2%;
        #liquidImg {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            filter: drop-shadow(0px 10px 10px white);
            #bambooBG {
                width: 100%;
                /* opacity: 70%; */
                border-radius: 10px;
                /* border: 1px solid dimgray; */
                /* background-image: url(${Background}); */
            }
            img {
                background-color: whitesmoke;
                width: 100%;
                height: auto;
                border-radius: 10px;
            }
        }
        #liquidTxt {
            margin: 10% 0 0 0;
            p {
                font-size: 1.4rem;
                margin: 10% 0 0 0;
            }
        }
    }
    .gradient-border {
        --borderWidth: 10px;
        position: relative;
        border-radius: var(--borderWidth);
    }
    .gradient-border:after {
        content: '';
        position: absolute;
        filter: blur(10px);

        top: calc(-1 * var(--borderWidth));
        left: calc(-1 * var(--borderWidth));
        height: calc(100% + var(--borderWidth) * 2);
        width: calc(100% + var(--borderWidth) * 2);
        background: linear-gradient(60deg, #f37055, #ef4e7b);
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
        h2 {
            
        }
        #liquidContainer {

            #liquidImg {
                img {

                }
            }
            #liquidTxt {

            }
        }
    }

    @media (min-width: 1024px) {
        h2 {
            font-size: 5rem;
        }
        p {
            font-size: 2rem;
            margin: 1% 0 0 0;

        }
        #liquidContainer {
            flex-direction: row;
            margin: 0%;
            #liquidImg {
                width: 50%;
                margin: 5%;
                img {
                    
                }
            }
            #liquidTxt {
                width: 50%;
                margin: 10% 0;
                p {
                    margin: 5%;
                    font-size: 1.2rem;

                }


            }
        }
    }

    @media (min-width: 1400px) {
        h2 {
            
        }
        #liquidContainer {

            #liquidImg {
                img {

                }
            }
            #liquidTxt {
                p {
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media (min-width: 1910px) {
        h2 {
            font-size: 7rem;
            margin: 0%;

        }
        p {
            font-size: 2.4rem;
        }
        #liquidContainer {
            padding: 0%;
            margin: 0%;
            #liquidImg {
                
                img {

                }
            }
            #liquidTxt {
                margin: 0%;
                p {
                    font-size: 2rem;
                }
            }
        }
    }

    @media (min-width: 2560px) {
        h2 {
            
        }
        #liquidContainer {

            #liquidImg {
                width: 30%;
                img {
                }
            }
            #liquidTxt {
                p {
                    font-size: 2rem;
                }
            }
        }
    }
`

export default  function LiquidityJunkie () {

    return (
        <InjectDiv>
            
            <h2>Automatic Liquidity Injections</h2>
            <p>Increasing market stability as time goes on!</p>
            <div id = 'liquidContainer'>
                <div id = 'liquidImg' className='gradient-border'>
                    <div id='bambooBG'>
                        <img src = {Image} alt = "Panda Nurse!" />
                    </div>
                </div>
                <div id = 'liquidTxt'>
                    <p>4% of every transaction goes into a fund that injects additional liquidity into our liquidity pool on Pancakeswap. This helps our community in two very important ways.</p>
                    <p>One, it helps create a price floor that gets more stable over time and is resistant to market manipulation by transactions of large quantities.</p>
                    <p>Two, this fee, like the rest of our transaction fees, also discourage and penalize market manipulators, arbitrage traders, or many other bad actors present in the DeFi community.</p>
                    <p>The best part is all of those fees go towards benefiting our community by adding to liquidity, rewarding our holders with a portion of every transaction, and funding our marketing efforts to grow our community!</p>   
                </div>
            </div>
            
        </InjectDiv>
    );
}