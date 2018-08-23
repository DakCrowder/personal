import styled from 'styled-components';
import React, { Component } from 'react';
import { HeroText } from './HeroText'
import { HeroTextContainer } from './HeroTextContainer'

class Hero extends Component {

  render() {
    return(
      <div className={this.props.className} >
        <HeroTextContainer>
          <div>
            <HeroText>
              Dakota
            </HeroText>
          </div>
          <div style={{paddingLeft: 40}}>
            <HeroText>
              Crowder
            </HeroText>
          </div>
        </HeroTextContainer>
      </div>
    )
  }
}

export default styled(Hero)`
  height: 600px;
  background-size: cover;
  background-image: ${props => `url(${props.img})`};
  background-position: 50% 80%;
  background-color: lightgray;
  
  @media (max-width: 1024px) {
    height: 400px;
    background-position: 50% 80%;
  }
  
  @media (max-width: 620px) {
    background-position: center bottom;
  }
`;