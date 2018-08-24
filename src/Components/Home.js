import React, { Component } from 'react';
import Hero from './Hero'
import heroImg from '../assets/images/in_mountains.jpg'
import { Slant } from './Slant'
import { Container } from './Container'

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
        <Hero img={heroImg}/>
        <Container height={'600px'} padding={'100px 0px'}>
          <Slant height={'600px'} />
          <Container top={'0'} position={'absolute'}>
            <Container
              className={'animated fadeIn'}
              position={'absolute'}
              height={'200px'}
              backgroundColor={'white'}
              width={'300px'}
              top={'200px'}
              mediumTop={'150px'}
              left={'200px'}
              mediumLeft={'100px'}
              smallLeft={'0'}
              smallRight={'0'}
              smallMargin={'auto'}>
              I'm a Software Developer - and I'm looking for a job!
            </Container>
            <Container
              className={'animated fadeIn'}
              position={'absolute'}
              height={'200px'}
              backgroundColor={'white'}
              width={'300px'}
              top={'400px'}
              mediumTop={'450px'}
              right={'200px'}
              mediumRight={'100px'}
              smallLeft={'0'}
              smallRight={'0'}
              smallMargin={'auto'}>
              Contact Me
              Facebook
              LinkedIn
            </Container>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Home;
