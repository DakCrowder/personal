import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import xCircleWhiteSvg from '../assets/icons/x-circle-white.svg'
import xCircleBlackSvg from '../assets/icons/x-circle-black.svg'

class CloseIcon extends Component {

  static propTypes = {
    blackClose: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    blackClose: false
  }

  render() {
    return (
      <img className={this.props.className} src={this.props.blackClose ? xCircleBlackSvg : xCircleWhiteSvg} onClick={this.props.onClick}/>
    )
  }
}

export default styled(CloseIcon)`
  position: absolute;
  top: 50px;
  right: 40px;
  width: 60px;
  
  &:hover {
    transform: scale(1.1);
    transition: all .5s;
    cursor: pointer;
  }
`;