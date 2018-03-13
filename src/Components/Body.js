import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const Body = styled.section`
  padding 30px 60px;
  
  @media (max-width: 620px) {
    padding 20px 40px;
  }
`