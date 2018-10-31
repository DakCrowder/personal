import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Link';

class About extends Component {

  // TODO this should be a higher order component or occur higher up the component tree rather than repeated in all 3 main sections...
  componentWillMount() {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 110) {
      window.scrollTo(0,0);
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <div style={{width: '600px', padding: '0 20px'}}>
          <h2 style={{paddingTop: '40px'}}>About Me</h2>
          <p>
            Hi!  My name is Dakota Crowder and I'm a Software Developer from North Carolina.  I attended the
            University of North Carolina at Chapel Hill (GO HEELS!) then worked at ReverbNation for a couple years.
            I travelled around the world and wrote about it on this site, and I'm eagerly awaiting my next trip.
            Most importantly I'm also currently seeking employment, so check out my
            <Link href={'https://www.linkedin.com/in/dakotacrowder'}> Linkedin </Link>
            and drop me a line.
          </p>
          <p>
            In my free time I play way too much League of Legends, watch way too much Football, and occasionally
            do something productive with my life.  There is nothing more I love than a delicious meal.
          </p>
          <h2 style={{paddingTop: '40px'}}>About The Site</h2>
          <p>
            This site is a static React app sitting in a Firebase bucket.  Images are hosted in firebase storage as well.
            The code is uploaded to a github repository <Link href={'https://github.com/DakCrowder/personal'}>here</Link>.
            This is currently version 2.0, its still rough around the edges but (mostly) gets the job done.  If you notice
            any issues feel free to <s>flame</s> notify me about it!
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
  font-size: 20px;
`;