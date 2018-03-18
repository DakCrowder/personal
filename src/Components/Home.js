import React, { Component } from 'react';
import {CardContainer} from "./CardContainer";
import {Card} from "./Card";
import {CardContent} from "./CardContent";
import {CardTitle} from "./CardTitle";

// TODO image object stored / exported elsewhere
import image from '../assets/images/gukhwa-jang-66917-unsplash.jpg'

class Home extends Component {
  render() {
    return (
      <CardContainer>
        <Card>
          <CardContent left img={image}>
            <div>
              <CardTitle primary>Venice</CardTitle>
            </div>
            <div>
              <CardTitle secondary>Italy</CardTitle>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent right img={image}>
            <div>
              <CardTitle primary>London</CardTitle>
            </div>
            <div>
              <CardTitle secondary>England</CardTitle>
            </div>
          </CardContent>
        </Card>
      </CardContainer>
    )
  }
}

export default Home;
