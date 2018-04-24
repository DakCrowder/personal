import React, { Component } from 'react';
import styled from 'styled-components';
import CardTitle from './CardTitle'

const cities = {
  'London': '3/29',
  'Amsterdam': '4/3',
  'Brussels': '4/8',
  'Paris': '4/11',
  'Lyon': '4/15',
  'Barcelona': '4/18',
  'Marseille': '4/23',
  'Nice': '4/26',
  'Cinque Terre': '4/29',
  'Florence': '5/3',
  'Rome': '5/7',
  'Venice': '5/12',
  'Zagreb':	'5/16',
  'Split': '5/19',
  'Dubrovnik': '?',
  'Sarajevo':	'?',
  'Budapest': '?',
  'Vienna': '?',
  'Munich': '?',
  'Prague':	'?',
  'Berlin': '?',
  'Hamburg': '?',
  'Copenhagen': '?',
  'Stockholm': '?',
  'Tokyo': '6/27',
  'Kyoto': 'TBD',
  'Nara': 'TBD',
  'Hiroshima': 'TBD',
  'Osaka': 'TBD',
  'Hawaii': '7/14',
}

class Destinations extends Component {

  componentWillMount() {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 110) {
      window.scrollTo(0,110);
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <div>
          <div>
            <CardTitle secondary>
              Itinerary
            </CardTitle>
          </div>
          <div>
            <p>
              Dates and locations very much subject to change.  Past Venice its really all up in the air.
            </p>
            <ul style={{listStyleType: 'none', padding: 0}}>
              {
                Object.keys(cities).map(key => {
                    return <li key={ key } style={{paddingBottom: 5, fontWeight: 'bold'}}>{key} - {cities[key]}</li>;
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

export default styled(Destinations)`
  display: flex;
  justify-content: center;
  text-align: center;
`;