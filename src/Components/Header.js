import styled from 'styled-components';

export const Header = styled.section`
  height: 60px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};;
  border-color: ${props => props.theme.secondary};;
  border-style: solid;
  border-width: 0;
  border-bottom-width: 5px;
`;