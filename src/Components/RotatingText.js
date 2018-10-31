import styled from 'styled-components';
import React, { Component } from 'react';
import FadeText from './FadeText';
import PopLogo from './PulseLogo';
import TerminalIcon from "./SVG/TerminalIcon";
import field from '../assets/icons/soccer-field.png'
import joystick from '../assets/icons/joystick.png'
import noodles from '../assets/icons/noodles.png'
import beer from '../assets/icons/beer.png'

const displayTexts = [
  ['Software Developer', <TerminalIcon height={60} width={60}/>],
  ['Sports Fanatic', <img src={field} height={60} width={60}/>],
  ['Video Game Enthusiast', <img src={joystick} height={60} width={60}/>],
  ['Advocate for Delicious Food', <img src={noodles} height={60} width={60}/>],
  ['Expert Drinker of Beer', <img src={beer} height={60} width={60}/>]
]

class RotatingText extends Component {

  constructor() {
    super()
    this.state = {displayIndex: 0}
  }

  tick() {
    let currIndex = this.state.displayIndex
    if (currIndex >= displayTexts.length - 1) {
      currIndex = 0
    } else {
      currIndex++
    }
    this.setState({displayIndex: currIndex})
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return(
      <div className={this.props.className}>
        <FadeText text={displayTexts[this.state.displayIndex][0]}/>
        <PopLogo childKey={this.state.displayIndex} width={60} height={60}>
          {displayTexts[this.state.displayIndex][1]}
        </PopLogo>
      </div>
    )
  }
}

export default styled(RotatingText)`
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 60px 20px 0px 20px;
  font-size: 50px;
  
  @media (max-width: 620px) {
    height: 300px;
  }
`;