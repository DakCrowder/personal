import React, {Component} from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components';

class FadeText extends Component {

  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    return (
      <span className={this.props.className}>
        <CSSTransitionGroup
          transitionName="fade-text"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <span key={this.props.text}>{this.props.text}</span>
        </CSSTransitionGroup>
      </span>
    )
  }
}

export default styled(FadeText)`
  .fade-text-enter {
    opacity: 0.01;
  }
  
  .fade-text-enter.fade-text-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  
  .fade-text-leave {
    display: none;
  }
  
  .fade-text-leave.fade-text-leave-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`;