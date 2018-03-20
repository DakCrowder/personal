import React, { Component } from 'react';
import { CardContainer } from './CardContainer';
import Card from './Card';

// TODO image object stored / exported elsewhere
import image from '../assets/images/gukhwa-jang-66917-unsplash.jpg'
import image2 from '../assets/images/heidi-sandstrom-187259-unsplash.jpg'
///Users/dakotacrowder/personal/src/assets/images/heidi-sandstrom-187259-unsplash.jpg

import Venice from './ModalContent/Venice'

class Home extends Component {

  render() {
    return (
      <div>
        <CardContainer>
          <Card image={image} primaryTitle={'Venice'} secondaryTitle={'Italy'} modalContent={Venice}/>
          <Card image={image2} primaryTitle={'London'} secondaryTitle={'England'} />
        </CardContainer>
      </div>
    )
  }
}

export default Home;
