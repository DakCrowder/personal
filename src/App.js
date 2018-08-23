import React, { Component } from 'react';
import './App.css';
import { Title } from './Components/Title'
import { Header } from './Components/Header'
import { NavBar } from './Components/NavBar'
import { NavItem } from './Components/NavItem'
import Home from './Components/Home'
import Blog from './Components/Blog'
import About from './Components/About'
import Page from './Components/Page'
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import * as firebase from 'firebase';

// Firebase app initialization so we can use storage
const config = {
  apiKey: "AIzaSyC6yHsxnbJB8O6qz8E1A6UDlqBYyDsjDMo",
  authDomain: "dakotacrowder-af109.firebaseapp.com",
  databaseURL: "https://dakotacrowder-af109.firebaseio.com",
  projectId: "dakotacrowder-af109",
  storageBucket: "dakotacrowder-af109.appspot.com",
  messagingSenderId: "134597628241"
}
firebase.initializeApp(config);

//TODO group styling / smaller components into an all module
//TODO animation for tab selection
//TODO animation for card click

//TODO move this somewhere else
const theme = {
  primary: '#22ABC7',
  secondary: '#f890e7',
  black: '#000000',
  white: '#FFFFFF'
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {currentTab: 'home'};
  }

  handleNavClick = (tab) => {
    this.setState({currentTab: tab})
  }

  homeSelected = () => this.state.currentTab === 'home'
  blogSelected = () => this.state.currentTab === 'blog'
  aboutSelected = () => this.state.currentTab === 'about'

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Sticky enabled={true} innerZ={10}>
            <NavBar>
              <NavItem selected={this.homeSelected()} onClick={() => this.handleNavClick('home')}>
                Home
              </NavItem>
              <NavItem selected={this.blogSelected()} onClick={() => this.handleNavClick('blog')}>
                Blog
              </NavItem>
              <NavItem selected={this.aboutSelected()} onClick={() => this.handleNavClick('about')}>
                About
              </NavItem>
            </NavBar>
          </Sticky>
          <Page visible={this.homeSelected()}>
            <Home/>
          </Page>
          <Page visible={this.blogSelected()}>
            <Blog/>
          </Page>
          <Page visible={this.aboutSelected()}>
            <About/>
          </Page>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
