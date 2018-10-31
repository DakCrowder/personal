import styled from 'styled-components';
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Spinner } from './Spinner';

class CardContent extends Component {

  renderSpinner() {
    if (this.props.img === '') {
      return (
        <Spinner/>
      )
    }
  }

  render() {
    return(
      <div className={this.props.className} >
        <LazyLoad height={200} once>
          {this.props.children}
        </LazyLoad>
        {this.renderSpinner()}
      </div>
    )
  }
}

export default styled(CardContent)`
  padding: 40px;
  height: calc(100% - 80px);
  background-size: cover;
  background-image: ${props => `url(${props.img})`};
  background-position: center;
  background-color: lightgray;
  
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