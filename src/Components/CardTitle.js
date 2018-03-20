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
  height: ${props => props.primary ? '60px' : '30px'};
  line-height: ${props => props.primary ? '60px' : '30px'};
  color: #FFFFFF;
  position: relative;
  background-color: ${props => props.primary ? '#F090C0' : '#22ABC7'};
  font-family: 'Comfortaa', sans-serif;
  font-size: ${props => props.primary ? '3rem' : '1.5rem'};
  padding: 10px;
  display: inline-block;
  align-items: center;
  
  @media (max-width: 1024px) {
    margin: 0;
  }
`;