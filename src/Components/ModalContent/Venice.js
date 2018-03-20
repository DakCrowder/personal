import React, { Component } from 'react';

import image from '../../assets/images/bruno-abatti-116234-unsplash.jpg'
import image2 from '../../assets/images/paul-gilmore-222087-unsplash.jpg'

class Venice extends Component {

  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in tortor vitae ipsum aliquet rhoncus. Mauris diam neque, convallis viverra finibus id, rhoncus non turpis. Morbi sit amet lacus dui. Mauris porta metus vitae nibh finibus consectetur. Ut faucibus mauris et dolor viverra auctor. Nulla gravida nisl imperdiet diam ultrices, vitae tristique velit porttitor. Donec mattis convallis accumsan. Phasellus id metus ornare, tempor felis at, convallis nulla.
        </p>
        <img src={image} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p>
          Proin porttitor viverra enim, in pretium lorem finibus quis. Maecenas gravida ligula sed dui posuere malesuada. Donec eu pharetra ligula. Sed euismod turpis ac eros accumsan, et scelerisque mauris convallis. Donec fringilla pellentesque eros quis interdum. Etiam condimentum est a rhoncus semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed convallis varius metus id tincidunt. Nullam in ante vitae justo tincidunt rutrum.
        </p>
        <p>
          Sed sollicitudin pulvinar nibh sit amet volutpat. Duis dignissim enim vitae libero volutpat, hendrerit rhoncus leo laoreet. Pellentesque vel nunc vitae sem malesuada viverra eget non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et magna ac tellus porta congue vehicula id nisi. In tincidunt dolor nec ligula porta sodales. Aliquam eros nulla, blandit rhoncus risus ac, imperdiet tincidunt massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices interdum massa ut auctor. Donec in aliquam metus. Integer a egestas mauris, sit amet pretium nisl. Vestibulum gravida leo ut tincidunt ullamcorper. Pellentesque vitae libero sit amet libero placerat luctus. Phasellus sodales diam quis lorem feugiat eleifend.
        </p>
        <img src={image2} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p>
          Mauris volutpat vel urna non porttitor. Suspendisse commodo arcu vitae nisl vestibulum, in blandit diam pulvinar. Vestibulum maximus pharetra pharetra. Pellentesque vel suscipit tortor. Sed at commodo nibh. Aliquam placerat tortor sit amet tellus sagittis consequat. In lorem elit, congue eu sapien sit amet, vestibulum fringilla nulla. Vestibulum euismod, purus sed varius gravida, velit quam vestibulum metus, eu sollicitudin mi turpis nec purus. Pellentesque dignissim vehicula urna vulputate porta. Cras ut malesuada erat, in fermentum arcu. Donec congue diam non diam faucibus eleifend. Etiam vitae purus ac dui interdum laoreet. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin gravida diam non interdum lobortis. Nam mollis sodales facilisis.
        </p>
      </div>
    )
  }
}

export default Venice