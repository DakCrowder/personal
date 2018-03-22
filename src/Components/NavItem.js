import styled from 'styled-components';

export const NavItem = styled.span`
  font-size: 1.5rem;
  color: white;
  margin: 10px 20px;
  border-color: #f890e7;
  border-style: ${props => props.selected ? 'solid' : 'none'};
  border-width: 0;
  border-bottom-width: 2px;
  
  @media (max-width: 1024px) {
    
  }
  
  &:hover {
    cursor: pointer;
  }
`;