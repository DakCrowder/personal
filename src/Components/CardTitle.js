import styled from 'styled-components';
import React, { Component } from 'react';

class CardTitle extends Component {
  render() {
    return (
      <div>
        <span className={this.props.className}>{this.props.children}</span>
      </div>
    )
  }
}

export default styled(CardTitle)`
  line-height: ${props => props.primary ? '60px' : '30px'};
  color: #FFFFFF;
  position: relative;
  background-color: ${props => props.primary ? props.theme.primary : props.theme.secondary};
  font-family: 'Comfortaa', sans-serif;
  font-size: ${props => props.primary ? '3rem' : '1.5rem'};
  padding: 10px;
  display: inline-block;
  align-items: center;
  
  @media (max-width: 1024px) {
    margin: 0;
  }
  
  @media (max-width: 620px) {
    font-size: ${props => props.primary ? '2rem' : '1rem'};
    line-height: ${props => props.primary ? '30px' : '15px'};
  }
`;