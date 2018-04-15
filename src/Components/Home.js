import React, { Component } from 'react';
import { CardContainer } from './CardContainer';
import Card from './Card';

// TODO image object stored / exported elsewhere
import bag from '../assets/images/bag_on_floor.jpg'
import bridge from '../assets/images/london/bridge.jpg'
import canal from '../assets/images/amsterdam/canal.jpg'
import place from '../assets/images/brussels/place.jpg'

import Departure from './ModalContent/Departure'
import London from './ModalContent/London'
import Amsterdam from './ModalContent/Amsterdam'
import Brussels from './ModalContent/Brussels'

//TODO title text cutoff on smaller screens
//TODO title and close icon in modal overlap on smaller screens
//TODO multi line image subtext extends too close to other text

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
          <Card image={place} primaryTitle={'Brussels'} secondaryTitle={'Belgium'} modalContent={Brussels} left/>
          <Card image={canal} primaryTitle={'Amsterdam'} secondaryTitle={'Netherlands'} modalContent={Amsterdam} />
        </CardContainer>
        <CardContainer>
          <Card image={bridge} primaryTitle={'London'} secondaryTitle={'England'} modalContent={London} blackClose left/>
          <Card image={bag} primaryTitle={'Departure'} modalContent={Departure} />
        </CardContainer>
      </div>
    )
  }
}

export default Home;
