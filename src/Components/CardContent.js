import styled from 'styled-components';

export const CardContent = styled.div`
  padding: 40px;
  height: 100%;
  
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    transform: scale(1.1);
    transition: all .5s ease-in-out;
  }
  
  @media (max-width: 1024px) {
    margin: 0;
  }
  
  @media (max-width: 620px) {
    padding: 20px;
  }
`;