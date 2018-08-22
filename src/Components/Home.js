import React, { Component } from 'react';
import CardContainer from './CardContainer';
import Card from './Card';

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
          <Card primaryTitle={'Mostar'} secondaryTitle={'Bosnia'} modalContent={Mostar} bucket={'mostar'} imageName={'bridge'} left />
          <Card primaryTitle={'Venice'} secondaryTitle={'Italy'} modalContent={Venice} bucket={'venice'} imageName={'canal_2'} />
        </CardContainer>
        <CardContainer>
          <Card primaryTitle={'Rome'} secondaryTitle={'Italy'} modalContent={Rome} bucket={'rome'} imageName={'coliseum_outer'} left />
          <Card primaryTitle={'Florence'} secondaryTitle={'Italy'} modalContent={Florence} bucket={'florence'} imageName={'duomo'} />
        </CardContainer>
        <CardContainer>
            <Card primaryTitle={'Cinque Terre'} secondaryTitle={'Italy'} modalContent={Cinque} bucket={'cinque'} imageName={'manarola'} left />
            <Card primaryTitle={'Nice'} secondaryTitle={'France'} modalContent={Nice} bucket={'nice'} imageName={'beach'} />
        </CardContainer>
        <CardContainer>
          <Card primaryTitle={'Marseille'} secondaryTitle={'France'} modalContent={Marseille} bucket={'marseille'} imageName={'cliffs'} left />
          <Card primaryTitle={'Barcelona'} secondaryTitle={'Spain'} modalContent={Barcelona} bucket={'barcelona'} imageName={'church'} />
        </CardContainer>
        <CardContainer>
          <Card primaryTitle={'Lyon'} secondaryTitle={'France'} modalContent={Lyon} bucket={'lyon'} imageName={'fountain'} left />
          <Card primaryTitle={'Paris'} secondaryTitle={'France'} modalContent={Paris} bucket={'paris'} imageName={'tower'} />
        </CardContainer>
        <CardContainer>
          <Card primaryTitle={'Brussels'} secondaryTitle={'Belgium'} modalContent={Brussels} bucket={'brussels'} imageName={'place'} left />
          <Card primaryTitle={'Amsterdam'} secondaryTitle={'Netherlands'} modalContent={Amsterdam} bucket={'amsterdam'} imageName={'canal'} />
        </CardContainer>
        <CardContainer>
          <Card primaryTitle={'London'} secondaryTitle={'England'} modalContent={London} blackClose bucket={'london'} imageName={'bridge'} left />
          <Card primaryTitle={'Departure'} modalContent={Departure} bucket={'misc'} imageName={'bag_on_floor'} />
        </CardContainer>
      </div>
    )
  }
}

export default Home;
