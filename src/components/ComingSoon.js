import styled from "styled-components";
import image from "./../images/panda-guns.png"

export default function comingSoon() {
    const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
    padding: 10%;
    }
    img {
        width: 40%;
        height: auto;
    }
    `
    return (
        <StyledDiv>
            <h2> Coming Soon!</h2>
            <img src ={image} alt ="Panda with guns" />
        </StyledDiv>
    );
}