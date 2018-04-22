import React, { Component } from 'react';
import PropTypes from "prop-types";
import * as firebase from 'firebase';

export default class Image extends Component {

  static propTypes = {
    bucket: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    blackClose: PropTypes.bool, // TODO extra spacing if 2 images in a row
  }

  constructor() {
    super()
    this.state = {
      image: '',
    }
  }

  componentWillMount() {
    this.getImage()
  }

  getImage() {
    firebase.storage().ref().child(`images/${this.props.bucket}/${this.props.imageName}.jpg`).getDownloadURL().then((url) => {
      this.state.image = url
      this.setState(this.state)
    })
  }

  // TODO what if there are no captions, maybe need to add some extra padding or something
  renderCaption() {
    if (this.props.caption) {
      return (
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          { this.props.caption }
        </p>
      )
    }
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        { this.renderCaption() }
      </div>
    )
  }
}