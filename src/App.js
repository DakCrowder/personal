import React, { Component } from 'react';
import './App.css';
import { Body } from './Components/Body'
import { Title } from './Components/Title'
import { Header } from './Components/Header'
import { NavBar } from './Components/NavBar'
import { NavItem } from './Components/NavItem'
import Home from './Components/Home'
import Destinations from './Components/Destinations'
import About from './Components/About'
import Page from './Components/Page'
import styled, { ThemeProvider } from 'styled-components';

//TODO group styling / smaller components into an all module
//TODO animation for tab selection
//TODO animation for card click
//TODO sticky header

//TODO color themes for flags of each nation (THEMES directory ???)
const theme = {
  primary: '#22ABC7',
  secondary: '#f890e7'
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
  destinationsSelected = () => this.state.currentTab === 'dest'
  aboutSelected = () => this.state.currentTab === 'about'

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header>
            <Title>dakota crowder</Title>
          </Header>
          <NavBar>
            <NavItem selected={this.homeSelected()} onClick={() => this.handleNavClick('home')}>
              Home
            </NavItem>
            <NavItem selected={this.destinationsSelected()} onClick={() => this.handleNavClick('dest')}>
              Destinations
            </NavItem>
            <NavItem selected={this.aboutSelected()} onClick={() => this.handleNavClick('about')}>
              About
            </NavItem>
          </NavBar>
          <Body>
            <Page visible={this.homeSelected()}>
              <Home/>
            </Page>
            <Page visible={this.destinationsSelected()}>
              <Destinations/>
            </Page>
            <Page visible={this.aboutSelected()}>
              <About/>
            </Page>
          </Body>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
