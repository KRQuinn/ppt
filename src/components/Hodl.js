import Image from '../images/panda-guns.png'
import styled from 'styled-components';

const HodlDiv = styled.div `
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: black;
    opacity: 90%;
    text-align: center;
    max-width: 100%;
    font-family: 'Saira Condensed', sans-serif;
    color: white;
    padding: 5%;
    max-width: 100%;
    * {
        /* border: 1px dotted orange; */
    }
    h2 {
        font-size: 2.7rem;
    }
    #containerTop {
        font-size: 1.2rem;
        span {
            text-align: center;
            font-size: 1.3rem;
            padding: .5% 1%;
                
            // background: linear-gradient( 92deg, #95d7e3, #eb76ff );
            background: -webkit-linear-gradient( 92deg, #95d7e3, #eb76ff );
            background-size:600vw 600vw;

            // make sure to put these after the background property
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: textAnimate 5s linear infinite alternate;
            border-bottom: 1px solid whitesmoke;
            }
    }
    #hodlContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        #hodlImg {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                margin: 3%;
                width: 90%;
                height: auto;
                background-color: white;
                border-radius: 10px;
            }
        #hodlTxt {
            font-size: 1.6rem;            
        }
    }
    @keyframes textAnimate {
        from {
            filter: hue-rotate(0deg);
            background-position-x: 0%;
        }
        to {
            filter: hue-rotate(360deg);
            background-position-x: 600vw;
        }
        }
    }
    @media (min-width: 600px) {
        h2 {
            font-size: 4.5rem;
        }
        #containerTop{
            font-size: 1.8rem;
            span {
                    font-size: 2.3rem;
                }
        }
        #hodlContainer {

            #hodlImg {
                img {

                }
            }
            #hodlTxt {
                font-size: 1.4rem;
            }
        }
    }

    @media (min-width: 1024px) {
        padding: 0 2% 10% 2%;
        h2 {
            font-size: 6rem;

        }
        #containerTop{
            font-size: 2.8rem;
            span {
                    font-size: 3.8rem;
                }
        }
        #hodlContainer {
            flex-direction: row;
            #hodlImg {
                width: 50%;
                img {
                    margin: 0%;

                }
            }
            #hodlTxt {
                width: 50%;
                margin: 0 1%;
            }
        }
    }

    @media (min-width: 1400px) {
        h2 {
            
        }
        #containerTop{
            font-size: 3.4rem;
            span {
                    font-size: 5rem;
                }
        }
        #hodlContainer {

            #hodlImg {
                img {

                }
            }
            #hodlTxt {
                font-size: 2rem;
            }
        }
    }

    @media (min-width: 1910px) {
        h2 {
            font-size: 7.5rem;
        }
        #containerTop{
            span {
                    font-size: 5rem;
                }
        }
        #hodlContainer {

            #hodlImg {
                
                img {
                }
            }
            #hodlTxt {
                font-size: 2.2rem;
            }
        }
    }

    @media (min-width: 2550px) {
        h2 {
            font-size: 7rem;
        }
        #containerTop{
            font-size: 3rem;
            padding: 0 4%;
            span {
                    font-size: 4rem;
                }
        }
        #hodlContainer {

            #hodlImg {
                img {
                    width: 70%;
                }
            }
            #hodlTxt {
                font-size: 2.6rem;
            }
        }
    }
    
`

export default  function Hodl () {

    return (
        <HodlDiv>
            <h2>Paper hands and day traders beware!</h2>
            <div id='containerTop'>
                <p>We’ve designed the Pandamic Pump Token (PPT) to reward members of our community who hold the token for long periods of time. </p>
                <p><span>“How do we do this?” So glad you asked!</span></p>
            </div>
            <div id = 'hodlContainer'>
                <div id = 'hodlImg'>
                    <img src = {Image} alt = "Panda Guns!" />
                </div>
                <div id='hodlTxt'>
                    <p>We have a variable tax rate that differentiates between buying and selling. Every last bit of the additional tax on sales goes back to the community by funding our redistribution mechanic.</p>
                    <p>All holders of our token will receive a portion of 1% of every purchase and 5% of every sale of PPT. This portion is equal to the share of the total supply you hold.</p>
                    <p>It’s the dream of any true diamond hand. We turn FUD into FUN! When those paper hands sell, you will feel like you just bought the dip when a portion of their tokens show up in your wallet!</p>  
                </div>
                
            </div>
        </HodlDiv>
    );
}