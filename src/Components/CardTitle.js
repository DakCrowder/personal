import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const CardTitle = styled.span`
  height: 60px;
  color: #FFFFFF;
  position: relative;
  background-color: ${props => props.primary ? 'red' : 'blue'};
  font-family: 'Comfortaa', sans-serif;
  font-size: 3rem;
  padding: 20px;
  
  @media (max-width: 1024px) {
    margin: 0;
  }
`;