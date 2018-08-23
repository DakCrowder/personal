import styled from 'styled-components';

export const HeroText = styled.section`
  color: ${props => props.theme.white};
  font-size: 120px;
  font-weight: 600;
  font-family: 'Comfortaa', sans-serif;
  text-shadow: 4px 4px ${props => props.theme.black};
  
  position: relative;
  display: flex;
  justify-content: flex-start;
  
  @media (max-width: 1024px) {
    font-size: 80px;
  }
  
  @media (max-width: 620px) {
    font-size: 60px;
  }
`;