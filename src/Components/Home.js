import React, { Component } from 'react';
import Hero from './Hero'
import heroImg from '../assets/images/in_mountains.jpg'
import fb_logo from '../assets/icons/social/facebook_logo.png'
import li_logo from '../assets/icons/social/linkedin_logo.png'
import in_logo from '../assets/icons/social/instagram_logo.png'
import { Slant } from './Slant'
import { Container } from './Container'
import Blog from'./Blog'
import FlatButton from './FlatButton'
import RotatingText from './RotatingText'
import Link from './Link'

class Home extends Component {

  componentWillMount() {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 110) {
      window.scrollTo(0,0);
    }
  }

  render() {
    return (
      <div>
        <Hero img={heroImg}/>
        <RotatingText />
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
                <div style={{padding: '10px', textAlign: 'center', fontSize: '30px'}} >
                  I'm a Software Engineer <br />
                  @ <Link href={'https://transloc.com/'}> Transloc</Link>!
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
                <a href={'https://www.facebook.com/dakota.crowder.3'} style={{width: '66px', display: 'flex', justifyContent: 'center'}} target="_blank">
                  <img src={fb_logo} style={{height: '50px', width: '50px'}}/>
                </a>
                <a href={'https://www.linkedin.com/in/dakotacrowder'} style={{width: '66px', display: 'flex', justifyContent: 'center'}} target="_blank">
                  <img src={li_logo} style={{height: '50px', width: '66px', marginLeft: '8px'}}/>
                </a>
                <a href={'https://www.instagram.com/dakcrowder/'} style={{width: '66px', display: 'flex', justifyContent: 'center'}} target="_blank">
                  <img src={in_logo} style={{height: '50px', width: '50px'}}/>
                </a>
              </div>
            </Container>
          </Container>
        </Container>
        <h1 style={{textAlign: 'center'}}>Latest Blog Posts</h1>
        <Blog limit={4} />
        <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '60px'}}>
          <FlatButton onClick={this.props.navigateToBlog}>See All Blog Posts</FlatButton>
        </div>
      </div>
    )
  }
}

export default Home;
