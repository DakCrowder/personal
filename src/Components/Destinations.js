import React, { Component } from 'react';
import styled from 'styled-components';
import CardTitle from './CardTitle'

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
              Dates and locations very much subject to change.
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
          <CardTitle secondary>
            Power Rankings
          </CardTitle>
          <div>
            <ol>
              <li>London</li>
            </ol>
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