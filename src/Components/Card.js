import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CardContent } from './CardContent';
import CardTitle from './CardTitle';
import CardModal from './CardModal'

class Card extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    primaryTitle: PropTypes.string.isRequired,
    secondaryTitle: PropTypes.string.isRequired,
    modalContent: PropTypes.node.isRequired,
    blackClose: PropTypes.bool,
    left: PropTypes.bool,
  }

  static defaultProps = {
    blackClose: false,
    left: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
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
        <CardContent left={this.props.left} img={this.props.image} onClick={this.handleModalOpen}>
          <CardTitle primary>{this.props.primaryTitle}</CardTitle>
          <CardTitle secondary>{this.props.secondaryTitle}</CardTitle>
        </CardContent>
        <CardModal
          isOpen={this.state.showModal}
          image={this.props.image}
          modalClose={this.handleModalClose}
          primaryTitle={this.props.primaryTitle}
          secondaryTitle={this.props.secondaryTitle}
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