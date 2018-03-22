import styled from 'styled-components';

export const CardContent = styled.div`
  margin-left: ${props => props.left ? '0' : '15px'};
  margin-right: ${props => props.left ? '15px' : '0'};
  padding: 40px;
  height: 100%;
  
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    //transform: scale(1.1);
    //transition: all .5s;
  }
  
  @media (max-width: 1024px) {
    margin: 0;
  }
`;