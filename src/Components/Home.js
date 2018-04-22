import React, { Component } from 'react';
import { CardContainer } from './CardContainer';
import Card from './Card';

// TODO image object stored / exported elsewhere
import bag from '../assets/images/bag_on_floor.jpg'
import bridge from '../assets/images/london/bridge.jpg'
import canal from '../assets/images/amsterdam/canal.jpg'
import place from '../assets/images/brussels/place.jpg'
import tower from '../assets/images/paris/tower.jpg'

import Departure from './ModalContent/Departure'
import London from './ModalContent/London'
import Amsterdam from './ModalContent/Amsterdam'
import Brussels from './ModalContent/Brussels'
import Paris from './ModalContent/Paris'
import Lyon from './ModalContent/Lyon'

//TODO title text cutoff on smaller screens
//TODO title and close icon in modal overlap on smaller screens
//TODO multi line image subtext extends too close to other text
//TODO object holding card metadata/props and an iterator that places them
//TODO photo component w/ loading state and sharing GET code and styling (???)
//TODO move old photos into firebase storage

class Home extends Component {

  componentWillMount() {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 110) {
      window.scrollTo(0,110);
    }
  }

  render() {
    return (
      <div>
        <CardContainer>
          <Card image={tower} primaryTitle={'Barcelona'} secondaryTitle={'Spain'} modalContent={Lyon} left />
          <Card image={place} primaryTitle={'Lyon'} secondaryTitle={'France'} modalContent={Lyon} />
        </CardContainer>
        <CardContainer>
          <Card image={tower} primaryTitle={'Paris'} secondaryTitle={'France'} modalContent={Paris} left />
          <Card image={place} primaryTitle={'Brussels'} secondaryTitle={'Belgium'} modalContent={Brussels} />
        </CardContainer>
        <CardContainer>
          <Card image={canal} primaryTitle={'Amsterdam'} secondaryTitle={'Netherlands'} modalContent={Amsterdam} left />
          <Card image={bridge} primaryTitle={'London'} secondaryTitle={'England'} modalContent={London} blackClose />
        </CardContainer>
        <CardContainer>
          <Card image={bag} primaryTitle={'Departure'} modalContent={Departure} />
        </CardContainer>
      </div>
    )
  }
}

export default Home;
