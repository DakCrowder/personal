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
  'Venice': '5/14',
  'Berlin':	'5/16',
  'Prague': '5/20',
  'Vienna': '5/24',
  'Budapest':	'5/27',
  'Zagreb': '5/31',
  'Split': '6/3',
  'Mostar': '6/6',
  'Sarajevo':	'6/9',
  'Zabljak': '6/12',
  'Kotor': '6/15',
  'Dubrovnik': '6/18',
  'Santorini': '6/20',
  'Ios': '6/23',
  'Athens': '6/25',
  'Tokyo': '6/28',
  'Hakone': 'TBD',
  'Kyoto': 'TBD',
  'Hiroshima': 'TBD',
  'Fukuoka': 'TBD',
  'Osaka': 'TBD',
  'Tokyo 2': 'TBD',
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
              This might finally be correct.
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