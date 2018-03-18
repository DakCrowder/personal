import React, { Component } from 'react';

class Page extends Component {

  render() {
    if (this.props.visible) {
      return this.props.children
    } else {
      return  null
    }
  }
}

export default Page;