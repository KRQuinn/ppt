import './App.css';
import styled from 'styled-components';
import Banner from './panda02.png'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: palegreen;
  padding: 5%;

  h1 {
    color: white;
    font-size: 4rem;
    border: 3px solid white;
    border-radius: 20px;
    background-color: teal;
    padding: 2%;
    filter: drop-shadow(12px 12px 12px black);
  }

  img {
    border: 8px solid black;
    border-radius: 20px;
    background-color: teal;
    filter: drop-shadow(12px 12px 12px black);
    margin: 10%;
  }
  
` 

function UCTemp() {
  return (
    <StyledDiv className="App">
      <h1>UNDER CONSTRUCTION</h1>
      <div>
        <img src = {Banner} alt = "Panda Eating Bamboo" width = "50%" height = "50%"/>
      </div>
      <a href = "https://pandamicpumptoken.wordpress.com/">Click here for Temporary Website</a>
    </StyledDiv>
  );
}

export default UCTemp;
