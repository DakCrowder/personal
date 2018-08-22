import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CardContent from './CardContent';
import CardTitle from './CardTitle';
import CardModal from './CardModal'
import CardContentContainer from './CardContentContainer'
import * as firebase from 'firebase';

class Card extends Component {

  static propTypes = {
    primaryTitle: PropTypes.string.isRequired,
    secondaryTitle: PropTypes.string.isRequired,
    modalContent: PropTypes.node.isRequired,
    blackClose: PropTypes.bool,
    left: PropTypes.bool,
    bucket: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired
  }

  static defaultProps = {
    blackClose: false,
    left: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      image: '',
    };
  }

  componentWillMount() {
    this.getImage()
  }

  getImage() {
    firebase.storage().ref().child(`images/${this.props.bucket}/${this.props.imageName}.jpg`).getDownloadURL().then((url) => {
      this.setState({image: url})
    })
  }

  handleModalOpen = () => {
    this.setState({ showModal: true });
  }

  handleModalClose = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className={this.props.className}>
        <CardContentContainer left={this.props.left} onClick={this.handleModalOpen}>
          <CardContent img={this.state.image}>
            {this.props.primaryTitle ? <CardTitle primary>{this.props.primaryTitle}</CardTitle> : null}
            {this.props.secondaryTitle ? <CardTitle secondary>{this.props.secondaryTitle}</CardTitle> : null}
          </CardContent>
        </CardContentContainer>
        <CardModal
          isOpen={this.state.showModal}
          image={this.state.image}
          modalClose={this.handleModalClose}
          primaryTitle={this.props.primaryTitle ? this.props.primaryTitle : null}
          secondaryTitle={this.props.secondaryTitle ? this.props.secondaryTitle : null}
          modalContent={this.props.modalContent}
          blackClose={this.props.blackClose}
        />
      </div>
    )
  }
}

export default styled(Card)`
  display: inline-block;
  width: 50%;
  height: 400px;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`;