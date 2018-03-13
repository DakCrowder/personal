import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const Card = styled.section`
  display: inline-block;
  width: 50%;
  height: 400px;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`;