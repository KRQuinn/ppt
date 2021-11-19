import Background from '../images/nightsky.jpg'
import styled from 'styled-components';

const AboutDiv = styled.div `
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${Background});
    background-size: 700%;
    opacity: 90%;
    

    font-family: 'Saira Condensed', sans-serif;
    color: white;
    text-align: center;

    * {
        /* border: 1px dotted orange; */
    }

    h2 {
        font-size: 1.5rem;
        padding: 1%;
        margin: 15% 0% 5% 0%;
        
    }
    #whyDiv {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 5%;
        #whyPanda {
            width: 90%;
            font-size: 1.1rem;
            margin: 0% 10%;
            padding: 5% 0;
            border-bottom: 1px solid white;
        }
        #tokenomics {
            
            width: 90%;
            margin: 0% 10%;
            padding: 5% 0;
            border-top: 1px solid white;
            font-size: 1.1rem;
            
            h2 {
                font-size: 3.5rem;
            }

            #tokenomicsContainer {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                
                .perks {
                    width: 50%;
                    margin: 5% 10%;
                    padding: 0% 20%;
                    font-size: 1.3rem;
                    border: 2px solid white;
                    border-radius: 10px;
                    background: linear-gradient(0deg, rebeccapurple, slateblue, royalblue, black);
                    filter: drop-shadow(12px 12px 12px black);
                }
                
            }
        }
    }
    .wpBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0% 0 5% 0;
        a {
            padding: 3%;
            color: white;
            text-decoration: none;
        }
    }
    
    .glow-on-hover {
        width: 220px;
        height: 50px;
        border: none;
        outline: none;
        color: #fff;
        font-weight: bold;
        letter-spacing: .1rem;
        background: slateblue;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
        filter: drop-shadow(0px 0px 8px white);
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
        background: #111;
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
        animation: animatedgradient 5s ease alternate infinite;
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
            font-size: 2.6rem;
        }
    }
    @media (min-width: 1024px) {
        background-size: 400%;
        h2 {
            font-size: 4rem;
            padding: 1%;
            margin: 15% 0% 5% 0%;
        }
        #whyDiv {
        
        padding: 0 5%;
            #whyPanda {
                width: 90%;
                font-size: 1.5rem;
                margin: 0% 10%;
                padding: 5% 0;
                border-bottom: 1px solid white;
            }
            #tokenomics {
                padding: 0;
                font-size: 2rem;

                h2 {
                    font-size: 5rem;
                }
                #tokenomicsContainer {
                
                    .perks {
                        margin: 5% 20%;
                        padding: 0% 3%;
                        font-size: 1.3rem;
                    }
                
                }
            }
        }
    }
    @media (min-width: 1400px) {
        background-size: 150%;
        h2 {
            font-size: 4rem;
            padding: 1%;
            margin: 5% 0%;
        }
        #whyDiv {
            flex-direction: row;
            max-width: 100%;
            padding: 0 2%;
            #whyPanda {
                width: 50%;
                font-size: 1.8rem;
                margin: 5% 0 0 0%;
                padding: 0% 5%;
                border-bottom: none;
                
            }
            #tokenomics {
                max-width: 50%;
                margin: 5% 0;
                padding: 0 5%;
                font-size: 1.5rem;
                border-top: none;
                

                h2 {
                    font-size: 3.2rem;
                }
                #tokenomicsContainer {
                    flex-direction: row;
                    margin: 0%;
                    padding: 0%;
                    /* max-width: 100%; */
                    font-weight: bold;
                    .perks {
                        width: 50%;
                        margin: 0 2%;
                        padding: 0 2%;
                        font-size: 1.3rem;
                        
                    }
                
                }
            }
            
        }
    }
    @media (min-width: 1910px) {
        background-size: 100%;
        h2 {
            font-size: 6rem;
            padding: 0%;
            margin:5% 0 0 0;
        }
        .wpBtn {
            
        }
    }
    @media (min-width: 2560px) {
        
    }
`
export default function About() {
    return(
        <AboutDiv>
            <div>
                <img src='' alt='' />
            </div>
            <div>
                <h2>Why should you join our Panda Party?</h2>
            </div>
            <div>
                
            </div>
            <div id = 'whyDiv'>
                <div id = 'whyPanda'>
                    <p>2020 brought us the pandemic, but 2021 is bringing us a PANDAmic!</p>
                    <p>PPT is a community focused project and we’re so happy you’re interested in joining us on our trip to the moon!</p>
                    <p>Take a peek at our Tokenomics, or read in depth from our official white paper!</p>
                </div>
                <div id = 'tokenomics'>
                    <h2>Tokenomics</h2>
                    <p>What sets our token apart from the rest?</p>
                    <div id = 'tokenomicsContainer'>
                        <div className = 'perks gradient-border'>
                            <h3>8% on Purchases</h3>
                            <p>1% Redistributed to Current Holders</p>
                            <p>3% to Marketing</p>
                            <p>4% to Liquidity</p>
                        </div>
                        <div className = 'perks gradient-border'>
                            <h3>12% on Sales</h3>
                            <p>5% Redistributed to Current Holders</p>
                            <p>3% to Marketing</p>
                            <p>4% to Liquidity</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'wpBtn glow-on-hover'>
                <a  href ='https://drive.google.com/file/d/1fBlgU5PKqwqWsy5RFTlrnWimCC9DCn1g/view' target="_blank" rel="noopener noreferrer">Check out our white paper!</a>
            </div>
            
        </AboutDiv>
    );
}
