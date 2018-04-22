import React, { Component } from 'react';
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import CardTitle from './CardTitle'
import CloseIcon from './CloseIcon'
import CloseButton from './CloseButton'
import ModalHeaderContent from './ModalHeaderContent'

class CardModal extends Component {

  // TODO these need to be propTypes not defaultProps
  static defaultProps = {
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    modalClose: PropTypes.func.isRequired,
    modalContent: PropTypes.node.isRequired,
    blackClose: PropTypes.bool,
  }

  render() {
    const ModalContent = this.props.modalContent
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel={this.props.primaryTitle}
        style={{ content: {top: 0, right: 0, bottom: 0, left: 0, borderRadius: 0, padding: 0, border: 0, zIndex: 20}, overlay: {zIndex: 20} }}
        closeTimeoutMS={200}
      >
        <div style={{height: '400px', width: '100%', backgroundImage: `url(${this.props.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', justifyContent: 'center'}}>
          <ModalHeaderContent>
            {this.props.primaryTitle ? <CardTitle primary>{this.props.primaryTitle}</CardTitle> : null}
            {this.props.secondaryTitle ? <CardTitle secondary>{this.props.secondaryTitle}</CardTitle> : null}
            <CloseIcon onClick={this.props.modalClose} blackClose={this.props.blackClose}/>
          </ModalHeaderContent>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{padding: '40px', width: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ModalContent/>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}}>
              <CloseButton onClick={this.props.modalClose}/>
            </div>
          </div>
        </div>
      </ReactModal>
    )
  }
}

export default CardModal;