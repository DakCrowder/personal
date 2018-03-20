import React, { Component } from 'react';
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import CardTitle from './CardTitle'

class CardModal extends Component {

  static defaultProps = {
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    modalClose: PropTypes.func.isRequired,
    modalContent: PropTypes.node.isRequired,
  }

  render() {
    const ModalContent = this.props.modalContent
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel={this.props.primaryTitle}
        style={{ content: {top: 0, right: 0, bottom: 0, left: 0, borderRadius: 0, padding: 0, border: 0} }}
      >
        <div style={{height: '400px', width: '100%', backgroundImage: `url(${this.props.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', justifyContent: 'center'}}>
          <div style={{padding: '40px', width: '800px'}}>
            <CardTitle primary>{this.props.primaryTitle}</CardTitle>
            <CardTitle secondary>{this.props.secondaryTitle}</CardTitle>
          </div>
        </div>
        <div style={{padding: '40px', width: '800px'}}>
          <ModalContent/>
        </div>
        <button onClick={this.props.modalClose}>Close Modal</button>
      </ReactModal>
    )
  }
}

export default CardModal;