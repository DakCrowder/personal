import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class FlatButton extends Component {

  static propTypes = {
    onClick: PropTypes.func,
  }

  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.className}>
        {this.props.children}
      </button>
    )
  }
}

export default styled(FlatButton)`
  height: 80px;
  font-size: 30px;
  color: white;
  align-items: center;
  background-color: ${props => props.theme.primary};;
  
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;