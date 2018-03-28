import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import xSvg from '../assets/icons/x.svg'

class CloseButton extends Component {

  static propTypes = {
    onClick: PropTypes.func,
  }

  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.className}>
        Close <img src={xSvg} onClick={this.props.modalClose} style={{paddingLeft: '5px', paddingTop: '2px', height: '28px'}} alt=''/>
      </button>
    )
  }
}

export default styled(CloseButton)`
  font-size: 1.5rem;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #22ABC7;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;