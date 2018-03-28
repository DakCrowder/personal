import React, { Component } from 'react';
import { CardContainer } from './CardContainer';
import Card from './Card';

// TODO image object stored / exported elsewhere
import image from '../assets/images/bag_on_floor.jpg'
import image2 from '../assets/images/heidi-sandstrom-187259-unsplash.jpg'

import Departure from './ModalContent/Departure'
import London from './ModalContent/London'

//TODO title text cutoff on smaller screens
//TODO title and close icon in modal overlap on smaller screens

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
          {/*<Card image={image2} primaryTitle={'London'} secondaryTitle={'England'} modalContent={London} blackClose left/>*/}
          <Card image={image} primaryTitle={'Departure'} modalContent={Departure} />
        </CardContainer>
        {/*<CardContainer>*/}
          {/*<Card image={image} primaryTitle={'Venice'} secondaryTitle={'Italy'} modalContent={Venice} left/>*/}
          {/*<Card image={image2} primaryTitle={'London'} secondaryTitle={'England'} modalContent={London} blackClose />*/}
        {/*</CardContainer>*/}
      </div>
    )
  }
}

export default Home;
