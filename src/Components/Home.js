import React, { Component } from 'react';
import Hero from './Hero'
import heroImg from '../assets/images/in_mountains.jpg'

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
        yahoo
      </div>
    )
  }
}

export default Home;
