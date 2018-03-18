import styled from 'styled-components';

export const CardTitle = styled.span`
  height: ${props => props.primary ? '60px' : '30px'};
  color: #FFFFFF;
  position: relative;
  background-color: ${props => props.primary ? '#F090C0' : '#22ABC7'};
  font-family: 'Comfortaa', sans-serif;
  font-size: ${props => props.primary ? '3rem' : '1.5rem'};
  padding: 10px;
  top: ${props => props.primary ? '40px' : '60px'};
  left: 20px;
  
  @media (max-width: 1024px) {
    margin: 0;
  }
`;