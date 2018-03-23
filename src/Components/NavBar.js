import styled from 'styled-components';

export const NavBar = styled.section`
  padding: 10px 0;
  background-color: ${props => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1024px) {
    margin: 0;
  }
`;