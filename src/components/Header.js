import React from "react";
import styled from "styled-components";
import Logo from '../images/ppt_logo.png'
import Telegram from '../images/telegram.png'
import Announcement from '../images/announcement.png'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'
import Discord from '../images/discord.png'
import Reddit from '../images/reddit.png'

export default function Header() {

    // const StyledHeader = styled.div`
    //     max-width: 100%;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     flex-direction: row;
    //     padding: 0;
    //     background-color: white;
    //     text-align: center;
    //     letter-spacing: .6rem;
    
    //     #logo {
    //         width: 15%;
    //         height: auto;
    //     }
    //     .titleNav {
    //         width: 100%;
    //         max-height: 100%;
    //         display: flex;
    //         flex-direction: column;
    //         margin: 0 5%;
    //         padding: 0 0 1% 0;
    //     }
    //     h1 {
    //         font-size: 3rem;
    //         font-family: 'Saira Condensed', sans-serif;
    //         line-height: 80%;
    //         text-align: center;
    //         height: 20%;
    //     }
    //     nav {
    //         display: flex;
    //         justify-content: space-around;
    //         flex-direction: row;
    //         height: 80%;
            
    //     }
    //     a {
    //         text-decoration: none;
    //         font-size: 0.8rem;
    //         color: black;
    //         width: 8%;
    //         height: auto;
            
    //         img {
    //             width: auto;
    //             height: auto;
    //             border-radius: 10px;
    
    //         }
    //     }
    //     /* a:hover {
    //         border: 1px solid black;
    //         border-radius: 30px;
    //         color: white;
    //         background-color: black;
    //         padding: 0 5%;
    //     } */
    //     @media (max-width: 880px) {
    //         max-width: 100%;
    //         padding: 0%;
    //         margin: 0%;
    //         letter-spacing: .2rem;
    //         h1 {
    //             font-size: 1.6rem;
    //             width: 100%;
    //             text-align: center;
    //             letter-spacing: .2rem;
    //         }
    //         #logo {
    //             max-width: 20%;
    //             width: auto;
    //             height: auto;
    //         }
    //         .titleNav {
    //             width: 60%;
                
    //         }
    //         nav {

    //         }
    //         a { 
    //             width: 25%;
    //             border-radius: 10px;
    //             font-size: 1.2rem;
    //             img {
    //                 max-width: 70%;
    //                 width: auto;
    //                 height: auto;
    //                 border-radius: 10px;
    
    //             }
    //         }
    //     }
    //     @media (max-width: 420px) {
    //         max-width: 100%;
    //         padding: 0%;
    //         margin: 0%;
    //         letter-spacing: .1rem;
    //         h1 {
    //             font-size: 1.1rem;
                
    //         }
    //         #logo {
    //             max-width: 25%;

    //             width: auto;
    //             height: auto;
    //         }
    //     }
    //     a { 
            
    //         img {
    //             max-width: 80%;
    //             width: auto;
    //             height: auto;
    //             border-radius: 10px;
    //         }
    //     }
    //     @media (max-width: 2560px) {
    //         line-height: .3rem;
    //         letter-spacing: 2rem;
    //         #logo {
    //             max-width: 10%;
    //             width: auto;
    //             height: auto;
    //         }
    //         h1 {
    //             font-size: 3rem;
    //         }
    //         nav {
    //             justify-content: center;
                
    //         }

    //         a { 
                
    //             img {
    //                 max-width: 30%;
    //                 width: auto;
    //                 height: auto;
    //                 border-radius: 10px;
                    
    //             }
    //         }
    //     }
    // `

    const StyledHeader = styled.div`

        * {
            /* border: 1px dotted orange; */
        }

        max-width: 100%;
        display: flex;
        flex-direction: row;
        #logo {
            max-width: 30%;
            
        }

        img {
            width: 50%;
            height: auto;
        }

        .titleNav {
            max-width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;

            h1 {
                font-size: 1.3rem;
                line-height: .5rem;
                padding: 3% 0;
                margin: 0%;
                border-bottom: 2px solid black;
            }

            nav {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                padding: 0% 5% 2% 5%;

                img {
                    width: 80%;
                    height: auto;
                    border-radius: 6px;
                    margin: 10%;
                }
            }
            
        }
        @media (min-width: 410px) {
            
            .titleNav {

                h1 {
                    font-size: 1.6rem;
                    padding: 4% 0;

                }
                nav {
                    justify-content: space-between;

                    img {
                        width: 70%;
                        height: auto;
                    }
                }
            }
        }
        @media (min-width: 600px) {
            
            .titleNav {

                h1 {
                    font-size: 2.2rem;
                    padding: 4% 0;

                }

                nav {
                    justify-content: space-between;

                    img {
                        width: 60%;
                        height: auto;
                    }
                }
            }
        }
        @media (min-width: 1024px) {
            .titleNav {

                h1 {
                    font-size: 3.5rem;
                    /* padding: 0%; */
                    margin: 1% 0;
                    letter-spacing: .2rem;
                }

                nav {
                    justify-content: space-evenly;
                    padding: 1% 0%;
                    /* margin: 2% 0; */
                    img {
                        width: 45%;
                        height: auto;
                    }
                }
                /* Float Shadow */
                .hvr-float-shadow {
                    display: inline-block;
                    vertical-align: middle;
                    -webkit-transform: perspective(1px) translateZ(0);
                    transform: perspective(1px) translateZ(0);
                    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
                    position: relative;
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
                    -webkit-transition-property: transform;
                    transition-property: transform;
                }
    
                .hvr-float-shadow:before {
                    pointer-events: none;
                    position: absolute;
                    z-index: -1;
                    content: '';
                    top: 100%;
                    left: 5%;
                    height: 10px;
                    width: 90%;
                    opacity: 0;
                    background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
                    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
                    /* W3C */
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
                    -webkit-transition-property: transform, opacity;
                    transition-property: transform, opacity;
                }
    
                .hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {
                    -webkit-transform: translateY(-5px);
                    transform: translateY(-5px);
                    /* move the element up by 5px */
                }
    
                .hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {
                    opacity: 1;
                    -webkit-transform: translateY(5px);
                    transform: translateY(5px);
                    /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
                }
            }
        }
        @media (min-width: 1400px) {
            .titleNav {

                h1 {
                    font-size: 5.2rem;
                    /* padding: 0%; */
                    
                    letter-spacing: .2rem;
                }
            }
        }
        @media (min-width: 1910px) {
            img {
                width: 20%;
                height: 20%;
                padding: 2% 0;
            }
            .titleNav {
                padding: 0 4%;
                h1 {
                    font-size: 5.8rem;
                    padding: 5% 0;
                    margin: 2% 0%;
                    line-height: 1rem;
                    letter-spacing: 1.1rem;
                    /* border-bottom: 2px solid black; */
                }

                nav {
                    justify-content: center;
                    padding: 2% 0%;
                    /* margin: 2% 0; */
                    img {
                        width: 35%;
                        height: auto;
                        margin: 0 25%;
                    }
                }
            }
        }
        @media (min-width: 2560px) {
            img {
                width: 20%;
                height: 20%;
                padding: 0%;
            }
            .titleNav {
                h1 {
                    font-size: 5rem;
                    padding: 0 0 3% 0;
                    /* margin: 2% 0; */
                    line-height: 1rem;
                    letter-spacing: 2.5rem;
                    /* border-bottom: 2px solid black; */
                }

                nav {
                    justify-content: space-between;
                    /* align-items: baseline; */
                    /* padding: 2% 0%; */
                    /* margin: 2% 0; */
                    img {
                        width: 20%;
                        height: auto;
                        margin: 0 35%;
                    }
                }
            }
        }
    `

    return (
        <StyledHeader>
            <img id = 'logo' src = {Logo} alt = 'Pandamic Pump Token' />
            <div className = 'titleNav'>
                <h1>Pandamic Pump Token</h1>
                <nav>
                    <a href ='https://t.me/pandamicpumpchat' className='hvr-float-shadow' target="_blank" rel="noopener noreferrer"><img src = {Telegram} alt = 'Telegram' /></a>
                    <a href ='https://t.me/s/pandamicpump' className='hvr-float-shadow' target="_blank" rel="noopener noreferrer"><img src = {Announcement} alt = 'Announcement' /></a>
                    <a href ='https://twitter.com/pandamicpump' className='hvr-float-shadow' target="_blank" rel="noopener noreferrer"><img src = {Twitter} alt = 'Twitter' /></a>
                    <a href ='https://www.instagram.com/pandamicpump/' className='hvr-float-shadow' target="_blank" rel="noopener noreferrer"><img src = {Instagram} alt = 'Instagram' /></a>
                    <a href ='https://discord.gg/xd6je7fHD8' className='hvr-float-shadow' target="_blank" rel="noopener noreferrer"><img src = {Discord} alt = 'Discord' /></a>
                    <a href ='https://www.reddit.com/r/pandamicpumptoken/' className='hvr-float-shadow' target="_blank" rel="noopener noreferrer"><img src = {Reddit} alt = 'Reddit' /></a>
                </nav>
            </div>
        </StyledHeader>
    );

};