import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <div style={{width: '600px'}}>
          <p>
            My name is Dakota Crowder, and I'm currently embarking on a ~4 month journey around the world.
            Originally from the blossoming suburb of Cary, North Carolina and a graduate of the University of North Carolina at Chapel Hill,
            I love all things NC and will greatly miss the area while gone.
            I may not know exactly where I will be going, when I will be going there, or what I'll be doing once there... but rest assured,
            all my travels shall be documented here.
          </p>
          <p>
            Speaking of 'here', this website will most likely be an ever-changing developmental experiment that
            evolves as need be.  Currently, the site is simply a static React app sitting in a firebase bucket.  Over time
            I'd like to implement some form of firebase storage and some requests for the ability to 'comment' on posts have been noted.
          </p>
        </div>
      </div>
    );
  }
}

export default styled(About)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;