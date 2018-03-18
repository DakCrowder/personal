import styled from 'styled-components';

export const CardContent = styled.section`
  margin-left: ${props => props.left ? '0' : '30px'};
  margin-right: ${props => props.left ? '30px' : '0'};
  height: 100%;
  
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center; 
  
  @media (max-width: 1024px) {
    margin: 0;
  }
`;