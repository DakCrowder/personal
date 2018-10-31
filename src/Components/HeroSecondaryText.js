import styled from 'styled-components';

export const HeroSecondaryText = styled.section`
  color: ${props => props.theme.white};
  font-size: 60px;
  font-weight: 600;
  text-shadow: 4px 4px ${props => props.theme.black};
  
  position: relative;
  display: flex;
  justify-content: flex-start;
  
  @media (max-width: 1024px) {
    font-size: 40px;
  }
  
  @media (max-width: 620px) {
    font-size: 30px;
  }
`;