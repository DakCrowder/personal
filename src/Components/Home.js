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
          <Card image={canal_grande} primaryTitle={'Venice'} secondaryTitle={'Italy'} modalContent={Venice} left />
          <Card image={coliseum} primaryTitle={'Rome'} secondaryTitle={'Italy'} modalContent={Rome} />
        </CardContainer>
        <CardContainer>
          <Card image={duomo} primaryTitle={'Florence'} secondaryTitle={'Italy'} modalContent={Florence} left />
          <Card image={manarola} primaryTitle={'Cinque Terre'} secondaryTitle={'Italy'} modalContent={Cinque} />
        </CardContainer>
        <CardContainer>
          <Card image={beach} primaryTitle={'Nice'} secondaryTitle={'France'} modalContent={Nice} left />
          <Card image={cliffs} primaryTitle={'Marseille'} secondaryTitle={'France'} modalContent={Marseille} />
        </CardContainer>
        <CardContainer>
          <Card image={church} primaryTitle={'Barcelona'} secondaryTitle={'Spain'} modalContent={Barcelona} left/>
          <Card image={fountain} primaryTitle={'Lyon'} secondaryTitle={'France'} modalContent={Lyon} />
        </CardContainer>
        <CardContainer>
          <Card image={tower} primaryTitle={'Paris'} secondaryTitle={'France'} modalContent={Paris} left />
          <Card image={place} primaryTitle={'Brussels'} secondaryTitle={'Belgium'} modalContent={Brussels} />
        </CardContainer>
        <CardContainer>
          <Card image={canal} primaryTitle={'Amsterdam'} secondaryTitle={'Netherlands'} modalContent={Amsterdam} left/>
          <Card image={bridge} primaryTitle={'London'} secondaryTitle={'England'} modalContent={London} blackClose />
        </CardContainer>
        <CardContainer>
          <Card image={bag} primaryTitle={'Departure'} modalContent={Departure} left />
        </CardContainer>
      </div>
    )
  }
}

export default Home;
