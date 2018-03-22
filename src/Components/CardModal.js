import React, { Component } from 'react';
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import CardTitle from './CardTitle'
import xCircleWhiteSvg from '../assets/icons/x-circle-white.svg'
import xCircleBlackSvg from '../assets/icons/x-circle-black.svg'
import xSvg from '../assets/icons/x.svg'

class CardModal extends Component {

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
        style={{ content: {top: 0, right: 0, bottom: 0, left: 0, borderRadius: 0, padding: 0, border: 0} }}
        closeTimeoutMS={200}
      >
        <div style={{height: '400px', width: '100%', backgroundImage: `url(${this.props.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', justifyContent: 'center'}}>
          <div style={{padding: '40px', width: '800px', position: 'relative'}}>
            <CardTitle primary>{this.props.primaryTitle}</CardTitle>
            <CardTitle secondary>{this.props.secondaryTitle}</CardTitle>
            <img src={this.props.blackClose ? xCircleBlackSvg : xCircleWhiteSvg}
                 style={{position: 'absolute', top: '50px', right: '40px', width: '60px'}} onClick={this.props.modalClose}/>
          </div>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{padding: '40px', width: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ModalContent/>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}}>
              <button onClick={this.props.modalClose}
               style={{fontSize: '1.5rem', height: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#22ABC7', color: 'white',
               paddingLeft: '10px', paddingRight: '10px'}}
              >Close <img src={xSvg} onClick={this.props.modalClose} style={{paddingLeft: '5px', paddingTop: '2px', height: '28px'}}/></button>
            </div>
          </div>
        </div>
      </ReactModal>
    )
  }
}

export default CardModal;