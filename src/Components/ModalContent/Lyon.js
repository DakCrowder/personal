import React, { Component } from 'react';

import * as firebase from 'firebase';

// TODO need to initialize this at a higher level...
const config = {
  apiKey: "AIzaSyC6yHsxnbJB8O6qz8E1A6UDlqBYyDsjDMo",
  authDomain: "dakotacrowder-af109.firebaseapp.com",
  databaseURL: "https://dakotacrowder-af109.firebaseio.com",
  projectId: "dakotacrowder-af109",
  storageBucket: "dakotacrowder-af109.appspot.com",
  messagingSenderId: "134597628241"
}
firebase.initializeApp(config);

const storage = firebase.storage().ref()

class Departure extends Component {

  constructor () {
    super()
    this.state = {
      pie: '',
    }
    this.getImage('pie')
  }

  //TODO getImage to image component and pass city name (lyon)
  getImage (image) {
    storage.child(`images/lyon/${image}.jpg`).getDownloadURL().then((url) => {
      this.state[image] = url
      this.setState(this.state)
    })
  }

  render() {
    return (
      <div>
        <p>
          foobar baz bang
        </p>
        <img src={this.state.pie} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          Everything I'll be bringing along
        </p>
        <p>
          wowowo
        </p>
      </div>
    )
  }
}

export default Departure