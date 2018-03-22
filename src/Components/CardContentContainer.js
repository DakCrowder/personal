import styled from 'styled-components';

const CardContentContainer = styled.div`
  height: inherit;
  overflow: hidden;
  margin-left: ${props => props.left ? '0' : '15px'};
  margin-right: ${props => props.left ? '15px' : '0'};
  
  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export default CardContentContainer