import styled from 'styled-components';

export const Slant = styled.div`
  position: relative;
  
  height: ${props => props.height ? props.height : '20px'};
  
  -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  clip-path: polygon(0 0, 100% 30%, 100% 100%, 0 70%);
  
  background-image: linear-gradient(to right, ${props => `${props.theme.orange}, ${props.theme.red}`});
`;