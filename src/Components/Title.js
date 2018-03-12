import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #000000;
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  
  @media (max-width: 620px) {
    font-size: 1.5em;
  }
`;