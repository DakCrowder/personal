import React, { Component } from 'react';
import CardContainer from './CardContainer';
import Card from './Card';
import { Body } from './Body'

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

const cardData = [
  {primaryTitle: 'Mostar', secondaryTitle: 'Bosnia', modalContent: Mostar, bucket: 'mostar', imageName: 'bridge'},
  {primaryTitle: 'Venice', secondaryTitle: 'Italy', modalContent: Venice, bucket: 'venice', imageName: 'canal_2'},
  {primaryTitle: 'Rome', secondaryTitle: 'Italy', modalContent: Rome, bucket: 'rome', imageName: 'coliseum_outer'},
  {primaryTitle: 'Florence', secondaryTitle: 'Italy', modalContent: Florence, bucket: 'florence', imageName: 'duomo'},
  {primaryTitle: 'Cinque Terre', secondaryTitle: 'Italy', modalContent: Cinque, bucket: 'cinque', imageName: 'manarola'},
  {primaryTitle: 'Nice', secondaryTitle: 'France', modalContent: Nice, bucket: 'nice', imageName: 'beach'},
  {primaryTitle: 'Marseille', secondaryTitle: 'France', modalContent: Marseille, bucket: 'marseille', imageName: 'cliffs'},
  {primaryTitle: 'Barcelona', secondaryTitle: 'Spain', modalContent: Barcelona, bucket: 'barcelona', imageName: 'church'},
  {primaryTitle: 'Lyon', secondaryTitle: 'France', modalContent: Marseille, bucket: 'lyon', imageName: 'fountain'},
  {primaryTitle: 'Paris', secondaryTitle: 'France', modalContent: Paris, bucket: 'paris', imageName: 'tower'},
  {primaryTitle: 'Brussels', secondaryTitle: 'Belgium', modalContent: Brussels, bucket: 'brussels', imageName: 'place'},
  {primaryTitle: 'Amsterdam', secondaryTitle: 'Netherlands', modalContent: Amsterdam, bucket: 'amsterdam', imageName: 'canal'},
  {primaryTitle: 'London', secondaryTitle: 'England', modalContent: London, bucket: 'london', imageName: 'bridge'},
  {primaryTitle: 'Departure', modalContent: Departure, bucket: 'misc', imageName: 'bag_on_floor'}
]

class Blog extends Component {

  componentWillMount() {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 110) {
      window.scrollTo(0,0);
    }
  }

  cardObjToComponent(card, left) {
    return (
      <Card primaryTitle={card.primaryTitle}
            secondaryTitle={card.secondaryTitle}
            modalContent={card.modalContent}
            bucket={card.bucket}
            imageName={card.imageName}
            left={left}
      />
    )
  }

  renderCards() {
    let cards = cardData
    if (this.props.limit) {
      cards = cards.slice(0, this.props.limit)
    }

    return cards.map((card, index) => {
      if ((index % 2) === 0) {
        return (
          <CardContainer>
            {this.cardObjToComponent(card, true)}
            {cards[index+1] && this.cardObjToComponent(cards[index+1], false)}
          </CardContainer>
        )
      }
    })
  }

  render() {
    return (
      <Body>
      {this.renderCards()}
      </Body>
    )
  }
}

export default Blog;
