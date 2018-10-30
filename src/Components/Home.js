import React, { Component } from 'react';
import Hero from './Hero'
import heroImg from '../assets/images/in_mountains.jpg'
import fb_logo from '../assets/icons/social/facebook_logo.png'
import li_logo from '../assets/icons/social/linkedin_logo.png'
import in_logo from '../assets/icons/social/instagram_logo.png'
import { Slant } from './Slant'
import { Container } from './Container'
import FadeText from './FadeText'
import Blog from'./Blog'

const displayTexts = [
  'Software Developer',
  'Sports Fanatic',
  'Video Game Enthusiast',
  'Advocate for Delicious Food',
  'Expert Drinker of Beer'
]

class Home extends Component {

  constructor() {
    super()
    this.state = {displayText: displayTexts[0]}
  }

  tick() {
    let currIndex = displayTexts.indexOf(this.state.displayText)
    if (currIndex >= displayTexts.length - 1) {
      currIndex = 0
    } else {
      currIndex++
    }
    this.setState({displayText: displayTexts[currIndex]})
  }

  componentWillMount() {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 110) {
      window.scrollTo(0,0);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <Hero img={heroImg}/>
        <Container height={'600px'} padding={'100px 0px'}>
          <Slant height={'600px'} />
          <Container top={'0'} position={'absolute'}>
            <Container
              position={'absolute'}
              height={'200px'}
              backgroundColor={'white'}
              width={'400px'}
              top={'200px'}
              mediumTop={'150px'}
              left={'200px'}
              mediumLeft={'100px'}
              smallLeft={'0'}
              smallRight={'0'}
              smallMargin={'auto'}
              smallWidth={'300px'}
              shadow>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                  <div style={{padding: '10px', textAlign: 'center', fontSize: '50px'}} >
                    <FadeText text={this.state.displayText}/>
                  </div>
                </div>
            </Container>
            <Container
              position={'absolute'}
              height={'200px'}
              backgroundColor={'white'}
              width={'400px'}
              top={'400px'}
              mediumTop={'450px'}
              right={'200px'}
              mediumRight={'100px'}
              smallLeft={'0'}
              smallRight={'0'}
              smallMargin={'auto'}
              smallWidth={'300px'}
              shadow>
              <h1 style={{padding: '20px', margin: 0}}>Socials</h1>
              <hr style={{margin: 0}}/>
              <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '20px 0', height: '80px'}}>
                <a href={'https://www.facebook.com/dakota.crowder.3'} style={{width: '66px', display: 'flex', justifyContent: 'center'}}>
                  <img src={fb_logo} style={{height: '50px', width: '50px'}}/>
                </a>
                <a href={'https://www.linkedin.com/in/dakotacrowder'} style={{width: '66px', display: 'flex', justifyContent: 'center'}}>
                  <img src={li_logo} style={{height: '50px', width: '66px', marginLeft: '8px'}}/>
                </a>
                <a href={'https://www.instagram.com/dakcrowder/'} style={{width: '66px', display: 'flex', justifyContent: 'center'}}>
                  <img src={in_logo} style={{height: '50px', width: '50px'}}/>
                </a>
              </div>
            </Container>
          </Container>
        </Container>
        <h1 style={{textAlign: 'center'}}>Latest Blog Posts</h1>
        <Blog limit={4} />
        <span>TODO link to full blog</span>
      </div>
    )
  }
}

export default Home;
