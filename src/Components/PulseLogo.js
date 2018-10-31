import React, {Component} from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components';

class PulseLogo extends Component {

  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
  }

  render() {
    return (
      <span className={this.props.className}>
        <CSSTransitionGroup
          transitionName="pulse-logo"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <div key={this.props.childKey} style={{height: this.props.height, width: this.props.width}}>
            {this.props.children}
          </div>
        </CSSTransitionGroup>
      </span>
    )
  }
}

export default styled(PulseLogo)`
  padding-left: 20px;
  height: ${props => props.height + 'px'}
  width: ${props => props.width + 'px'}
  
  @keyframes pulse{
    25%  {transform: scale(0.9);}
    75%  {transform: scale(1.1);}
  }
  
  .pulse-logo-enter {
    opacity: 0.01;
  }
  
  .pulse-logo-enter.pulse-logo-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
    animation: pulse 0.4s linear 1;
  }
  
  .pulse-logo-leave {
    display: none;
  }
  
  .terminal-line {
    animation: blink-animation 1s steps(5, start) infinite;
    -webkit-animation: blink-animation 1s steps(5, start) infinite;
  }
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
`;