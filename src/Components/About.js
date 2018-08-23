import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <div style={{width: '600px'}}>
          <p>
            My name is Dakota Crowder, I'm from North Carolina, and rather sadly I've returned from my ~4 month journey.
            I'm currently seeking employment, so check out lots of buzzwords and maybe some things I've done
            at my <a href={'https://www.linkedin.com/in/dakotacrowder'}>Linkedin page</a>.
          </p>
          <p>
            This website will most likely be an ever-changing developmental experiment that
            evolves as need be.  Currently, the site is simply a static React app sitting in a firebase bucket.  Images are hosted in firebase
            as well.  I'm currently working to make the site more general purpose rather than just a travel blog.
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