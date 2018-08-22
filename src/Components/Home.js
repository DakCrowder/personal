import React, { Component } from 'react';
import { CardContainer } from './CardContainer';
import Card from './Card';

// TODO image object stored / exported elsewhere
import bag from '../assets/images/bag_on_floor.jpg'
import bridge from '../assets/images/london/bridge.jpg'
import canal from '../assets/images/amsterdam/canal.jpg'
import place from '../assets/images/brussels/place.jpg'
import tower from '../assets/images/paris/tower.jpg'
import fountain from '../assets/images/fountain.jpg'
import church from '../assets/images/church.jpg'
import cliffs from '../assets/images/cliffs.jpg'
import beach from '../assets/images/beach.jpg'
import manarola from '../assets/images/manarola.jpg'
import duomo from '../assets/images/duomo.jpg'
import coliseum from '../assets/images/coliseum_outer.jpg'
import canal_grande from '../assets/images/canal_2.jpg'
import mostar_bridge from '../assets/images/bridge.jpg'

import Departure from './ModalContent/Departure'
import London from './ModalContent/London'
import Amsterdam from './ModalContent/Amsterdam'
import Brussels from './ModalContent/Brussels'
import Paris from './ModalContent/Paris'
import Lyon from './ModalContent/Lyon'
import Barcelona from './ModalContent/Barcelona'
import Marseille from './ModalContent/Marseille'
import Nice from './ModalContent/Nice'
import Cinque from './ModalContent/Cinque'
import Florence from './ModalContent/Florence'
import Rome from './ModalContent/Rome'
import Venice from './ModalContent/Venice'
import Mostar from './ModalContent/Mostar'

//TODO object holding card metadata/props and an iterator that places them
//TODO move old photos into firebase storage
//TODO image loading state
//TODO better mobile styling in general (mobile header still iffy)

// TODO non static main home page image
// TODO non static modal header image
// TODO cardtitle text alignment bad
// TODO single card alignment on desktop broken
// TODO mobile captions out of center

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
          <Card image={mostar_bridge} primaryTitle={'Mostar'} secondaryTitle={'Bosnia'} modalContent={Mostar} left />
          <Card image={canal_grande} primaryTitle={'Venice'} secondaryTitle={'Italy'} modalContent={Venice} />
        </CardContainer>
        <CardContainer>
          <Card image={coliseum} primaryTitle={'Rome'} secondaryTitle={'Italy'} modalContent={Rome} left />
          <Card image={duomo} primaryTitle={'Florence'} secondaryTitle={'Italy'} modalContent={Florence} />
        </CardContainer>
        <CardContainer>
          <Card image={manarola} primaryTitle={'Cinque Terre'} secondaryTitle={'Italy'} modalContent={Cinque} left />
          <Card image={beach} primaryTitle={'Nice'} secondaryTitle={'France'} modalContent={Nice} />
        </CardContainer>
        <CardContainer>
          <Card image={cliffs} primaryTitle={'Marseille'} secondaryTitle={'France'} modalContent={Marseille} left />
          <Card image={church} primaryTitle={'Barcelona'} secondaryTitle={'Spain'} modalContent={Barcelona} />
        </CardContainer>
        <CardContainer>
          <Card image={fountain} primaryTitle={'Lyon'} secondaryTitle={'France'} modalContent={Lyon} left />
          <Card image={tower} primaryTitle={'Paris'} secondaryTitle={'France'} modalContent={Paris} />
        </CardContainer>
        <CardContainer>
          <Card image={place} primaryTitle={'Brussels'} secondaryTitle={'Belgium'} modalContent={Brussels} left />
          <Card image={canal} primaryTitle={'Amsterdam'} secondaryTitle={'Netherlands'} modalContent={Amsterdam} />
        </CardContainer>
        <CardContainer>
          <Card image={bridge} primaryTitle={'London'} secondaryTitle={'England'} modalContent={London} blackClose left />
          <Card image={bag} primaryTitle={'Departure'} modalContent={Departure} />
        </CardContainer>
      </div>
    )
  }
}

export default Home;
