import styled from 'styled-components';

export const NavItem = styled.span`
  font-size: 1.5rem;
  color: white;
  margin: 10px 20px;
  border-color: ${props => props.theme.secondary};
  border-style: ${props => props.selected ? 'solid' : 'none'};
  border-width: 0;
  border-bottom-width: 2px;
  
  @media (max-width: 420px) {
    font-size 1rem;
  }
  
  &:hover {
    cursor: pointer;
  }
`;