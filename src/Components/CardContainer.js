import styled from 'styled-components';
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class CardContainer extends Component {

  render() {
    return(
      <div className={this.props.className}>
        <LazyLoad height={200} once>
          <div>
            {this.props.children}
          </div>
        </LazyLoad>
      </div>
    )
  }
}

export default styled(CardContainer)`
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
  
  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;