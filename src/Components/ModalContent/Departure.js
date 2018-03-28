import React, { Component } from 'react';

import image from '../../assets/images/items_on_bed.jpg'

class Departure extends Component {

  render() {
    return (
      <div>
        <p>
          Its difficult to describe how this moment feels.
        </p>
        <p>
          I'm nervously excited waiting for my first flight to depart.  After years of dreaming and only a few weeks planning (I only have two locations
          booked), Europe is on the horizon.
        </p>
        <img src={image} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          Everything I'll be bringing along
        </p>
        <p>
          Even after planning out what I'd be packing, I was still shocked at how few items I was able to fit into the bag (and how heavy it is).
          My regular wardrobe has been cut down to a meager ~5 shirts, shorts and the like.  Slim pickings compared to my usual attire, although
          selecting a few of each item made me realize how many items I have that are unnecessary and barely used.
        </p>
        <p>
          Thanks to all the Friends & Family who supported me on taking this journey - its sure to be an exhilarating experience and I hope
          to document much of it here.
        </p>
      </div>
    )
  }
}

export default Departure