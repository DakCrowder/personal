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
      <div className={this.props.className}>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <span key={this.props.text}>{this.props.text}</span>
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default styled(FadeText)`
  .example-enter {
    opacity: 0.01;
  }
  
  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  
  .example-leave {
    display: none;
  }
  
  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`;