import React, { Component } from 'react';
import './App.css';
import { Title } from './Components/Title'

const cities = {
  London: '3/29',
  Amsterdam: '4/3',
  Brussels: '4/8',
  Paris: '4/11',
  Geneva: '4/16',
  Lyon: '4/19',
  Barcelona: '4/22',
  Marseille: '4/27',
  Genoa: '4/30',
  Florence: '5/3',
  Rome: '5/7',
  Venice: '5/12',
  Zagreb:	'5/16',
  Split: '5/19',
  Sarajevo:	'5/22',
  Budapest: '5/26',
  Vienna: '5/30',
  Munich: '6/3',
  Prague:	'6/7',
  Berlin: '6/12',
  Hamburg: '6/16',
  Copenhagen: '6/19',
  Stockholm: '6/23',
  Tokyo: '6/27',
  Kyoto: 'TBD',
  Nara: 'TBD',
  Hiroshima: 'TBD',
  Osaka: 'TBD',
  Hawaii: '7/14',
}

class App extends Component {

  render() {
  return (
    <div className="App">
			<header className="App-header">
				<Title>Dakota Crowder</Title>
			</header>
      <div className="Card">
        <div className="Card-Header">
          <p className="Header">
            Itinerary
          </p>
        </div>
        <div className="Card-Content">
          <p>
            Dates and locations very much subject to change.  Will be posting to this (soon to be) website w/ photos and updates throughout the trip.
          </p>
          <ul>
            {
              Object.keys(cities).map(key => {
                return <li key={ key }>{key} - {cities[key]}</li>;
                }
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
