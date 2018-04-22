import React, { Component } from 'react';
import Image from '../Image'

class Departure extends Component {

  render() {
    return (
      <div>
        <p>
          foobar baz bang
        </p>
        <Image imageName={'pie'} caption={'wee'} bucket={'lyon'}/>
        <p>
          wowowo
        </p>
        <Image imageName={'alley'} caption={'woo'} bucket={'lyon'}/>
      </div>
    )
  }
}

export default Departure