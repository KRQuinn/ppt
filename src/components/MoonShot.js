import Image from '../images/panda-rocket.png'
import Background from '../images/nightsky.jpg'
import styled from 'styled-components';


const MoonDiv = styled.div `
    
    
    
    * {
        /* border: 1px dotted orange; */
    }
    background-image: url(${Background});
    background-color: black;
    background-size: 800%;
    opacity: 80%;    font-family: 'Saira Condensed', sans-serif;
    color: white;

    h2 {
        text-align: center;
        font-size: 1.5rem;
        margin: 5% 2%;

    }
    #moonContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1% 2%;

        #moonImg {
            max-width: 100%;
            display: flex;
            justify-content: center;
            margin: 5%;
            img {
                width: 100%;
                height: auto;
            }
        }
        #moonTxt {
            max-width: 100%;
            text-align: center;
            font-size: 1.4rem;
            font-weight: bold;
            
        }
    }
    #diamondHands {
        display: flex;
        justify-content: center;
        text-align: center;
        max-width: 70%;
        font-size: 1.2rem;
        font-weight: bold;
        color: whitesmoke;
        padding: 2% 0;
        margin: 10% 15%;
        border-radius: 10px;
        /* border: 4px solid white; */
        
            #secret {
                text-decoration: none;
                color: white;
            }
        
    }
    .gradient-border {
        --borderWidth: 10px;
        /* background: #1D1F20; */
        position: relative;
        border-radius: var(--borderWidth);
    }
    .gradient-border:after {
        content: '';
        position: absolute;
        filter: blur(20px);

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
        h2 {
            font-size: 3rem;
        }
        #moonContainer {
            
            #moonImg {
                img {

                }
            }
            #moonTxt {

            }
        }
        #diamondHands {
            font-size: 1.5rem;
        }
    }

    @media (min-width: 1024px) {
        background-size: 400%;
        h2 {
            border-bottom: 2px solid white;
        }
        #moonContainer {
            flex-direction: row;
            #moonImg {
                img {

                }
            }
            #moonTxt {
                  font-size: 1.8rem ;
            }
        }
        #diamondHands {
            font-size: 3rem;
        }
    }

    @media (min-width: 1400px) {
        background-size: 300%;
        h2 {
            font-size: 4.3rem ;
        }
        #moonContainer {

            #moonImg {
                img {

                }
            }
            #moonTxt {
                font-size: 2.2rem ;          
            }
        }
        #diamondHands {
            font-size: 3.5rem;
        }
    }

    @media (min-width: 1980px) {
        background-size: 200%;
        h2 {
            font-size: 6.2rem ;

        }
        #moonContainer {
            
            #moonImg {
                img {

                }
            }
            #moonTxt {
                font-size: 3rem ;
            }
        }
    }

    @media (min-width: 2560px) {
        background-size: 150%;
        h2 {
            font-size: 8rem ;
        }
        #moonContainer {

            #moonImg {
                img {

                }
            }
            #moonTxt {
                font-size: 2.6rem;
            }
        }
        #diamondHands {
            font-size: 5rem;
            margin: 0% 15% 10% 15%;

        }
    }
`

export default  function MoonShot () {

    return (
        <MoonDiv>
            <h2>Feel the burn as we take our community to the moon!</h2>
            <div id = 'moonContainer'>
                <div id = 'moonImg'>
                    <img src = {Image} alt = "Panda Rocket!" />
                </div>
                <div id = 'moonTxt'>
                    <p>A portion of our token is sitting in a burn wallet, and we’ve got news for you...</p>
                    <p> There isn't going to be any more PPT… </p>
                    <p>ever. </p>
                    <p>That means, as that burn wallet gets more and more of the supply of tokens through our redistribution mechanic, the burn can only speed up.</p>    
                </div>
            </div>
            <div id = 'diamondHands' className='gradient-border'>
                <nav>
                    <span>IT'S THE ULTIMATE DIAMOND HAND!</span>
                </nav>
            </div>
        </MoonDiv>
    );
}